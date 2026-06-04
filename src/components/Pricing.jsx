import { useState } from "react";
import {
  Check,
  GraduationCap,
  TrendingUp,
  Building2,
  ShieldCheck,
} from "lucide-react";

const plans = [{
  name: "Free Trial",
  priceMonthly: "₹1",
  priceYearly: "₹1",
  students: "25",
  bestFor: "Try Eduline Risk-Free",
  highlight: false,
  trial: true,
  features: [
    "7 Days Free",
    "1 Course",
    "25 Students",
    "5 GB Storage",
    "Video Lessons",
    "PDF Notes",
    "Text Lessons",
    "Custom Branding",
    "No Credit Card Required"
  ],
},
{
  name: "Launch",
  priceMonthly: "₹499",
  priceYearly: "₹4,999",
  students: "500",
  bestFor: "Independent Educators",
  highlight: false,
  features: [
    "1 Course",
    "100 GB Storage",
    "Video Lessons",
    "PDF Notes",
    "Text Lessons",
    "Certificates",
    "Online Payments",
    "Custom Branding",
    "Email Support",
  ],
},

{
  name: "Growth",
  priceMonthly: "₹999",
  priceYearly: "₹9,999",
  students: "2,000",
  bestFor: "Growing Academies",
  highlight: true,
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
},

{
  name: "Academy",
  priceMonthly: "₹2,999",
  priceYearly: "₹29,999",
  students: "Unlimited",
  bestFor: "Institutions & Teams",
  highlight: false,
  features: [
    "Unlimited Courses",
    "1 TB Storage",
    "Unlimited Students",
    "Live Classes",
    "Certificates",
    "Custom Domain",
    "Analytics Dashboard",
    "Priority Support",
    "Advanced Branding",
  ],
},
];

export default function Pricing() {
  const [billing, setBilling] = useState("yearly");

  return (
    <section
      className="relative py-28 bg-[#f7faf8] overflow-hidden"
      id="Pricing"
    >
      {/* Background */}

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16,185,129,.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16,185,129,.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-emerald-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center max-w-4xl mx-auto mb-16">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              bg-white
              border-2
              border-slate-900
              rounded-full
              mb-6
            "
          >
            <ShieldCheck size={14} />

            <span className="text-xs font-black uppercase tracking-widest">
              Simple Pricing
            </span>
          </div>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-black
              tracking-tight
              leading-[1]
              text-slate-900
            "
          >
            Pricing Designed For
            <span className="block text-emerald-600">
              Growing Academies
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Build your own education business. Keep your students,
            your brand and your revenue.
          </p>

        </div>

        {/* Trust Row */}

        <div className="grid md:grid-cols-3 gap-6 mb-16">

          <div className="bg-white border-2 border-slate-900 rounded-[24px] p-6 shadow-[6px_6px_0_0_rgba(15,23,42,.08)]">
            <h3 className="font-black text-lg text-slate-900">
              Your Brand
            </h3>

            <p className="mt-2 text-slate-600">
              Custom domain, logo and academy identity.
            </p>
          </div>

          <div className="bg-white border-2 border-slate-900 rounded-[24px] p-6 shadow-[6px_6px_0_0_rgba(15,23,42,.08)]">
            <h3 className="font-black text-lg text-slate-900">
              Your Revenue
            </h3>

            <p className="mt-2 text-slate-600">
              Receive payments directly into your account.
            </p>
          </div>

          <div className="bg-white border-2 border-slate-900 rounded-[24px] p-6 shadow-[6px_6px_0_0_rgba(15,23,42,.08)]">
            <h3 className="font-black text-lg text-slate-900">
              Your Students
            </h3>

            <p className="mt-2 text-slate-600">
              Build direct relationships without middlemen.
            </p>
          </div>

        </div>

        {/* Toggle */}

        <div className="flex justify-center mb-14">

          <div className="bg-white border-2 border-slate-900 p-1 rounded-2xl">

            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-3 rounded-xl font-bold transition ${billing === "monthly"
                  ? "bg-slate-900 text-white"
                  : "text-slate-600"
                }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-3 rounded-xl font-bold transition ${billing === "yearly"
                  ? "bg-emerald-500 text-white"
                  : "text-slate-600"
                }`}
            >
              Yearly
            </button>

          </div>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, i) => (
            <div
              key={i}
              className={`
                relative
                rounded-[32px]
                border-2
                border-slate-900
                p-8
                flex
                flex-col
                shadow-[10px_10px_0_0_rgba(15,23,42,.08)]
                ${plan.highlight
                  ? "bg-emerald-500 lg:scale-105"
                  : "bg-white"
                }
              `}
            >

              {plan.highlight && (
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    bg-white
                    border-2
                    border-slate-900
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-black
                  "
                >
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">

                <h3 className="text-3xl font-black text-slate-900">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm font-bold text-slate-700">
                  Best For: {plan.bestFor}
                </p>

              </div>

              <div className="mb-8">

                <div className="text-6xl font-black text-slate-900">
                  {billing === "monthly"
                    ? plan.priceMonthly
                    : plan.priceYearly}
                </div>

                <div className="text-slate-700 font-semibold mt-2">
                  {billing === "monthly"
                    ? "/month"
                    : "/year"}
                </div>

              </div>

              <div
                className="
                  bg-white/80
                  border-2
                  border-slate-900
                  rounded-2xl
                  p-5
                  mb-8
                "
              >
                <div className="text-xs uppercase font-black text-slate-500">
                  Student Capacity
                </div>

                <div className="text-4xl font-black text-slate-900 mt-2">
                  {plan.students}
                </div>

                <div className="text-slate-600">
                  Students
                </div>

              </div>

              <ul className="space-y-4 flex-1">

                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3"
                  >
                    <Check
                      size={18}
                      className="text-slate-900 mt-1 shrink-0"
                    />

                    <span className="text-slate-800 font-medium">
                      {feature}
                    </span>
                  </li>
                ))}

              </ul>

              <button
                onClick={() =>
                  (window.location.href = "/onboard")
                }
                className={`
                  mt-10
                  w-full
                  py-4
                  rounded-2xl
                  font-black
                  border-2
                  border-slate-900
                  transition-all
                  ${plan.highlight
                    ? "bg-white text-slate-900 hover:translate-y-1"
                    : "bg-slate-900 text-white hover:bg-black"
                  }
                `}
              >
                Get Started
              </button>

            </div>
          ))}

        </div>

        {/* Enterprise CTA */}

        <div className="mt-16">

          <div
            className="
              bg-slate-900
              rounded-[32px]
              p-10
              text-center
              text-white
            "
          >

            <Building2
              size={42}
              className="mx-auto mb-5 text-emerald-400"
            />

            <h3 className="text-3xl font-black">
              Need Something Custom?
            </h3>

            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              Dedicated infrastructure, larger storage,
              higher student limits or custom development.
            </p>

            <a
              href="https://wa.me/919400690911"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                mt-8
                bg-emerald-500
                px-8
                py-4
                rounded-2xl
                font-black
                text-white
              "
            >
              <TrendingUp size={18} />
              Contact Sales
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}