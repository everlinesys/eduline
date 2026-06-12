import { useState } from "react";
import {
  Check,
  Building2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MessageCircle
} from "lucide-react";

const plans = [
  {
    name: "Free",
    priceMonthly: "0",
    priceYearly: "0",
    students: "25",
    bestFor: "Try Eduline Risk-Free",
    highlight: false,
    trial: true,
    features: [
      "7 Days Free Access",
      "1 Live Active Course",
      "25 Maximum Students",
      "5 GB Media Storage",
      "HD Video Lessons",
      "Interactive PDF Notes",
      "Rich Text Modules",
      "Custom Brand Elements",
      "No Credit Card Needed"
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
      "1 Live Active Course",
      "100 GB Cloud Storage",
      "HD Video Lessons",
      "Interactive PDF Notes",
      "Rich Text Modules",
      "Automated Certificates",
      "Direct Online Payments",
      "Custom Brand Elements",
      "Standard Email Support"
    ],
  },
  {
    name: "Growth",
    priceMonthly: "₹999",
    priceYearly: "₹9,999",
    students: "2,000",
    bestFor: "Growing Academies",
    highlight: true, // Becomes the deep emerald signature card
    features: [
      "Up to 5 Active Courses",
      "250 GB Cloud Storage",
      "HD Video Lessons",
      "Interactive PDF Notes",
      "Rich Text Modules",
      "Live Class Stream Integration",
      "Automated Certificates",
      "Custom Brand Elements",
      "Analytics & Insights Panel",
      "Priority Handler Support"
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
      "Unlimited Live Courses",
      "1 TB Dedicated Storage",
      "Unlimited Active Students",
      "Live Class Stream Integration",
      "Automated Certificates",
      "White-label Custom Domain",
      "Analytics & Insights Panel",
      "Priority Handler Support",
      "Advanced Structural Branding"
    ],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("yearly");

  return (
    <section className="relative py-5 bg-slate-50 overflow-hidden" id="Pricing">
      {/* Background Soft Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 shadow-sm rounded-full mb-4">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              Transparent Pricing
            </span>
          </div>

          <h2 className="poppins text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-[1.15]">
            Pricing designed for <span className="text-emerald-700  ">growing academies</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Build your own education business. Keep your students, your brand, and your hard-earned revenue.
          </p>
        </div>

        {/* Minimal Pill Switch Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-200/60 p-1 rounded-full inline-flex items-center border border-slate-200">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
                billing === "monthly"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                billing === "yearly"
                  ? "bg-[#04281c] text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Yearly
              <span className="text-[10px] bg-emerald-500 text-white px-1.5 py-0.5 rounded-full font-bold">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* 4-Column Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`
                relative
                rounded-[2rem]
                p-6
                md:p-8
                flex
                flex-col
                transition-all
                duration-300
                ${
                  plan.highlight
                    ? "bg-gradient-to-b from-[#04281c] via-[#021811] to-[#010d09] text-white lg:scale-[1.03] shadow-xl shadow-emerald-950/20 z-10"
                    : "bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md"
                }
              `}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles size={10} className="fill-current" />
                  Most Popular
                </div>
              )}

              {/* Title Header */}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold tracking-tight ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-xs ${plan.highlight ? 'text-emerald-400/80' : 'text-slate-400'} font-medium`}>
                  {plan.bestFor}
                </p>
              </div>

              {/* Pricing Blocks */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl md:text-5xl font-bold tracking-tight ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {billing === "monthly" ? plan.priceMonthly : plan.priceYearly}
                  </span>
                  <span className={`text-xs font-medium ${plan.highlight ? 'text-emerald-300/60' : 'text-slate-400'}`}>
                    {billing === "monthly" ? "/mo" : "/yr"}
                  </span>
                </div>
              </div>

              {/* Embedded Seat Capacity Metric Badge */}
              <div className={`rounded-2xl p-4 mb-6 ${plan.highlight ? 'bg-emerald-950/50 border border-emerald-800/30' : 'bg-slate-50 border border-slate-100'}`}>
                <div className={`text-[10px] uppercase font-bold tracking-wider ${plan.highlight ? 'text-emerald-400/70' : 'text-slate-400'}`}>
                  Student Capacity
                </div>
                <div className={`text-2xl font-bold tracking-tight mt-0.5 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {plan.students}
                </div>
              </div>

              {/* Feature Manifest Layout */}
              <ul className="space-y-3.5 flex-1 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-emerald-400' : 'text-emerald-600'}`}
                    />
                    <span className={plan.highlight ? 'text-emerald-100/80' : 'text-slate-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Native Grid Conversions Action Anchor */}
              <button
                onClick={() => (window.location.href = "/onboard")}
                className={`
                  mt-8
                  w-full
                  py-3.5
                  rounded-full
                  text-sm
                  font-semibold
                  transition-all
                  duration-200
                  ${
                    plan.highlight
                      ? "bg-[#bbf7d0] hover:bg-[#86efac] text-emerald-950"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }
                `}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Premium Enterprise Inline Alert Card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                <Building2 size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Need a custom enterprise architecture?
                </h3>
                <p className="text-sm text-slate-500 mt-0.5 max-w-xl">
                  Dedicated infrastructure, private storage partitions, custom integrations, or high-volume student capacity boundaries.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/919400690911"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                bg-slate-100
                hover:bg-slate-200/80
                text-slate-800
                px-6
                py-3
                rounded-full
                text-sm
                font-semibold
                transition-colors
                whitespace-nowrap
                w-full sm:w-auto
                justify-center
              "
            >
              <MessageCircle size={15} className="text-emerald-600 fill-current" />
              Contact Sales
              <ArrowRight size={14} className="text-slate-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}