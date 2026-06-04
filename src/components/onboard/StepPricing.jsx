import { Check } from "lucide-react";

const plans = [{
  name: "Free Trial",
  priceMonthly: "₹0",
  priceYearly: "₹0",
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
  id: "starter",
  name: "Starter",
  monthly: "₹499",
  yearly: "₹4,999",
  students: "Up to 500 Students",
  features: [
    "1 Course",
    "100 GB Storage",
    "Video Lessons & PDF Notes",
    "Custom Branding & Certificates",
    "Email Support",
  ],
  highlight: false,
},
{
  id: "professional",
  name: "Professional",
  monthly: "₹999",
  yearly: "₹9,999",
  students: "Up to 2,000 Students",
  features: [
    "Up to 5 Courses",
    "250 GB Storage",
    "Live Classes & Dashboard",
    "Custom Branding & Certificates",
    "Priority Support",
  ],
  highlight: true,
},
{
  id: "enterprise",
  name: "Enterprise",
  monthly: "₹2,999",
  yearly: "₹29,999",
  students: "Unlimited Students",
  features: [
    "Unlimited Courses & Students",
    "1 TB Storage",
    "Custom Domain Integration",
    "Live Classes & Full Analytics",
    "24/7 Priority Support",
  ],
  highlight: false,
},
];

export default function StepPricing({ form, update }) {
  const isYearly = form.billing === "yearly";

  return (
    <div className="space-y-8 animate-fadeIn text-slate-900 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 mb-1.5">
            Choose Your Plan
          </h2>
          <p className="text-sm text-slate-500">
            Flexible, scalable pricing structures for every size of institution.
          </p>
        </div>

        {/* Improved Premium Segmented Toggle Switch */}
        <div className="flex justify-center">
          <div className="bg-slate-100 p-1 rounded-xl flex items-center relative border border-slate-200/50">
            <button
              type="button"
              onClick={() => update("billing", "monthly")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${!isYearly
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
                }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => update("billing", "yearly")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${isYearly
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
                }`}
            >
              Yearly
              <span className="bg-emerald-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">
                Save 16%
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((plan) => {
          const isSelected = form.plan === plan.id;
          const currentPrice = isYearly ? plan.yearly : plan.monthly;

          return (
            <div
              key={plan.id}
              onClick={() => update("plan", plan.id)}
              className={`relative bg-white border rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col h-full group
                ${isSelected
                  ? "border-blue-600 ring-2 ring-blue-600/10 shadow-md shadow-blue-50"
                  : plan.highlight
                    ? "border-slate-300 shadow-sm hover:border-slate-400"
                    : "border-slate-200 hover:border-slate-300"
                }
              `}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <span className="absolute -top-3 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] tracking-wider font-bold uppercase px-3 py-1 rounded-full shadow-sm">
                  Most Popular
                </span>
              )}

              {/* Card Top Title Info */}
              <div className="mb-5">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  {plan.students}
                </p>
                <div className="mt-4 flex items-baseline text-slate-900">
                  <span className="text-3xl font-extrabold tracking-tight">
                    {currentPrice}
                  </span>
                  <span className="ml-1 text-xs font-semibold text-slate-400">
                    /{isYearly ? "year" : "mo"}
                  </span>
                </div>
              </div>

              {/* Action Choice Button */}
              <button
                type="button"
                className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 mb-6 border pointer-events-none
                  ${isSelected
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-200"
                    : "bg-slate-50 text-slate-700 border-slate-200 group-hover:bg-slate-100 group-hover:text-slate-900"
                  }
                `}
              >
                {isSelected ? "Selected Plan" : "Choose Plan"}
              </button>

              <hr className="border-slate-100 mb-5" />

              {/* Interactive Features Checklist Container */}
              <ul className="space-y-3.5 flex-1 mb-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5 shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}