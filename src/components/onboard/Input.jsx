import ErrorText from "./ErrorText";

export default function Input({
  label,
  icon,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="space-y-2">

      {/* LABEL */}

      {label && (
        <label className="text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}

      {/* INPUT */}

      <div
        className={`flex items-center gap-3 bg-slate-50 border rounded-2xl px-4 py-3.5 transition-all ${
          error
            ? "border-red-300 focus-within:ring-2 focus-within:ring-red-200"
            : "border-slate-200 focus-within:ring-2 focus-within:ring-blue-200"
        } ${className}`}
      >

        {/* ICON */}

        {icon && (
          <div className="text-slate-400">
            {icon}
          </div>
        )}

        {/* FIELD */}

        <input
          className="flex-1 bg-transparent outline-none text-sm placeholder:text-slate-400"
          {...props}
        />

      </div>

      {/* ERROR */}

      <ErrorText text={error} />

    </div>
  );
}