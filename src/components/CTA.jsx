import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  const sendWhatsApp = (type) => {
    const phone = "919400690911";

    let message = "";

    if (type === "start") {
      message =
        "Hello EduLine team 👋 I want to launch my own branded academy.";
    } else {
      message =
        "Hello EduLine team 👋 I would like to schedule a demo of EduLine.";
    }

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative py-28 bg-[#f7faf8] overflow-hidden">

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

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-emerald-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        <div
          className="
            bg-white
            border-2
            border-slate-900
            rounded-[40px]
            overflow-hidden
            shadow-[12px_12px_0_0_rgba(15,23,42,.08)]
          "
        >

          <div className="grid lg:grid-cols-2">

            {/* Left */}

            <div className="p-10 md:p-14">

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  bg-emerald-50
                  border-2
                  border-slate-900
                  rounded-full
                  mb-8
                "
              >
                <Sparkles size={14} />

                <span className="text-xs font-black uppercase tracking-widest">
                  Start Your Academy
                </span>
              </div>

              <h2
                className="
                  text-4xl
                  md:text-6xl
                  font-black
                  tracking-tight
                  leading-[1]
                  text-slate-900
                "
              >
                Ready To Build
                <span className="block text-emerald-600">
                  Your Own Brand?
                </span>
              </h2>

              <p
                className="
                  mt-6
                  text-lg
                  text-slate-600
                  leading-relaxed
                  max-w-lg
                "
              >
                Launch a professional learning platform with
                courses, certificates, exams, payments and
                student management — fully under your brand.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <Link
                  to="/onboard"
                  className="
                    bg-emerald-500
                    border-2
                    border-slate-900
                    rounded-2xl
                    px-8
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
                  "
                  style={{ color: "white" }}
                >
                  Start Free
                  <ArrowRight size={18} />
                </Link>

                <button
                  onClick={() => sendWhatsApp("demo")}
                  className="
                    bg-white
                    border-2
                    border-slate-900
                    rounded-2xl
                    px-8
                    py-4
                    font-black
                    hover:bg-slate-50
                    transition
                  "
                >
                  Book Demo
                </button>

              </div>

            </div>

            {/* Right */}

            <div
              className="
                bg-emerald-500
                border-t-2
                lg:border-t-0
                lg:border-l-2
                border-slate-900
                p-10
                md:p-14
                flex
                flex-col
                justify-center
              "
            >

              <div
                className="
                  w-20
                  h-20
                  bg-white
                  border-2
                  border-slate-900
                  rounded-[24px]
                  flex
                  items-center
                  justify-center
                  shadow-[6px_6px_0_0_rgba(15,23,42,1)]
                "
              >
                <GraduationCap
                  size={38}
                  className="text-slate-900"
                />
              </div>

              <h3
                className="
                  mt-8
                  text-3xl
                  md:text-4xl
                  font-black
                  text-slate-900
                "
              >
                Everything Included
              </h3>

              <div className="mt-8 space-y-4">

                {[
                  "Professional LMS Website",
                  "Unlimited Courses & Lessons",
                  "Video & PDF Learning",
                  "Certificates & Exams",
                  "Student Management",
                  "Direct Online Payments",
                  "Custom Domain & Branding",
                  "Analytics Dashboard",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
                      bg-white/80
                      border
                      border-slate-900
                      rounded-2xl
                      px-4
                      py-3
                      font-bold
                      text-slate-900
                    "
                  >
                    ✓ {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}