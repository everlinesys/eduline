import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7faf8] pt-28 pb-24">

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

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-200/40 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                bg-white
                border-2
                border-slate-900
                rounded-full
                shadow-[4px_4px_0_0_rgba(15,23,42,.15)]
              "
            >
              <Sparkles size={14} />

              <span
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-widest
                "
              >
                Built For Educators
              </span>
            </div>

            <h1
              className="
                mt-8
                text-5xl
                sm:text-6xl
                lg:text-7xl
                font-black
                tracking-tight
                leading-[0.95]
                text-slate-900
              "
            >
              Launch Your
              <br />

              <span className="text-emerald-600">
                Own Academy.
              </span>
            </h1>

            <p
              className="
                mt-8
                text-lg
                md:text-xl
                text-slate-600
                max-w-xl
                leading-relaxed
                font-medium
              "
            >
              Create a branded learning platform with courses,
              certificates, exams, student management,
              mobile apps and online payments.
            </p>

            <div
              className="
                mt-10
                flex
                flex-col
                sm:flex-row
                gap-4
              "
            >

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

              <a
                href="#demo"
                className="
                  bg-white
                  border-2
                  border-slate-900
                  rounded-2xl
                  px-8
                  py-4
                  font-black
                  flex
                  items-center
                  justify-center
                  gap-3
                  shadow-[5px_5px_0_0_rgba(15,23,42,.15)]
                "
              >
                <Play size={16} />
                Watch Demo
              </a>

            </div>

            {/* Stats */}

            <div
              className="
                mt-12
                grid
                grid-cols-3
                gap-4
                max-w-lg
              "
            >

              <div
                className="
                  bg-white
                  border-2
                  border-slate-900
                  rounded-2xl
                  p-4
                "
              >
                <div className="text-2xl font-black">
                  500+
                </div>

                <div className="text-xs text-slate-500 font-medium">
                  Academies
                </div>
              </div>

              <div
                className="
                  bg-white
                  border-2
                  border-slate-900
                  rounded-2xl
                  p-4
                "
              >
                <div className="text-2xl font-black">
                  50K+
                </div>

                <div className="text-xs text-slate-500 font-medium">
                  Students
                </div>
              </div>

              <div
                className="
                  bg-white
                  border-2
                  border-slate-900
                  rounded-2xl
                  p-4
                "
              >
                <div className="text-2xl font-black">
                  99.9%
                </div>

                <div className="text-xs text-slate-500 font-medium">
                  Uptime
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            {/* Floating Badge */}

            <div
              className="
                absolute
                -top-4
                -left-4
                z-20
                bg-emerald-400
                border-2
                border-slate-900
                px-4
                py-2
                rounded-2xl
                font-black
                text-sm
                shadow-[5px_5px_0_0_rgba(15,23,42,1)]
              "
            >
              +42,000 Students
            </div>

            {/* Main Mockup */}

            <div
              className="
                bg-white
                border-2
                border-slate-900
                rounded-[32px]
                overflow-hidden
                shadow-[10px_10px_0_0_rgba(15,23,42,.15)]
              "
            >

              {/* Browser */}

              <div
                className="
                  h-12
                  border-b-2
                  border-slate-900
                  bg-slate-50
                  flex
                  items-center
                  px-5
                  gap-2
                "
              >
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />

                <div
                  className="
                    ml-auto
                    bg-white
                    border
                    border-slate-200
                    rounded-full
                    px-4
                    py-1
                    text-xs
                    text-slate-400
                  "
                >
                  academy.yourbrand.com
                </div>

              </div>

              {/* Content */}

              <div className="p-6">

                <div className="flex items-center justify-between mb-6">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-emerald-500
                        text-white
                        flex
                        items-center
                        justify-center
                        font-black
                      "
                    >
                      E
                    </div>

                    <div>
                      <div className="font-black">
                        Your Academy
                      </div>

                      <div className="text-xs text-slate-500">
                        Powered by Eduline
                      </div>
                    </div>

                  </div>

                  <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200" />

                </div>

                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
                  alt=""
                  className="
                    w-full
                    h-64
                    object-cover
                    rounded-2xl
                    border-2
                    border-slate-900
                  "
                />

                <div className="mt-6">

                  <h3 className="text-2xl font-black">
                    Digital Marketing Masterclass
                  </h3>

                  <p className="text-slate-500 mt-2">
                    48 Lessons • Certificates • Exams
                  </p>

                  <button
                    className="
                      mt-5
                      w-full
                      bg-emerald-500
                      border-2
                      border-slate-900
                      rounded-2xl
                      py-4
                      font-black
                      text-white
                      shadow-[4px_4px_0_0_rgba(15,23,42,1)]
                    "
                  >
                    Enroll Now
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}