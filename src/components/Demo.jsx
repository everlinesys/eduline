import React from "react";
import {
  ExternalLink,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    title: "Raga Music Academy",
    category: "Music & Arts",
    link: "https://ragamusicacademy.vercel.app",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Digitalizing traditional music education with seamless student-teacher interactions.",
  },
  {
    title: "Axiom Learning",
    category: "Professional Training",
    link: "https://axiom-learning.vercel.app",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    description:
      "High-performance platform for competitive exam preparation and corporate training.",
  },
  {
    title: "Grace English Academy",
    category: "Language Learning",
    link: "https://graceenglishacademy.vercel.app",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop",
    description:
      "Empowering students worldwide with interactive English communication tools.",
  },
];

export default function Demo() {
  return (
    <section
      className="relative py-28 bg-[#f7faf8] overflow-hidden"
      id="Demos"
    >
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

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">

          <div className="max-w-3xl">

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
                mb-6
                shadow-[4px_4px_0_0_rgba(15,23,42,.1)]
              "
            >
              <Sparkles size={14} />

              <span className="text-xs font-black uppercase tracking-widest">
                Real Academies
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
              Trusted By
              <span className="text-emerald-600">
                {" "}Growing Academies.
              </span>
            </h2>

            <p
              className="
                mt-6
                text-lg
                text-slate-600
                max-w-2xl
                leading-relaxed
              "
            >
              See how educators are transforming their expertise
              into thriving online academies powered by Eduline.
            </p>

          </div>

          <div
            className="
              bg-white
              border-2
              border-slate-900
              rounded-3xl
              px-6
              py-5
            "
          >
            <div className="text-3xl font-black text-slate-900">
              500+
            </div>

            <div className="text-sm text-slate-500 font-medium">
              Academies Launched
            </div>
          </div>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, idx) => (
            <div
              key={idx}
              className="
                group
                bg-white
                border-2
                border-slate-900
                rounded-[32px]
                overflow-hidden
                shadow-[8px_8px_0_0_rgba(15,23,42,.08)]
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              {/* Browser Header */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  px-5
                  py-4
                  border-b-2
                  border-slate-900
                  bg-slate-50
                "
              >
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>

                <Globe
                  size={16}
                  className="text-slate-400"
                />
              </div>

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    aspect-video
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-700
                  "
                />

              </div>

              {/* Content */}

              <div className="p-7">

                <div
                  className="
                    inline-flex
                    px-3
                    py-1
                    bg-emerald-50
                    border
                    border-emerald-200
                    rounded-full
                    text-[11px]
                    font-black
                    uppercase
                    tracking-widest
                    text-emerald-700
                    mb-4
                  "
                >
                  {project.category}
                </div>

                <h3
                  className="
                    text-2xl
                    font-black
                    text-slate-900
                    mb-4
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    text-slate-600
                    leading-relaxed
                    mb-6
                  "
                >
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    font-black
                    text-slate-900
                    hover:text-emerald-600
                    transition
                  "
                >
                  Visit Academy
                  <ExternalLink size={16} />
                </a>

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}

        <div className="mt-20">

          <div
            className="
              bg-white
              border-2
              border-slate-900
              rounded-[32px]
              p-8
              md:p-10
              shadow-[8px_8px_0_0_rgba(15,23,42,.08)]
            "
          >

            <div
              className="
                flex
                flex-col
                lg:flex-row
                items-center
                justify-between
                gap-8
              "
            >

              <div>

                <h3
                  className="
                    text-3xl
                    md:text-4xl
                    font-black
                    text-slate-900
                  "
                >
                  Ready To Launch
                  <span className="text-emerald-600">
                    {" "}Your Academy?
                  </span>
                </h3>

                <p className="mt-3 text-slate-600 max-w-xl">
                  Start selling courses, managing students and
                  building your brand with Eduline.
                </p>

              </div>

              <button
                onClick={() => (window.location.href = "/onboard")}
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
                  gap-3
                  shadow-[5px_5px_0_0_rgba(15,23,42,1)]
                  hover:translate-x-1
                  hover:translate-y-1
                  hover:shadow-none
                  transition-all
                "
              >
                Start Free
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}