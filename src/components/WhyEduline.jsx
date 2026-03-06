import { Check, X } from "lucide-react";

export default function WhyEduline() {
  const points = [
    {
      title: "Your Own Brand & Domain",
      eduline: "Launch on your domain with full white-label control",
      others: "Hosted under their marketplace brand",
    },
    {
      title: "Revenue Ownership",
      eduline: "Keep 100% of your course revenue",
      others: "Platform takes commissions or hidden fees",
    },
    {
      title: "Payment Speed",
      eduline: "Payouts directly to your bank in 24 hours",
      others: "Delayed payouts (7–30 days)",
    },
    {
      title: "Student Mobile App",
      eduline: "Dedicated branded app for your academy",
      others: "Generic app shared with competitors",
    },
    {
      title: "No Competing Courses",
      eduline: "Your platform, your students only",
      others: "Students see competitors' courses",
    },
    {
      title: "Cost Effectiveness",
      eduline: "Affordable fixed pricing",
      others: "High subscription + transaction costs",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Why Educators Choose <span className="text-blue-600">EduLine</span>
          </h2>

          <p className="text-lg text-slate-600">
            Stop paying platforms that profit from your students.  
            EduLine gives you ownership, control, and higher profits.
          </p>
        </div>

        {/* COMPARISON TABLE */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

          {/* Header Row */}
          <div className="grid grid-cols-3 bg-slate-900 text-white text-sm font-bold uppercase tracking-wider">
            <div className="p-6">Feature</div>
            <div className="p-6 text-blue-400">EduLine</div>
            <div className="p-6 text-slate-400">Other Platforms</div>
          </div>

          {/* Rows */}
          {points.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-3 border-t border-slate-100 text-sm"
            >
              <div className="p-6 font-semibold text-slate-900">
                {item.title}
              </div>

              <div className="p-6 flex items-start gap-3 text-blue-700">
                <Check size={18} />
                <span>{item.eduline}</span>
              </div>

              <div className="p-6 flex items-start gap-3 text-slate-500">
                <X size={18} />
                <span>{item.others}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
