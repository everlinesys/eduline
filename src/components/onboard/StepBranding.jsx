import ColorInput from "./ColorInput";

export default function StepBranding({ form, update }) {
  // Curated premium preset palettes
  const presets = [
    { name: "Ocean Breeze", primary: "#0284c7", accent: "#0d9488" },
    { name: "Royal Velvet", primary: "#4f46e5", accent: "#7c3aed" },
    { name: "Forest Fresh", primary: "#16a34a", accent: "#22c55e" },
    { name: "Sunset Glow", primary: "#db2777", accent: "#ea580c" },
  ];

  const applyPreset = (primary, accent) => {
    update("primaryColor", primary);
    update("accentColor", accent);
  };

  // Fallbacks in case state hasn't initialized with string values yet
  const primaryColor = form.primaryColor || "#3b82f6";
  const accentColor = form.accentColor || "#10b981";

  return (
    <div className="space-y-6 animate-fadeIn text-slate-900">
      {/* Header Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-800 mb-1.5">
          Branding & Theme
        </h2>
        <p className="text-sm text-slate-500">
          Customize your academy layout to match your unique brand identity.
        </p>
      </div>

      {/* Main Responsive Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        
        {/* Left Side: Controls (Takes 3 columns) */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Custom Color Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ColorInput
              label="Primary Color"
              value={primaryColor}
              onChange={(e) => update("primaryColor", e.target.value)}
            />

            <ColorInput
              label="Accent Color"
              value={accentColor}
              onChange={(e) => update("accentColor", e.target.value)}
            />
          </div>

          {/* Quick Presets section */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
              Or Choose a Preset Palette
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {presets.map((preset) => {
                const isActive = form.primaryColor === preset.primary && form.accentColor === preset.accent;
                return (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => applyPreset(preset.primary, preset.accent)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer text-xs
                      ${
                        isActive
                          ? "border-slate-900 bg-slate-50 text-slate-900 font-medium"
                          : "border-slate-200 bg-white hover:border-slate-300 text-slate-600"
                      }
                    `}
                  >
                    <span>{preset.name}</span>
                    <div className="flex gap-1">
                      <span className="w-4 h-4 rounded-full border border-black/5" style={{ backgroundColor: preset.primary }} />
                      <span className="w-4 h-4 rounded-full border border-black/5" style={{ backgroundColor: preset.accent }} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Live UI Preview Mockup (Takes 2 columns) */}
        <div className="lg:col-span-2 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 select-none">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-4">
            Live Preview
          </span>
          
          {/* Mock Dashboard Card */}
          <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-4 space-y-4">
            {/* Mock Header */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: primaryColor }}>
                A
              </div>
              <div className="space-y-1 flex-1">
                <div className="h-2 w-20 bg-slate-200 rounded" />
                <div className="h-1.5 w-12 bg-slate-100 rounded" />
              </div>
              <div className="w-5 h-5 rounded-full" style={{ backgroundColor: accentColor }} />
            </div>

            {/* Mock Content Body */}
            <div className="border-t border-slate-50 pt-3 space-y-2">
              <div className="h-3 w-3/4 bg-slate-100 rounded" />
              <div className="h-2 w-full bg-slate-100/60 rounded" />
              <div className="h-2 w-5/6 bg-slate-100/60 rounded" />
            </div>

            {/* Mock Interactive Buttons */}
            <div className="flex gap-2 pt-1">
              <button 
                type="button" 
                className="text-[10px] font-semibold text-white px-3 py-1.5 rounded-md flex-1 text-center transition-colors shadow-sm"
                style={{ backgroundColor: primaryColor }}
              >
                Primary Button
              </button>
              <button 
                type="button" 
                className="text-[10px] font-semibold px-3 py-1.5 rounded-md flex-1 text-center border transition-colors"
                style={{ borderColor: accentColor, color: accentColor }}
              >
                Outline Button
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}