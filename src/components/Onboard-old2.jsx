import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Globe,
  School,
  Phone,
  User,
  Mail,
  Lock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import api from "../shared/api";

export default function Onboard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* =========================================
      STATE & FORM HOOKS
  ========================================= */
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    instituteName: "",
    subdomain: "",
    adminName: "",
    adminEmail: "",
    password: "",
    phone: "",
    type: "",
    theme: "formalLight",
    primaryColor: "#1e3a8a",
    accentColor: "#ffffff",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [createdUrl, setCreatedUrl] = useState("");

  const stepsConfig = [
    { number: 1, label: "Institute Profile" },
    { number: 2, label: "Platform Link" },
    { number: 3, label: "Admin Account" },
    { number: 4, label: "Branding" },
  ];

  /* =========================================
      UPDATE & VALIDATION BY STEP
  ========================================= */
  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  }

  function validateStep(currentStep) {
    const newErrors = {};

    if (currentStep === 1) {
      if (!form.instituteName) newErrors.instituteName = "Institute name required";
      if (!form.phone) newErrors.phone = "Phone required";
      if (!form.type) newErrors.type = "Please select an institute type";
    }
    if (currentStep === 2) {
      if (!form.subdomain) newErrors.subdomain = "Subdomain required";
    }
    if (currentStep === 3) {
      if (!form.adminName) newErrors.adminName = "Admin name required";
      if (!form.adminEmail) newErrors.adminEmail = "Admin email required";
      if (!form.password || form.password.length < 6) {
        newErrors.password = "Minimum 6 characters required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  /* =========================================
      NAVIGATION HANDLERS
  ========================================= */
  function handleNext() {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  }

  function handlePrev() {
    setStep((prev) => prev - 1);
  }

  /* =========================================
      SUBMIT API ACTION
  ========================================= */
  async function createAcademy() {
    if (!validateStep(4)) return;

    try {
      setLoading(true);
      const { data } = await api.post("/saas/onboard", form);
      console.log("onboarding production", data);
      setSuccess(true);
      setCreatedUrl(data.url);
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Failed to create academy");
    } finally {
      setLoading(false);
    }
  }

  /* =========================================
      RENDER MAIN JXS UI
  ========================================= */
  return (
    <div className="pt-10 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-black flex flex-col justify-between">
      <Navbar />

      <div className="max-w-3xl w-full mx-auto px-6 py-12 flex-1 flex flex-col justify-center">
        {!success ? (
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-300">
            
            {/* PROGRESS TRACKER BAR */}
            <div className="bg-slate-900 px-8 py-6 text-white border-b border-slate-800">
              <div className="flex items-center justify-between max-w-md mx-auto mb-4">
                {stepsConfig.map((s) => (
                  <div key={s.number} className="flex items-center flex-1 last:flex-none">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        step >= s.number
                          ? "bg-blue-600 text-white ring-4 ring-blue-900/40"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {s.number}
                    </div>
                    {s.number !== 4 && (
                      <div
                        className={`h-[2px] flex-1 mx-2 transition-all ${
                          step > s.number ? "bg-blue-600" : "bg-slate-800"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-slate-400 font-medium tracking-wide uppercase">
                Step {step} of 4: {stepsConfig[step - 1].label}
              </p>
            </div>

            {/* ACTION CONTAINER BODY */}
            <div className="p-8 md:p-10 min-h-[340px] flex flex-col justify-between">
              
              {/* STEP 1: GENERAL INFO */}
              {step === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight mb-1">Tell us about your institution</h2>
                    <p className="text-sm text-slate-500">Let's set up your foundational profile space details.</p>
                  </div>

                  <Input
                    icon={<School size={16} />}
                    label="Institute Name"
                    value={form.instituteName}
                    onChange={(e) => update("instituteName", e.target.value)}
                    placeholder="CMBS Academy"
                    error={errors.instituteName}
                  />

                  <Input
                    icon={<Phone size={16} />}
                    label="Phone Number"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+91 9876543210"
                    error={errors.phone}
                  />

                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">Institute Type</label>
                    <select
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-2xl px-4 py-3.5 outline-none transition text-sm"
                      value={form.type}
                      onChange={(e) => update("type", e.target.value)}
                    >
                      <option value="">Select Configuration Type</option>
                      <option value="tuition">Tuition Center</option>
                      <option value="school">School</option>
                      <option value="college">College</option>
                      <option value="coaching">Coaching Institute</option>
                      <option value="teacher">Individual Teacher</option>
                    </select>
                    {errors.type && <ErrorText text={errors.type} />}
                  </div>
                </div>
              )}

              {/* STEP 2: DOMAIN CREATION */}
              {step === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight mb-1">Claim your subdomain</h2>
                    <p className="text-sm text-slate-500">This is where your students will access their course content portals.</p>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">Choose Subdomain</label>
                    <div className="flex items-center border border-slate-200 bg-slate-50 focus-within:bg-white focus-within:border-blue-500 rounded-2xl overflow-hidden transition">
                      <input
                        className="flex-1 px-4 py-3.5 bg-transparent outline-none text-sm"
                        placeholder="youracademy"
                        value={form.subdomain}
                        onChange={(e) =>
                          update(
                            "subdomain",
                            e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "")
                          )
                        }
                      />
                      <div className="bg-slate-100 border-l border-slate-200 px-4 py-3.5 text-sm font-medium text-slate-500">
                        .eduline.app
                      </div>
                    </div>

                    {errors.subdomain && <ErrorText text={errors.subdomain} />}

                    <div className="flex items-center gap-2 text-sm text-slate-500 mt-4 bg-blue-50/50 border border-blue-100/50 p-3 rounded-xl">
                      <Globe size={15} className="text-blue-600" />
                      <span>Live link:</span>
                      <span className="font-semibold text-blue-700">
                        https://{form.subdomain || "youracademy"}.eduline.app
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: ADMINISTRATOR ACCOUNT */}
              {step === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight mb-1">Owner Credentials</h2>
                    <p className="text-sm text-slate-500">Create the primary super administrator credential log account details.</p>
                  </div>

                  <Input
                    icon={<User size={16} />}
                    label="Admin Full Name"
                    value={form.adminName}
                    onChange={(e) => update("adminName", e.target.value)}
                    placeholder="John Doe"
                    error={errors.adminName}
                  />

                  <Input
                    icon={<Mail size={16} />}
                    label="Admin Email Address"
                    value={form.adminEmail}
                    onChange={(e) => update("adminEmail", e.target.value)}
                    placeholder="admin@example.com"
                    error={errors.adminEmail}
                  />

                  <Input
                    icon={<Lock size={16} />}
                    label="Secure Account Password"
                    type="password"
                    value={form.password}
                    onChange={(e) => update("password", e.target.value)}
                    placeholder="••••••••"
                    error={errors.password}
                  />
                </div>
              )}

              {/* STEP 4: CUSTOM BRANDING */}
              {step === 4 && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight mb-1">Styling & Custom Aesthetics</h2>
                    <p className="text-sm text-slate-500">Match the portal skin UI configurations closer directly with your real asset brands.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <ColorInput
                      label="Primary Color Theme"
                      value={form.primaryColor}
                      onChange={(e) => update("primaryColor", e.target.value)}
                    />
                    <ColorInput
                      label="Accent Interface Color"
                      value={form.accentColor}
                      onChange={(e) => update("accentColor", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* ACTION TOOLBAR FOOTER */}
              <div className="flex items-center justify-between gap-4 pt-8 mt-8 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    onClick={handlePrev}
                    className="px-5 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition text-sm flex items-center gap-2"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    onClick={handleNext}
                    className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition text-sm flex items-center gap-2 ml-auto"
                  >
                    Continue <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={createAcademy}
                    disabled={loading}
                    className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-bold shadow-md transition text-sm flex items-center gap-2 ml-auto"
                  >
                    {loading ? "Configuring Clusters..." : "Launch My Academy"}
                    {!loading && <ArrowRight size={16} />}
                  </button>
                )}
              </div>

            </div>
          </div>
        ) : (
          /* REGISTRATION SUCCESS DASHBOARD DISPLAY */
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-12 text-center max-w-xl mx-auto animate-scaleUp">
            <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} />
            </div>

            <h2 className="text-3xl font-black mb-3 text-slate-900">Your Platform is Live!</h2>
            <p className="text-slate-500 text-sm max-w-sm mx-auto mb-8">
              Great choice! Your Eduline instance cluster configurations have completed successfully.
            </p>

            <a
              href={createdUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-md hover:bg-blue-700 transition"
            >
              Open Workspace Portal <ArrowRight size={16} />
            </a>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

/* =========================================
    UI PRESENTATION SUB-COMPONENTS
========================================= */

function Input({ icon, label, error, type = "text", ...props }) {
  return (
    <div className="w-full">
      <label className="text-sm font-semibold text-slate-700 mb-2 block">{label}</label>
      <div className="flex items-center gap-3 border border-slate-200 bg-slate-50 focus-within:bg-white focus-within:border-blue-500 rounded-2xl px-4 transition">
        <div className="text-slate-400">{icon}</div>
        <input {...props} type={type} className="w-full py-3.5 bg-transparent outline-none text-sm text-slate-900" />
      </div>
      {error && <ErrorText text={error} />}
    </div>
  );
}

function ErrorText({ text }) {
  return (
    <p className="text-red-500 text-xs font-medium mt-2 flex items-center gap-1.5">
      <AlertCircle size={14} />
      {text}
    </p>
  );
}

function ColorInput({ label, value, onChange }) {
  return (
    <div className="w-full">
      <label className="text-sm font-semibold text-slate-700 mb-2 block">{label}</label>
      <div className="flex items-center gap-3 border border-slate-200 bg-slate-50 focus-within:bg-white focus-within:border-blue-500 rounded-2xl px-4 py-2 transition">
        <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-slate-200">
          <input
            type="color"
            value={value}
            onChange={onChange}
            className="absolute inset-0 w-[200%] h-[200%] -translate-x-1/4 -translate-y-1/4 cursor-pointer"
          />
        </div>
        <input
          value={value}
          onChange={onChange}
          className="flex-1 bg-transparent font-mono text-xs tracking-wider outline-none text-slate-700 uppercase"
        />
      </div>
    </div>
  );
}