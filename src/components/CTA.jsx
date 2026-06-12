import { ArrowRight, GraduationCap, Sparkles, Calendar, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  const sendWhatsApp = (type) => {
    const phone = "919400690911";
    let message = "";

    if (type === "start") {
      message = "Hello EduLine team 👋 I want to launch my own branded academy.";
    } else {
      message = "Hello EduLine team 👋 I would like to schedule a demo of EduLine.";
    }

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden ">
      {/* Background Subtle Gradient Flare */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[500px] bg-emerald-500/5 blur-[130px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className="
            bg-white
            border border-slate-200
            rounded-[2.5rem]
            overflow-hidden
            shadow-xl shadow-slate-200/50
          "
        >
          <div className="grid lg:grid-cols-12">
            
            {/* Left Column (Brand Proposition) */}
            <div className="lg:col-span-7 p-8 md:p-14 flex flex-col justify-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/60 rounded-full mb-6">
                  <Sparkles size={13} className="text-emerald-600 fill-current" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                    Start Your Academy
                  </span>
                </div>
              </div>

              <h2 className=" text-4xl sm:text-5xl font-bold text-slate-900">
                Ready to build <br />
                <span className="text-emerald-700 ">your own platform?</span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg">
                Launch a professional enterprise environment configured with structured learning tracks, automated certifications, online payment processing pathways, and real-time user insights—fully engineered under your corporate brand.
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 mt-8">
                <Link
                  to="/onboard"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    bg-[#04281c]
                    hover:bg-[#021811]
                    text-white
                    rounded-full
                    px-8
                    py-4
                    font-semibold
                    text-base
                    transition-all
                    shadow-sm
                    hover:shadow-md
                  "
                >
                  Start Free
                  <ArrowRight size={16} className="stroke-[2.5]" />
                </Link>

                <button
                  onClick={() => sendWhatsApp("demo")}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    bg-slate-100
                    hover:bg-slate-200/80
                    text-slate-800
                    rounded-full
                    px-8
                    py-4
                    font-semibold
                    text-base
                    transition-colors
                  "
                >
                  <Calendar size={16} className="text-slate-500" />
                  Book Demo
                </button>
              </div>
            </div>

            {/* Right Column (Feature Manifest Showcase) */}
            <div
              className="
                lg:col-span-5
                bg-gradient-to-b from-[#04281c] to-[#010d09]
                p-8
                md:p-14
                flex
                flex-col
                justify-center
                relative
              "
            >
              {/* Radial gradient spotlight */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[60px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-emerald-950/40 border border-emerald-800/30 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <GraduationCap size={28} className="text-emerald-400" />
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                  Everything Included
                </h3>
                <p className="text-sm text-emerald-300/60 mb-6">
                  No hidden deployment adjustments, no surprises.
                </p>

                <div className="space-y-2.5">
                  {[
                    "Professional LMS Ecosystem",
                    "Unlimited Courses & Modules",
                    "HD Video & Document Assets",
                    "Automated Testing & Certifications",
                    "Granular Student Control Pathing",
                    "Direct Financial Payment Gates",
                    "White-label Domain Mapping",
                    "Analytics & Performance Dashboards",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="
                        flex
                        items-center
                        gap-3
                        bg-emerald-950/30
                        border
                        border-emerald-800/20
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-emerald-100/90
                        backdrop-blur-sm
                      "
                    >
                      <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}