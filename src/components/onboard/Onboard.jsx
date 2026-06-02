import {
  useState,
} from "react";

import StepInstitute from "./StepInstitute";
import StepDomain from "./StepDomain";
import StepAdmin from "./StepAdmin";
import StepBranding from "./StepBranding";
import StepPricing from "./StepPricing";
import SuccessScreen from "./SuccessScreen";
import validateOnboard
  from "../../shared/validateOnboard";
import api from "../../shared/api";
export default function Onboard() {

  const [step, setStep] =
    useState(1);
  const [loading, setLoading] =
    useState(false);
  const [form, setForm] =
    useState({
      instituteName: "",
      subdomain: "",
      customDomain: "",
      adminName: "",
      adminEmail: "",
      password: "",
      phone: "",
      type: "",

      primaryColor:
        "#1e3a8a",

      accentColor:
        "#ffffff",

      billing:
        "yearly",

      plan:
        "starter",
    });

  const [errors, setErrors] =
    useState({});

  const [success, setSuccess] =
    useState(false);

  const [createdUrl, setCreatedUrl] =
    useState("");

  function update(
    field,
    value
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function renderStep() {

    switch (step) {

      case 1:
        return (
          <StepInstitute
            form={form}
            update={update}
            errors={errors}
          />
        );

      case 2:
        return (
          <StepDomain
            form={form}
            update={update}
            errors={errors}
          />
        );

      case 3:
        return (
          <StepAdmin
            form={form}
            update={update}
            errors={errors}
          />
        );

      case 4:
        return (
          <StepBranding
            form={form}
            update={update}
          />
        );

      case 5:
        return (
          <StepPricing
            form={form}
            update={update}
          />
        );

      default:
        return null;
    }
  }
  function nextStep() {

    const validationErrors =
      validateOnboard(
        step,
        form
      );

    setErrors(
      validationErrors
    );

    if (
      Object.keys(
        validationErrors
      ).length > 0
    ) {
      return;
    }

    setStep(step + 1);
  }
  if (success) {
    return (
      <SuccessScreen
        createdUrl={
          createdUrl
        }
      />
    );
  }

  return (
    <div className="min-h-screen w-[100vw] bg-slate-50 py-30 px-6 text-gray-800">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl border shadow-xl p-10">

        {renderStep()}

        <div className="flex justify-between mt-10">

          {step > 1 ? (
            <button
              onClick={() =>
                setStep(
                  step - 1
                )
              }
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 5 ? (
            <button
              onClick={() =>
                nextStep()
              }
              className="bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              Continue
            </button>
          ) : (
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-xl disabled:opacity-50"
              onClick={() =>
                continueToPayment()
              }
              disabled={loading}
            >
              {loading
                ? "Processing..."
                : "Continue To Payment"}
            </button>
          )}

        </div>

      </div>
    </div>
  );

  async function continueToPayment() {

    try {

      /* =========================================
         VALIDATE CURRENT STEP
      ========================================= */

      const validationErrors =
        validateOnboard(
          step,
          form
        );

      setErrors(
        validationErrors
      );

      if (
        Object.keys(
          validationErrors
        ).length > 0
      ) {
        return;
      }

      /* =========================================
         LOADING
      ========================================= */

      setLoading(true);

      /* =========================================
         CREATE ORDER
      ========================================= */

      /* =========================================
    CHECK AVAILABILITY
 ========================================= */

      await api.post(
        "/saas/validate-onboarding",
        {
          subdomain:
            form.subdomain,

          adminEmail:
            form.adminEmail,
        }
      );

      /* =========================================
         CREATE ORDER
      ========================================= */

      const res =
        await api.post(
          "/saas/create-order",
          {
            plan:
              form.plan,

            billing:
              form.billing,
          }
        );
      const {
        orderId,
        amount,
        currency,
        key,
      } = res.data;

      /* =========================================
         RAZORPAY
      ========================================= */

      const options = {
        key,

        amount,

        currency,

        name:
          "Eduline",

        description:
          `${form.plan} Plan Subscription`,

        order_id:
          orderId,

        prefill: {
          name:
            form.adminName,

          email:
            form.adminEmail,

          contact:
            form.phone,
        },

        theme: {
          color:
            form.primaryColor ||
            "#2563eb",
        },

        handler:
          async function (
            response
          ) {

            try {

              /* =========================================
                 VERIFY PAYMENT
              ========================================= */

              const verifyRes =
                await api.post(
                  "/saas/verify-payment",
                  {

                    // PAYMENT
                    razorpay_order_id:
                      response.razorpay_order_id,

                    razorpay_payment_id:
                      response.razorpay_payment_id,

                    razorpay_signature:
                      response.razorpay_signature,

                    // ONBOARD DATA
                    instituteName:
                      form.instituteName,

                    subdomain:
                      form.subdomain,

                    adminName:
                      form.adminName,

                    adminEmail:
                      form.adminEmail,

                    password:
                      form.password,

                    phone:
                      form.phone,

                    type:
                      form.type,

                    primaryColor:
                      form.primaryColor,

                    accentColor:
                      form.accentColor,

                    billing:
                      form.billing,

                    plan:
                      form.plan,
                  }
                );

              console.log(
                "VERIFY RESPONSE:",
                verifyRes.data
              );

              /* =========================================
                 SUCCESS
              ========================================= */

              setCreatedUrl(
                verifyRes.data
                  ?.url
              );

              setSuccess(true);

            } catch (err) {

              console.error(
                "VERIFY ERROR:",
                err
              );

              alert(
                err.response?.data
                  ?.message ||
                "Payment verification failed"
              );
            }
          },

        modal: {
          ondismiss:
            function () {

              console.log(
                "Payment popup closed"
              );

              setLoading(false);
            },
        },
      };

      /* =========================================
         OPEN RAZORPAY
      ========================================= */

      const razorpay =
        new window.Razorpay(
          options
        );

      razorpay.open();

    } catch (err) {

      console.error(
        "PAYMENT ERROR:",
        err
      );

      alert(
        err.response?.data
          ?.message ||
        "Failed to start payment"
      );

    } finally {

      setLoading(false);
    }
  }
}