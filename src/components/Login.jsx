import { useState } from "react";
import {
  Search,
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  Loader2
} from "lucide-react";
import api from "../shared/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function findPortal(e) {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email address is required");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post(
        "/saas/find-portal",
        { email }
      );

      if (!res.data?.portal) {
        throw new Error("Portal not found");
      }

      window.location.href = res.data.portal + "/login";
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "No registered academy matches this email address"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative min-h-screen bg-slate-50 w-[100vw] overflow-hidden flex items-center justify-center py-24 px-6">
      
      {/* Background Soft Glow Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-emerald-500/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative w-full max-w-5xl z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: Strategic Brand Assurance */}
          <div className="hidden lg:block lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                <GraduationCap size={24} className="text-emerald-700" />
              </div>

              <h1 className="mt-6 poppins text-4xl font-normal tracking-tight text-slate-900 leading-tight">
                Find your <br />
                <span className="text-emerald-700  ">learning space</span>
              </h1>

              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                Provide your workspace registration email address. Our unified routing matrix will instantly map your identity to your portal landing.
              </p>

              <div className="mt-8 space-y-2.5">
                {[
                  "Direct secure environment handoff",
                  "Encrypted multi-tenant identification",
                  "Cross-architecture mapping network",
                  "Zero memorized subdomains required",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
                      flex
                      items-center
                      gap-3
                      bg-slate-50
                      border
                      border-slate-100
                      rounded-xl
                      px-4
                      py-3
                      text-xs
                      font-medium
                      text-slate-600
                    "
                  >
                    <ShieldCheck size={14} className="text-emerald-600 shrink-0 stroke-[2.5]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Form Access Point */}
          <div
            className="
              lg:col-span-7
              bg-white
              border
              border-slate-200
              rounded-[2.5rem]
              p-8
              md:p-10
              shadow-md
            "
          >
            <div className="text-center mb-8">
              <div
                className="
                  w-12
                  h-12
                  mx-auto
                  rounded-2xl
                  bg-emerald-50
                  border
                  border-emerald-100
                  flex
                  items-center
                  justify-center
                  mb-4
                "
              >
                <Search size={18} className="text-emerald-700" />
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Lookup Academy Portal
              </h2>

              <p className="text-sm text-slate-400 mt-1">
                Input your institutional or profile email below
              </p>
            </div>

            <form onSubmit={findPortal} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50/50
                    text-slate-900
                    text-sm
                    placeholder-slate-400
                    focus:bg-white
                    focus:border-emerald-600
                    focus:ring-1
                    focus:ring-emerald-600
                    outline-none
                    transition-all
                  "
                />

                {error && (
                  <p className="text-red-500 text-xs font-medium mt-2.5 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-red-500 inline-block shrink-0" />
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-[#04281c]
                  hover:bg-[#021811]
                  disabled:bg-slate-800
                  text-white
                  rounded-full
                  py-4
                  font-semibold
                  text-sm
                  tracking-wide
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-all
                  shadow-sm
                  hover:shadow-md
                  disabled:opacity-40
                  disabled:cursor-not-allowed
                "
              >
                {loading ? (
                  <>
                    <Loader2 size={14} className="animate-spin stroke-[2.5]" />
                    Searching Indexes...
                  </>
                ) : (
                  <>
                    Find My Academy
                    <ArrowRight size={14} className="stroke-[2.5]" />
                  </>
                )}
              </button>
            </form>

            {/* Footer Workspace Action Switcher */}
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-400">
                Deploying structural student content environments?
              </p>

              <a
                href="/onboard"
                className="
                  inline-flex
                  items-center
                  gap-1
                  mt-2
                  text-xs
                  font-bold
                  text-emerald-700
                  hover:text-emerald-800
                  transition-colors
                "
              >
                Establish Your Academy Infrastructure
                <span className="text-sm font-normal">→</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}