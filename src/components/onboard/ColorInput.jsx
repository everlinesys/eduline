export default function ColorInput({
  label,
  value,
  onChange,
}) {
  return (
    <div className="space-y-2">

      <label className="text-sm font-semibold text-slate-700">
        {label}
      </label>

      <div className="flex items-center gap-3">

        {/* COLOR PICKER */}

        <div className="relative">

          <input
            type="color"
            value={value}
            onChange={onChange}
            className="absolute inset-0 opacity-0 cursor-pointer w-14 h-14"
          />

          <div
            className="w-14 h-14 rounded-2xl border border-slate-200 shadow-sm"
            style={{
              background: value,
            }}
          />

        </div>

        {/* HEX INPUT */}

        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="#1e3a8a"
          className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

    </div>
  );
}