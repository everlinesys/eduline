import React from "react";
import { ExternalLink, Monitor, Globe, Sparkles, Link } from "lucide-react";

const projects = [
  {
    title: "Raga Music Academy",
    category: "Music & Arts",
    link: "https://ragamusicacademy.vercel.app",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
    color: "from-purple-500 to-indigo-600",
    description: "Digitalizing traditional music education with seamless student-teacher interactions."
  },
  {
    title: "Axiom Learning",
    category: "Professional Training",
    link: "https://axiom-learning.vercel.app",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    color: "from-blue-500 to-cyan-500",
    description: "High-performance platform for competitive exam prep and corporate training."
  },
  {
    title: "Grace English Academy",
    category: "Language Learning",
    link: "https://graceenglishacademy.vercel.app",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop",
    color: "from-emerald-500 to-teal-600",
    description: "Empowering students worldwide with interactive English communication tools."
  }
];

export default function Demo() {
  return (
    <section className="md:px-30 py-32 bg-slate-50 overflow-hidden" id="Demos">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-blue-600"></span>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Live Showcases</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Trusted by the next generation of <span className="text-blue-600">digital academies.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium md:text-right max-w-xs">
            See how educators are transforming their teaching into scalable brands.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative">
              {/* Card Container */}
              <div className="relative h-full bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

                {/* Browser Top Bar Decor */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  </div>
                  <Globe size={14} className="text-slate-400" />
                </div>

                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{project.category}</p>
                      <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-900 text-white rounded-2xl hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Hover Glow */}
                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r ${project.color} blur-lg opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Section */}
        <div className="mt-20 flex flex-col items-center">
          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xl flex flex-col md:flex-row items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-slate-700 font-bold">Join 500+ academies launched this year.</p>
            <button onClick={() => window.location.href = "/onboard"}
              className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2">
              Build Your Academy <Sparkles size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}