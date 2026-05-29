import {
  CheckCircle,
} from "lucide-react";

export default function PlanCard({
  title,
  price,
  features = [],
  selected,
  onClick,
  popular,
  description,
}) {
  return (
    <button
      onClick={onClick}
      className={`relative text-left rounded-3xl border p-6 transition-all duration-300 bg-white overflow-hidden ${
        selected
          ? "border-blue-600 shadow-2xl scale-[1.02]"
          : "border-slate-200 hover:border-blue-300 hover:shadow-lg"
      }`}
    >

      {/* POPULAR BADGE */}

      {popular && (
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">

          Most Popular

        </div>
      )}

      {/* SELECTED GLOW */}

      {selected && (
        <div className="absolute inset-0 bg-blue-50 opacity-40 pointer-events-none" />
      )}

      <div className="relative z-10">

        {/* TITLE */}

        <h3 className="text-2xl font-black text-slate-900">
          {title}
        </h3>

        {/* DESCRIPTION */}

        {description && (
          <p className="mt-2 text-sm text-slate-500 leading-relaxed">
            {description}
          </p>
        )}

        {/* PRICE */}

        <div className="mt-6 flex items-end gap-2">

          <span className="text-5xl font-black tracking-tight text-slate-900">
            {price}
          </span>

        </div>

        {/* FEATURES */}

        <div className="mt-8 space-y-4">

          {features.map(
            (feature) => (
              <div
                key={feature}
                className="flex items-start gap-3"
              >

                <CheckCircle
                  size={18}
                  className={`mt-0.5 shrink-0 ${
                    selected
                      ? "text-blue-600"
                      : "text-green-500"
                  }`}
                />

                <span className="text-sm text-slate-600 leading-relaxed">
                  {feature}
                </span>

              </div>
            )
          )}

        </div>

        {/* CTA */}

        <div
          className={`mt-8 rounded-2xl py-3 text-center text-sm font-bold transition ${
            selected
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-700"
          }`}
        >

          {selected
            ? "Selected Plan"
            : "Choose Plan"}

        </div>

      </div>

    </button>
  );
}