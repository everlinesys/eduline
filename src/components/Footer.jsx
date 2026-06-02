import { Link } from "react-router-dom";
import {
  GraduationCap,
  ShieldCheck,
  Award,
  CreditCard,
  BarChart3,
  BookOpen,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#f7faf8] border-t-2 border-slate-900 overflow-hidden">

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

      <div className="relative max-w-7xl mx-auto px-6">

        {/* CTA */}

        <div className="py-16">

          <div
            className="
              bg-white
              border-2
              border-slate-900
              rounded-[32px]
              p-8
              md:p-10
              shadow-[10px_10px_0_0_rgba(15,23,42,.08)]
            "
          >

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

              <div>

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
                    mb-4
                  "
                >
                  <GraduationCap size={14} />

                  <span className="text-xs font-black uppercase tracking-widest">
                    Start Today
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                  Launch Your Academy
                </h2>

                <p className="mt-4 text-slate-600 text-lg max-w-xl">
                  Create your own branded learning platform,
                  sell courses and grow your education business.
                </p>

              </div>

              <Link
                to="/onboard"
                className="
                  bg-emerald-500
                  border-2
                  border-slate-900
                  rounded-2xl
                  px-8
                  py-4
                  text-white
                  font-black
                  whitespace-nowrap
                  shadow-[5px_5px_0_0_rgba(15,23,42,1)]
                  hover:translate-x-1
                  hover:translate-y-1
                  hover:shadow-none
                  transition-all
                "
                style={{ color: "white" }}
              >
                Start Free
              </Link>

            </div>

          </div>

        </div>

        {/* Main Footer */}

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 py-12">

          {/* Brand */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-4 mb-6">

              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-emerald-500
                  border-2
                  border-slate-900
                  flex
                  items-center
                  justify-center
                  font-black
                  text-white
                  shadow-[4px_4px_0_0_rgba(15,23,42,1)]
                "
              >
                E
              </div>

              <div>

                <div className="text-2xl font-black text-slate-900">
                  EDULINE
                </div>

                <div className="text-xs uppercase tracking-widest text-slate-500">
                  Learning Platform
                </div>

              </div>

            </div>

            <p className="text-slate-600 max-w-md leading-relaxed">
              A complete LMS platform for educators, coaching
              institutes and training organizations to launch
              branded online academies.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="px-3 py-2 bg-white border-2 border-slate-900 rounded-full text-sm font-bold">
                White Label
              </div>

              <div className="px-3 py-2 bg-white border-2 border-slate-900 rounded-full text-sm font-bold">
                Certificates
              </div>

              <div className="px-3 py-2 bg-white border-2 border-slate-900 rounded-full text-sm font-bold">
                Exams
              </div>

            </div>

          </div>

          {/* Platform */}

          <div>

            <h4 className="font-black text-slate-900 mb-6">
              Platform
            </h4>

            <div className="space-y-4">

              <a href="#Platform" className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition">
                <BookOpen size={16} />
                LMS Website
              </a>

              <a href="#Features" className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition">
                <Award size={16} />
                Certificates
              </a>

              <a href="#Features" className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition">
                <ShieldCheck size={16} />
                Secure Content
              </a>

            </div>

          </div>

          {/* Features */}

          <div>

            <h4 className="font-black text-slate-900 mb-6">
              Features
            </h4>

            <div className="space-y-4">

              <a href="#Features" className="block text-slate-600 hover:text-emerald-600 transition">
                Video Courses
              </a>

              <a href="#Features" className="block text-slate-600 hover:text-emerald-600 transition">
                Exams & Quizzes
              </a>

              <a href="#Features" className="block text-slate-600 hover:text-emerald-600 transition">
                PDF Learning Materials
              </a>

              <a href="#Features" className="block text-slate-600 hover:text-emerald-600 transition">
                Student Management
              </a>

            </div>

          </div>

          {/* Company */}

          <div>

            <h4 className="font-black text-slate-900 mb-6">
              Company
            </h4>

            <div className="space-y-4">

              <Link
                to="/privacy-policy"
                className="block text-slate-600 hover:text-emerald-600 transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-conditions"
                className="block text-slate-600 hover:text-emerald-600 transition"
              >
                Terms & Conditions
              </Link>

              <a
                href="mailto:contact@everlinesys.com"
                className="block text-slate-600 hover:text-emerald-600 transition"
              >
                Contact
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t-2 border-slate-900 py-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-slate-500">
              © 2026 Eduline. All rights reserved.
            </p>

            <div className="flex items-center gap-3 text-sm text-slate-500">

              <span>Powered by</span>

              <span className="font-black text-slate-900">
                Everline Systems
              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}