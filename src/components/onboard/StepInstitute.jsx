import {
  School,
  Phone,
  GraduationCap,
  Building2,
  BookOpen,
  User,
} from "lucide-react";

import Input from "./Input";
import ErrorText from "./ErrorText";

export default function StepInstitute({ form, update, errors }) {
  // Configuration for the select cards
  const instituteTypes = [
    { value: "school", label: "School", icon: <School size={20} /> },
    { value: "college", label: "College", icon: <GraduationCap size={20} /> },
    { value: "coaching", label: "Coaching", icon: <BookOpen size={20} /> },
    { value: "teacher", label: "Individual", icon: <User size={20} /> },
  ];

  return (
    <div className="space-y-6 animate-fadeIn text-slate-900">
      {/* Header Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-800 mb-1.5">
          Tell us about your institution
        </h2>
        <p className="text-sm text-slate-500">
          Let's configure your academy profile.
        </p>
      </div>

      {/* Text Inputs */}
      <div className="space-y-4">
        <Input
          icon={<School size={16} className="text-slate-400" />}
          label="Institute Name"
          value={form.instituteName}
          onChange={(e) => update("instituteName", e.target.value)}
          placeholder="ABC Academy"
          error={errors.instituteName}
        />

        <Input
          icon={<Phone size={16} className="text-slate-400" />}
          label="Phone Number"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="+91 9876543210"
          error={errors.phone}
        />
      </div>

      {/* Redesigned Select Field (Card Grid) */}
      <div>
        <label className="text-sm font-semibold text-slate-700 mb-2 block">
          Institute Type
        </label>
        
        <div className="grid grid-cols-2 gap-3">
          {instituteTypes.map((type) => {
            const isSelected = form.type === type.value;
            return (
              <button
                key={type.value}
                type="button"
                onClick={() => update("type", type.value)}
                className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer
                  ${
                    isSelected
                      ? "border-blue-600 bg-blue-50/50 text-blue-700 font-medium ring-2 ring-blue-600/10"
                      : "border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:border-slate-300"
                  }
                `}
              >
                <div
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    isSelected ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {type.icon}
                </div>
                <span className="text-sm">{type.label}</span>
              </button>
            );
          })}
        </div>

        {errors.type && (
          <div className="mt-2">
            <ErrorText text={errors.type} />
          </div>
        )}
      </div>
    </div>
  );
}