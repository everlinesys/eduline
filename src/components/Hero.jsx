import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Hero() {
  // 1. Array of 3 different title slides
  const slides = [
    {
      text: "Create a learning business,",
      highlight: "not just courses.",
    },
    {
      text: "Scale your academy,",
      highlight: "without the tech headaches.",
    },
    {
      text: "Empower your learners,",
      highlight: "and own your brand.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 2. Auto-advance slides every 3 seconds with a quick fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300); // Dynamic transition duration matching standard durations
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-[#F4F7F4] pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO CARD */}
        <div
          className="
            relative
            bg-gradient-to-br
            from-[#065F46]
            via-[#064E3B]
            to-[#043427]
            rounded-[48px]
            overflow-hidden
            shadow-[0_40px_120px_rgba(0,0,0,.15)]
          "
        >
          {/* Background Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="
                absolute
                -top-32
                left-1/2
                -translate-x-1/2
                w-[1000px]
                h-[400px]
                bg-emerald-400/10
                blur-[120px]
                rounded-full
              "
            />
            <div
              className="
                absolute
                bottom-0
                left-0
                w-[500px]
                h-[500px]
                bg-emerald-500/10
                blur-[100px]
                rounded-full
              "
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 text-center px-8 pt-8">

            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                bg-white/10
                border
                border-white/10
                backdrop-blur-sm
                text-emerald-100
                text-sm
                font-medium
              "
            >
              Trusted by educators and training businesses
            </div>

            {/* Headline with Auto-Sliding and Fade Effect */}
            <h1
              className={`
                mt-5
                text-5xl
                md:text-7xl
                font-semibold
                tracking-[-0.05em]
                leading-[0.95]
                text-white
                max-w-5xl
                mx-auto
                poppins
                transition-all
                duration-300
                ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}
              `}
            >
              {slides[currentSlide].text}{" "}
              <span className="block text-emerald-300">
                {slides[currentSlide].highlight}
              </span>
            </h1>

            {/* CTA */}
            <div
              className="
                mt-5
                flex
                flex-col
                sm:flex-row
                justify-center
                gap-4
              "
            >
              <Link
                to="/onboard"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-19
                  py-3
                  rounded-full
                  bg-emerald-300
                  hover:bg-emerald-200
                  text-white
                  font-semibold
                  transition-all
                "
                style={{ color: "black", fontSize: "15px", fontWeight: "500" }}
              >
                Start Free
                <ArrowRight size={18} />
              </Link>
            </div>

            <p className="mt-4 text-sm text-emerald-100/50">
              No credit card required
            </p>

          </div>

          {/* DASHBOARD */}
          <div className="relative z-10 mt-5 px-6 md:px-12">
            <div
              className="
                rounded-t-[32px]
                overflow-hidden
                border
                border-white/10
                shadow-[0_20px_80px_rgba(0,0,0,.25)]
                bg-white
              "
            >
              {/* Browser Head */}
              <div
                className="
                  h-12
                  bg-slate-50
                  border-b
                  border-slate-200
                  flex
                  items-center
                  px-5
                "
              >
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <div
                  className="
                    mx-auto
                    text-xs
                    text-slate-400
                    bg-white
                    border
                    border-slate-200
                    rounded-full
                    px-4
                    py-1
                  "
                >
                  academy.yourbrand.com
                </div>
              </div>

              {/* REAL DASHBOARD IMAGE */}
              <img
                src="/eduline-dashboard.jpg"
                alt="Eduline Dashboard"
                className="
                  w-full
                  max-h-[500px]
                  object-cover
                  object-top
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}