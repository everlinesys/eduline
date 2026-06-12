import { Link } from "react-router-dom";
import {
  GraduationCap,
  ShieldCheck,
  Award,
  BookOpen,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 overflow-hidden w-[99vw]">
      
      {/* Premium Subtle Geometric Accent Blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/40 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* 
          TalentLMS-Inspired CTA Box
          Clean, rounded container with a high-contrast elegant inner layout
        */}
        <div className="pt-16">
          <div
            className="
              relative
              bg-gradient-to-r from-[#04281c] to-[#021811]
              text-white
              rounded-[2rem]
              p-8
              md:p-12
              overflow-hidden
              shadow-xl shadow-emerald-950/10
            "
          >
            {/* Inner background flare */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/10 blur-[80px] rounded-full" />

            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 z-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/50 border border-emerald-700/30 rounded-full mb-4">
                  <GraduationCap size={14} className="text-emerald-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Start Today
                  </span>
                </div>

                <h2 className="poppins text-3xl md:text-4xl font-normal tracking-tight text-white">
                  Ready to launch your own online academy?
                </h2>

                <p className="mt-3 text-emerald-100/70 text-base md:text-lg leading-relaxed">
                  Create custom branded environments, manage dynamic student pathways, 
                  and scale your corporate or retail education business instantly.
                </p>
              </div>

              <Link
                to="/onboard"
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-[#bbf7d0] 
                  hover:bg-[#86efac]
                  text-emerald-950
                  rounded-full
                  px-8
                  py-4
                  font-semibold
                  text-base
                  whitespace-nowrap
                  transition-all
                  duration-200
                  shadow-md
                  hover:shadow-lg
                  w-full
                  sm:w-auto
                  justify-center
                "
              >
                Start Free
                <ArrowRight size={16} className="stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Links Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-12 py-16 border-b border-slate-200">

          {/* Brand Presentation Column */}
          <div className="col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div
                className="
                  w-9
                  h-9
                  rounded-xl
                  bg-emerald-600
                  flex
                  items-center
                  justify-center
                  poppins
                  text-base
                  font-semibold
                  text-white
                "
              >
                E
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900 tracking-tight">
                  EDULINE
                </div>
                <div className="text-[10px] uppercase font-semibold tracking-widest text-slate-400 -mt-0.5">
                  Learning Management Platform
                </div>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              A comprehensive white-label platform for enterprise training, academy management, and scalable learning tracks.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2.5 py-1 bg-slate-200/60 text-slate-600 rounded-md text-xs font-medium">
                White Label
              </span>
              <span className="px-2.5 py-1 bg-slate-200/60 text-slate-600 rounded-md text-xs font-medium">
                ISO Security
              </span>
              <span className="px-2.5 py-1 bg-slate-200/60 text-slate-600 rounded-md text-xs font-medium">
                SCORM Compliant
              </span>
            </div>
          </div>

          {/* Platform Navigation Group */}
          <div className="col-span-1">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-800 mb-5">
              Platform
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#Platform" className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors">
                  <BookOpen size={14} className="text-slate-400" />
                  LMS Ecosystem
                </a>
              </li>
              <li>
                <a href="#Features" className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors">
                  <Award size={14} className="text-slate-400" />
                  Certifications
                </a>
              </li>
              <li>
                <a href="#Features" className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors">
                  <ShieldCheck size={14} className="text-slate-400" />
                  Data Security
                </a>
              </li>
            </ul>
          </div>

          {/* Features Navigation Group */}
          <div className="col-span-1">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-800 mb-5">
              Features
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#Features" className="hover:text-emerald-600 transition-colors">Course Builder</a>
              </li>
              <li>
                <a href="#Features" className="hover:text-emerald-600 transition-colors">Testing & Surveys</a>
              </li>
              <li>
                <a href="#Features" className="hover:text-emerald-600 transition-colors">Blended Learning</a>
              </li>
              <li>
                <a href="#Features" className="hover:text-emerald-600 transition-colors">User Infographics</a>
              </li>
            </ul>
          </div>

          {/* Corporate Legal & Communications Column */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-800 mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link to="/privacy-policy" className="hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-emerald-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="mailto:contact@everlinesys.com" className="hover:text-emerald-600 transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Metadata Bar */}
        <div className="py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              &copy; 2026 Eduline Inc. All global rights reserved.
            </p>

            <div className="flex items-center gap-1.5">
              <span>Engineered with precision by</span>
              <span className="font-semibold text-slate-700 tracking-tight">
                Everline Systems
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}