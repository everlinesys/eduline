import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Layers,
  Target,
  BookOpen,
  ArrowRight
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState(null);

  // Structural Submenu Datasets
  const menuStructures = {
    features: {
      title: "Features",
      items: [
        { label: "Course Builder", desc: "Interactive rich multimedia canvas", icon: Sparkles },
        { label: "White-Labeling", desc: "Custom domains & enterprise brand controls", icon: Layers },
      ]
    },
    platform: {
      title: "Platform",
      items: [
        { label: "Engine Architecture", desc: "High-concurrency global delivery", icon: Layers },
        { label: "Security & Trust", desc: "Encrypted data isolation tiers", icon: BookOpen },
      ]
    },
    solutions: {
      title: "Solutions",
      items: [
        { label: "Corporate Training", desc: "Upskill internal workforce engines", icon: Target },
        { label: "Academic Hubs", desc: "Scalable multi-branch systems", icon: BookOpen },
      ]
    },
    resources: {
      title: "Resources",
      items: [
        { label: "Documentation", desc: "API configurations & setup maps", icon: BookOpen },
        { label: "System Status", desc: "Live infrastructure metrics", icon: Sparkles },
      ]
    }
  };

  const toggleMobileSection = (section) => {
    setActiveMobileSection(activeMobileSection === section ? null : section);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-17 flex items-center justify-between">

          {/* Logo Element */}
          <Link to="/" className="flex items-center justify-center align-center gap-2.5 group">
            <img src="/eduline.png" alt="Eduline Logo" className="w-7 h-7 object-contain transition-transform group-hover:scale-105" />
            <span className="text-2xl poppins text-slate-900 font-bold tracking-tight">
              eduline<span className="text-2xl text-emerald-700 font-sans ">.</span>
            </span>
          </Link>

          {/* DESKTOP INTERFACE: Hover Dropdowns */}
          <div className="hidden lg:flex items-center gap-1">

            {/* Features Mega Dropdown */}
            <div className="relative group/menu py-6">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors rounded-full hover:bg-slate-50">
                Features
                <ChevronDown size={14} className="text-slate-400 group-hover/menu:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white border border-slate-200/80 rounded-xl p-4 shadow-xl opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 translate-y-2 group-hover/menu:translate-y-0 pointer-events-none group-hover/menu:pointer-events-auto">
                <div className="space-y-1">
                  {menuStructures.features.items.map((item, idx) => (
                    <Link key={idx} to="/platform" className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group">
                      <item.icon size={16} className="text-emerald-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">{item.label}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5 leading-normal">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Platform Dropdown */}
            <div className="relative group/menu py-6">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors rounded-full hover:bg-slate-50">
                Platform
                <ChevronDown size={14} className="text-slate-400 group-hover/menu:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white border border-slate-200/80 rounded-xl p-4 shadow-xl opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 translate-y-2 group-hover/menu:translate-y-0 pointer-events-none group-hover/menu:pointer-events-auto">
                <div className="space-y-1">
                  {menuStructures.platform.items.map((item, idx) => (
                    <Link key={idx} to="/platform" className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group">
                      <item.icon size={16} className="text-emerald-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">{item.label}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5 leading-normal">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Static Pricing Route */}
            <Link to="/pricing" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors rounded-full hover:bg-slate-50">
              Pricing
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative group/menu py-6">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors rounded-full hover:bg-slate-50">
                Solutions
                <ChevronDown size={14} className="text-slate-400 group-hover/menu:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white border border-slate-200/80 rounded-xl p-4 shadow-xl opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 translate-y-2 group-hover/menu:translate-y-0 pointer-events-none group-hover/menu:pointer-events-auto">
                <div className="space-y-1">
                  {menuStructures.solutions.items.map((item, idx) => (
                    <Link key={idx} to="/platform" className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group">
                      <item.icon size={16} className="text-emerald-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">{item.label}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5 leading-normal">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group/menu py-6">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors rounded-full hover:bg-slate-50">
                Resources
                <ChevronDown size={14} className="text-slate-400 group-hover/menu:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white border border-slate-200/80 rounded-xl p-4 shadow-xl opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 translate-y-2 group-hover/menu:translate-y-0 pointer-events-none group-hover/menu:pointer-events-auto">
                <div className="space-y-1">
                  {menuStructures.resources.items.map((item, idx) => (
                    <Link key={idx} to="/platform" className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group">
                      <item.icon size={16} className="text-emerald-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">{item.label}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5 leading-normal">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Action Hub */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login" className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Login
            </Link>

            <Link to="/demo" className="px-4 py-2.5 rounded-full border border-slate-200 text-slate-700 font-medium text-xs tracking-wide hover:bg-slate-50 hover:border-slate-300 transition-all">
              Request Demo
            </Link>

            <Link to="/onboard" className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs tracking-wide flex items-center gap-1.5 transition-all shadow-sm"
              style={{ color: "#fff" }}>
              Sign Up
              <ArrowRight size={12} className="stroke-[2.5]" />
            </Link>
          </div>

          {/* Mobile Handler Trigger */}
          <button className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE COLLAPSIBLE DRAWER */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[81px] bottom-0 bg-white border-t border-slate-100 overflow-y-auto z-40">
          <div className="p-6 space-y-3">

            {/* Mobile Expandable Item Set */}
            {Object.keys(menuStructures).map((key) => {
              const group = menuStructures[key];
              const isGroupActive = activeMobileSection === key;
              return (
                <div key={key} className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50">
                  <button
                    onClick={() => toggleMobileSection(key)}
                    className="w-full flex items-center justify-between p-4 text-sm font-semibold text-slate-700"
                  >
                    {group.title}
                    <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 ${isGroupActive ? "rotate-180" : ""}`} />
                  </button>
                  {isGroupActive && (
                    <div className="px-4 pb-4 bg-white border-t border-slate-50 pt-2 space-y-1">
                      {group.items.map((subItem, sIdx) => (
                        <Link
                          key={sIdx}
                          to="/platform"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-xs text-slate-600 font-medium"
                        >
                          <subItem.icon size={14} className="text-emerald-700 shrink-0" />
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Static Mobile Links */}
            <Link
              to="/pricing"
              onClick={() => setIsOpen(false)}
              className="block p-4 border border-slate-100 rounded-2xl bg-slate-50/50 text-sm font-semibold text-slate-700"
            >
              Pricing
            </Link>

            {/* Bottom Profile Matrix Inside Drawer */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <Link to="/login" onClick={() => setIsOpen(false)} className="flex items-center justify-center w-full py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-full transition-colors">
                Login to Portal
              </Link>

              <Link to="/demo" onClick={() => setIsOpen(false)} className="flex items-center justify-center w-full py-3.5 border border-slate-200 rounded-full text-slate-800 text-xs font-semibold tracking-wide bg-white shadow-sm">
                Request System Demo
              </Link>

              <Link to="/onboard" onClick={() => setIsOpen(false)} className="flex items-center justify-center w-full py-3.5 bg-[#04281c] text-white text-xs font-semibold tracking-wide rounded-full shadow-md">
                Create Account
              </Link>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}