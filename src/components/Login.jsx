import { useState } from "react";
import {
  Search,
  ArrowRight,
  GraduationCap,
  ShieldCheck,
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
      setError("Email is required");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post(
        "/saas/find-portal",
        {
          email,
        }
      );

      if (!res.data?.portal) {
        throw new Error("Portal not found");
      }

      window.location.href =
        res.data.portal + "/login";
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "No academy found for this email"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative min-h-screen bg-[#f7faf8] pt-40 overflow-hidden flex items-center justify-center py-20 px-6">

      {/* Background */}

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16,185,129,.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16,185,129,.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-emerald-200/30 blur-3xl rounded-full" />

      <div className="relative w-full max-w-6xl">

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT */}

          <div className="hidden lg:block">

            <div
              className="
                bg-white
                border-2
                border-slate-900
                rounded-[40px]
                p-10
                shadow-[10px_10px_0_0_rgba(15,23,42,.08)]
              "
            >

              <div
                className="
                  w-20
                  h-20
                  rounded-[24px]
                  bg-emerald-500
                  border-2
                  border-slate-900
                  flex
                  items-center
                  justify-center
                  shadow-[6px_6px_0_0_rgba(15,23,42,1)]
                "
              >
                <GraduationCap
                  size={40}
                  className="text-white"
                />
              </div>

              <h1 className="mt-8 text-5xl font-black text-slate-900 leading-none">
                Find Your
                <span className="block text-emerald-600">
                  Academy
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Enter your email address and we'll
                automatically locate your learning portal.
              </p>

              <div className="mt-10 space-y-4">

                {[
                  "Direct portal access",
                  "Secure academy login",
                  "Works across all Eduline academies",
                  "No need to remember URLs",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
                      flex
                      items-center
                      gap-4
                      bg-emerald-50
                      border
                      border-emerald-100
                      rounded-2xl
                      p-4
                    "
                  >
                    <ShieldCheck
                      size={18}
                      className="text-emerald-600"
                    />

                    <span className="font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
              bg-white
              border-2
              border-slate-900
              rounded-[40px]
              p-8
              md:p-10
              shadow-[10px_10px_0_0_rgba(15,23,42,.08)]
            "
          >

            <div className="text-center mb-8">

              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  rounded-[20px]
                  bg-emerald-500
                  border-2
                  border-slate-900
                  flex
                  items-center
                  justify-center
                  shadow-[5px_5px_0_0_rgba(15,23,42,1)]
                  mb-6
                "
              >
                <Search
                  size={28}
                  className="text-white"
                />
              </div>

              <h2 className="text-3xl font-black text-slate-900">
                Find My Academy
              </h2>

              <p className="mt-3 text-slate-500">
                Enter the email you used when enrolling.
              </p>

            </div>

            <form
              onSubmit={findPortal}
              className="space-y-5"
            >

              <div>

                <label className="block mb-2 font-black text-slate-900">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="you@example.com"
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border-2
                    border-slate-900
                    bg-white
                    outline-none
                    text-slate-900
                  "
                />

                {error && (
                  <p className="text-red-500 text-sm mt-3">
                    {error}
                  </p>
                )}

              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-emerald-500
                  border-2
                  border-slate-900
                  rounded-2xl
                  py-4
                  font-black
                  text-white
                  flex
                  items-center
                  justify-center
                  gap-3
                  shadow-[5px_5px_0_0_rgba(15,23,42,1)]
                  hover:translate-x-1
                  hover:translate-y-1
                  hover:shadow-none
                  transition-all
                  disabled:opacity-50
                "
              >
                {loading
                  ? "Searching..."
                  : "Find My Academy"}

                {!loading && (
                  <ArrowRight size={18} />
                )}
              </button>

            </form>

            <div className="mt-8 pt-8 border-t border-slate-200 text-center">

              <p className="text-slate-500">
                Are you an educator?
              </p>

              <a
                href="/onboard"
                className="
                  inline-block
                  mt-3
                  font-black
                  text-emerald-600
                "
              >
                Create Your Academy →
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}