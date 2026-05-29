import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",

    monthly: "₹999",
    yearly: "₹9,999",

    students: "Up to 500 Students",

    features: [
      "1 Course",
      "100 GB Storage",
      "Video Lessons",
      "PDF Notes",
      "Text Lessons",
      "Custom Branding",
      "Certificates",
      "Online Payments",
      "Email Support",
    ],

    highlight: false,
  },

  {
    name: "Professional",

    monthly: "₹2,499",
    yearly: "₹24,999",

    students: "Up to 2,000 Students",

    features: [
      "Up to 5 Courses",
      "250 GB Storage",
      "Video Lessons",
      "PDF Notes",
      "Text Lessons",
      "Live Classes",
      "Certificates",
      "Custom Branding",
      "Analytics Dashboard",
      "Priority Support",
    ],

    highlight: true,
  },

  {
    name: "Enterprise",

    monthly: "₹4,999",
    yearly: "₹49,999",

    students: "Unlimited Students",

    features: [
      "Unlimited Courses",
      "1 TB Storage",
      "Unlimited Students",
      "Video Lessons",
      "PDF Notes",
      "Text Lessons",
      "Live Classes",
      "Certificates",
      "Custom Branding",
      "Custom Domain",
      "Priority Support",
    ],

    highlight: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] =
    useState("monthly");

  const sendToWhatsApp = (
    plan
  ) => {
    const phone =
      "919400690911";

    const price =
      billing === "monthly"
        ? plan.monthly
        : plan.yearly;

    const period =
      billing === "monthly"
        ? "/month"
        : "/year";

    const message =
      encodeURIComponent(
        `Hello EduLine Team 👋

I am interested in the ${plan.name} plan.

Price: ${price}${period}
Student Limit: ${plan.students}

Please share more details.`
      );

    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section
      className="py-32 bg-white md:px-16 text-gray-900"
      id="Pricing"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-black text-slate-900 mb-6">
            Simple Pricing
          </h2>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Start small and scale as
            your institution grows.
            No hidden fees. Cancel
            anytime.
          </p>

        </div>

        {/* Billing Toggle */}

        <div className="flex justify-center mb-14">

          <div className="bg-slate-100 p-1 rounded-2xl flex">

            <button
              onClick={() =>
                setBilling(
                  "monthly"
                )
              }
              className={`px-6 py-3 rounded-xl font-semibold transition ${
                billing ===
                "monthly"
                  ? "bg-white shadow-md"
                  : ""
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() =>
                setBilling(
                  "yearly"
                )
              }
              className={`px-6 py-3 rounded-xl font-semibold transition ${
                billing ===
                "yearly"
                  ? "bg-white shadow-md"
                  : ""
              }`}
            >
              Yearly

              <span className="ml-2 text-green-600 text-sm">
                Save 17%
              </span>

            </button>

          </div>

        </div>

        {/* Pricing Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map(
            (
              plan,
              idx
            ) => (
              <div
                key={idx}
                className={`relative rounded-3xl border p-8 flex flex-col transition-all ${
                  plan.highlight
                    ? "border-blue-600 bg-blue-50/30 shadow-2xl shadow-blue-100 scale-[1.03]"
                    : "border-slate-200 bg-white"
                }`}
              >

                {plan.highlight && (
                  <div className="absolute top-5 right-5 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                {/* Plan */}

                <h3 className="text-2xl font-bold text-slate-900 mb-5">
                  {plan.name}
                </h3>

                {/* Price */}

                <div className="mb-4">

                  <span className="text-5xl font-black text-slate-900">
                    {billing ===
                    "monthly"
                      ? plan.monthly
                      : plan.yearly}
                  </span>

                  <span className="text-slate-500 ml-2">
                    {billing ===
                    "monthly"
                      ? "/mo"
                      : "/yr"}
                  </span>

                </div>

                {/* Student Limit */}

                <p className="text-sm font-semibold text-blue-600 mb-8">
                  {
                    plan.students
                  }
                </p>

                {/* Features */}

                <ul className="space-y-4 flex-1">

                  {plan.features.map(
                    (
                      feature,
                      i
                    ) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-600"
                      >
                        <Check
                          size={
                            18
                          }
                          className="text-blue-600 shrink-0"
                        />

                        <span className="text-sm">
                          {
                            feature
                          }
                        </span>

                      </li>
                    )
                  )}

                </ul>

                {/* CTA */}

                <button
                  onClick={() =>
                    window.location.href = "/onboard"
                  }
                  className={`mt-10 w-full py-4 rounded-2xl font-bold transition ${
                    plan.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Get Started
                </button>

              </div>
            )
          )}

        </div>

        {/* Bottom Note */}

        <div className="mt-16 text-center">

          <p className="text-slate-500 text-sm">
            Need custom student
            limits, dedicated
            infrastructure, or
            enterprise features?
          </p>

          <a
            href="https://wa.me/919400690911"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-blue-600 font-bold"
          >
            Contact Sales →
          </a>

        </div>

      </div>
    </section>
  );
}