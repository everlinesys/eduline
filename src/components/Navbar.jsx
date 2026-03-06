import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ===== BRAND ===== */}
        <a href="/" className="flex items-center gap-3">
          {/* <img
            src="/logo.png"
            alt="EduLine Logo"
            className="h-6 w-6 object-contain"
          /> */}

          {/* Premium Brand Font */}
          <span className="text-xl font-extrabold tracking-tight text-blue-600">
            EDULINE
          </span>
        </a>

        {/* ===== DESKTOP NAV ===== */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#Platform" className="hover:text-blue-600 transition">
            Platform
          </a>
          <a href="#Solutions" className="hover:text-blue-600 transition">
            Solutions
          </a>
          <a href="#Pricing" className="hover:text-blue-600 transition">
            Pricing
          </a>

          <div className="flex items-center gap-3 ml-4">
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-100 transition active:scale-95">
              Start Building
            </button>
          </div>
        </div>

        {/* ===== MOBILE TOGGLE ===== */}
        <button
          className="md:hidden p-2 text-blue-600 hover:bg-slate-50 rounded-lg transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{background:"transparent", border:"none", color:"#1967ba"  }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-6 shadow-xl shadow-slate-200/50">

          <a
            href="#Platform"
            className="text-base font-semibold text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Platform
          </a>

          <a
            href="#Solutions"
            className="text-base font-semibold text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Solutions
          </a>

          <a
            href="#Pricing"
            className="text-base font-semibold text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>

          <hr className="border-slate-100" />

          <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-100">
            Start Building
          </button>
        </div>
      </div>
    </nav>
  );
}
