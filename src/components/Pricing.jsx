import { Check } from "lucide-react";

const plans = [
  {
    name: "Essential",
    price: "₹2,500",
    period: "/mo",
    students: "Up to 100 active students",
    features: [
      "Your Branding",
      "Video Classes",
      "PDF Notes",
      "Basic Analytics",
      "Online Payments",
      "Email Support",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "₹8,000",
    period: "/mo",
    students: "Up to 1,000 active students",
    features: [
      "Everything in Essential",
      "Live Classes",
      "Advanced Analytics",
      "Participation Certificates",
      "Group Emails",
      "Priority Support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "₹20,000",
    period: "/mo",
    students: "Unlimited active students",
    features: [
      "Everything in Premium",
      "Advanced DRM Protection",
      "Custom Integrations",
      "Dedicated Manager",
      "API Access",
      "White Label Apps",
    ],
    highlight: false,
  },
  {
    name: "Custom",
    price: "Custom",
    period: "",
    students: "Tailored for organizations",
    features: [
      "All Enterprise Features",
      "On-premise options",
      "Custom student limits",
      "Dedicated infrastructure",
      "SLA & Support",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  const sendToWhatsApp = (plan) => {
    const phone = "919400690911";

    const message = encodeURIComponent(
      `Hello EduLine team 👋

I am interested in the *${plan.name}* plan.
Price: ${plan.price}${plan.period}
Students: ${plan.students}

Please share details and setup process.`
    );

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };


  return (
    <section className="py-32 bg-white" id="Pricing">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Simple pricing for every stage.
          </h2>
          <p className="text-lg text-slate-500">
            Start small, scale as your teaching business grows.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl border p-8 flex flex-col
                ${plan.highlight
                  ? "border-blue-600 shadow-2xl shadow-blue-100 bg-blue-50/30"
                  : "border-slate-200 bg-white"}
              `}
            >

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-slate-900">
                  {plan.price}
                </span>
                <span className="text-slate-500 ml-1">{plan.period}</span>
              </div>

              {/* Student Limit */}
              <p className="text-sm text-blue-600 font-semibold mb-6">
                {plan.students}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check size={16} className="text-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => sendToWhatsApp(plan)}

                className={`w-full py-3 rounded-xl font-bold transition
                  ${plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-slate-900 text-white hover:bg-slate-800"}
                `}
              >
                {plan.name === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
