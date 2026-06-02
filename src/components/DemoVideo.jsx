import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  PlayCircle,
  FileText,
  Zap,
  ShieldCheck,
  MonitorPlay,
  BookOpen,
} from "lucide-react";

export default function DemoVideo() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 bg-[#f7faf8] overflow-hidden">

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

        <div className="text-center max-w-3xl mx-auto mb-16">

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
            "
          >
            <PlayCircle size={14} />

            <span className="text-xs font-black uppercase tracking-widest">
              Learning Experience
            </span>
          </div>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-black
              tracking-tight
              text-slate-900
            "
          >
            Built For Modern
            <span className="text-emerald-600"> Education</span>
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Deliver engaging learning experiences with premium video streaming
            and integrated study materials.
          </p>

        </div>

        {/* 2x2 Grid */}

        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={
            visible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
          }}
          className="grid lg:grid-cols-2 gap-8"
        >

          {/* VIDEO PLAYER */}

          <div
            className="
              bg-white
              border-2
              border-slate-900
              rounded-[32px]
              overflow-hidden
              shadow-[10px_10px_0_0_rgba(15,23,42,.1)]
            "
          >

            <div
              className="
                h-14
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

              <div className="ml-auto text-xs text-slate-500">
                Video Learning
              </div>
            </div>

            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                src="https://player.mediadelivery.net/embed/594138/231392af-8a40-4586-9879-897d3f02b853?autoplay=false&loop=false&muted=false&preload=false&responsive=true"
                loading="lazy"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
                style={{
                  border: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>

          </div>

          {/* TEXT 1 */}

          <div
            className="
              bg-white
              border-2
              border-slate-900
              rounded-[32px]
              p-8
              shadow-[10px_10px_0_0_rgba(15,23,42,.1)]
              flex
              flex-col
              justify-center
            "
          >

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
              <MonitorPlay className="text-emerald-600" size={28} />
            </div>

            <h3 className="text-3xl font-black text-slate-900">
              Premium Video Experience
            </h3>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Deliver high-quality courses with adaptive streaming,
              lightning-fast playback and a premium viewing experience
              across desktop, mobile and tablets.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <span className="px-3 py-2 bg-emerald-50 rounded-full text-sm font-bold">
                4K Support
              </span>

              <span className="px-3 py-2 bg-emerald-50 rounded-full text-sm font-bold">
                Speed Controls
              </span>

              <span className="px-3 py-2 bg-emerald-50 rounded-full text-sm font-bold">
                Adaptive Quality
              </span>

              <span className="px-3 py-2 bg-emerald-50 rounded-full text-sm font-bold">
                Mobile Optimized
              </span>

            </div>

          </div>

          {/* TEXT 2 */}

          <div
            className="
              bg-white
              border-2
              border-slate-900
              rounded-[32px]
              p-8
              shadow-[10px_10px_0_0_rgba(15,23,42,.1)]
              flex
              flex-col
              justify-center
            "
          >

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
              <ShieldCheck className="text-emerald-600" size={28} />
            </div>

            <h3 className="text-3xl font-black text-slate-900">
              Secure Learning Delivery
            </h3>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Protect premium content with controlled access,
              secure streaming and learner-specific permissions
              while maintaining a smooth user experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <span className="px-3 py-2 bg-emerald-50 rounded-full text-sm font-bold">
                Secure Access
              </span>

              <span className="px-3 py-2 bg-emerald-50 rounded-full text-sm font-bold">
                Student Tracking
              </span>

              <span className="px-3 py-2 bg-emerald-50 rounded-full text-sm font-bold">
                Progress Analytics
              </span>

              <span className="px-3 py-2 bg-emerald-50 rounded-full text-sm font-bold">
                Cloud Delivery
              </span>

            </div>

          </div>

          {/* PDF VIEWER */}

          <div
            className="
              bg-white
              border-2
              border-slate-900
              rounded-[32px]
              overflow-hidden
              shadow-[10px_10px_0_0_rgba(15,23,42,.1)]
            "
          >

            <div
              className="
                h-14
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

              <div className="ml-auto text-xs text-slate-500">
                PDF Reader
              </div>
            </div>

            <div className="aspect-video bg-slate-100 flex items-center justify-center">

              <div className="text-center">

                <div className="w-20 h-20 mx-auto rounded-3xl bg-white border-2 border-slate-900 flex items-center justify-center">
                  <FileText size={40} />
                </div>

                <div className="mt-4 font-black text-xl">
                  PDF Learning Material
                </div>

              </div>

            </div>

            <div className="p-6">

              <h3 className="text-2xl font-black text-slate-900">
                Built-In PDF Reader
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed">
                Upload notes, books, guides and study material directly
                into your academy. Students can read content without
                downloading files or leaving the platform.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <span className="px-3 py-2 bg-emerald-50 rounded-full text-sm font-bold">
                  Page Navigation
                </span>

                <span className="px-3 py-2 bg-emerald-50 rounded-full text-sm font-bold">
                  Zoom Controls
                </span>

                <span className="px-3 py-2 bg-emerald-50 rounded-full text-sm font-bold">
                  Mobile Reading
                </span>

                <span className="px-3 py-2 bg-emerald-50 rounded-full text-sm font-bold">
                  In-App Access
                </span>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}