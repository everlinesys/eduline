import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white/85
        backdrop-blur-xl
        border-b-2
        border-slate-900
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">

            <div
              className="
                w-10
                h-10
                bg-emerald-500
                border-2
                border-slate-900
                rounded-xl
                flex
                items-center
                justify-center
                font-black
                text-white
                shadow-[3px_3px_0_0_rgba(15,23,42,1)]
              "
            >
              E
            </div>

            <div>

              <div
                className="
                  text-xl
                  font-black
                  tracking-tight
                  text-slate-900
                "
              >
                EDULINE
              </div>

              <div
                className="
                  text-[10px]
                  uppercase
                  tracking-widest
                  text-slate-500
                "
              >
                Teaching Platforms
              </div>

            </div>

          </Link>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-10">

            <Link
              to="/platform"
              className="
                font-bold
                text-slate-700
                hover:text-emerald-600
                transition
              "
            >
              Platform
            </Link>

            <Link
              to="/solutions"
              className="
                font-bold
                text-slate-700
                hover:text-emerald-600
                transition
              "
            >
              Solutions
            </Link>

            <Link
              to="/pricing"
              className="
                font-bold
                text-slate-700
                hover:text-emerald-600
                transition
              "
            >
              Pricing
            </Link>

            {/* <Link
              to="/resources"
              className="
                font-bold
                text-slate-700
                hover:text-emerald-600
                transition
              "
            >
              Resources
            </Link> */}

          </div>

          {/* Desktop Actions */}

          <div className="hidden lg:flex items-center gap-3">

            <Link
              to="/login"
              className="
                px-5
                py-3
                bg-white
                border-2
                border-slate-900
                rounded-2xl
                font-black
                text-slate-900
                shadow-[4px_4px_0_0_rgba(15,23,42,.12)]
              "
            >
              Login
            </Link>

            <Link
              to="/onboard"
              className="
                px-6
                py-3
                bg-emerald-500
                border-2
                border-slate-900
                rounded-2xl
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
              style={{ color: "white" }}
            >
              Start Free

              <ArrowRight size={18} />
            </Link>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              lg:hidden
              w-12
              h-12
              bg-white
              border-2
              border-slate-900
              rounded-xl
              flex
              items-center
              justify-center
              shadow-[3px_3px_0_0_rgba(15,23,42,.12)]
            "
            style={{
              background: "white",
              color: "#0f172a",
            }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`
          lg:hidden
          transition-all
          duration-300
          overflow-hidden
          ${
            isOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div
          className="
            border-t-2
            border-slate-900
            bg-white
          "
        >

          <div className="p-6">

            <div
              className="
                flex
                items-center
                gap-2
                bg-emerald-50
                border-2
                border-slate-900
                rounded-2xl
                px-4
                py-3
                mb-6
              "
            >
              <Sparkles size={14} />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-widest
                  font-black
                "
              >
                Launch Your Academy
              </span>
            </div>

            <div className="flex flex-col gap-4">

              <Link
                to="/platform"
                onClick={() => setIsOpen(false)}
                className="
                  border-2
                  border-slate-900
                  rounded-2xl
                  px-5
                  py-4
                  font-black
                "
              >
                Platform
              </Link>

              <Link
                to="/solutions"
                onClick={() => setIsOpen(false)}
                className="
                  border-2
                  border-slate-900
                  rounded-2xl
                  px-5
                  py-4
                  font-black
                "
              >
                Solutions
              </Link>

              <Link
                to="/pricing"
                onClick={() => setIsOpen(false)}
                className="
                  border-2
                  border-slate-900
                  rounded-2xl
                  px-5
                  py-4
                  font-black
                "
              >
                Pricing
              </Link>

              {/* <Link
                to="/resources"
                onClick={() => setIsOpen(false)}
                className="
                  border-2
                  border-slate-900
                  rounded-2xl
                  px-5
                  py-4
                  font-black
                "
              >
                Resources
              </Link> */}

            </div>

            <div className="grid gap-3 mt-6">

              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="
                  bg-white
                  border-2
                  border-slate-900
                  rounded-2xl
                  py-4
                  text-center
                  font-black
                "
              >
                Login
              </Link>

              <Link
                to="/onboard"
                onClick={() => setIsOpen(false)}
                className="
                  bg-emerald-500
                  border-2
                  border-slate-900
                  rounded-2xl
                  py-4
                  text-center
                  font-black
                  flex
                  items-center
                  justify-center
                  gap-3
                  shadow-[5px_5px_0_0_rgba(15,23,42,1)]
                "
                style={{ color: "white" }}
              >
                Start Free

                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </div>

    </nav>
  );
}