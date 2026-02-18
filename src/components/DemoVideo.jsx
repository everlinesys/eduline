import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function DemoVideo() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.85, y: 60 }}
          animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          
          {/* Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-blue-50 blur-3xl opacity-60" />

          {/* Frame */}
          <div className="relative overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] border border-slate-100">

            <div className="w-full aspect-video">
              <iframe
                src="https://iframe.mediadelivery.net/play/594138/f2063ed6-271b-4210-bfbf-e4510382acf2"
                loading="lazy"
                title="Eduline Demo"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
                className="min-h-120 w-full h-full border-0"
              ></iframe>
            </div>

            <div className="absolute inset-0 pointer-events-none border border-white/10" />
          </div>

          {/* Caption */}
          <div className="mt-8 text-center">
            <p className="text-slate-400 font-medium flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Watch: The Eduline Experience
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
