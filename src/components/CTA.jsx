import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">

      {/* Emerald Rotated Background (Everlinesys style) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[140%] h-96 bg-emerald-600 rotate-[-6deg] rounded-[2rem]"></div>

      <div className="relative max-w-5xl mx-auto px-6">

        {/* CTA Card */}
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-[1rem] p-12 md:p-16 text-center ">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Build your education brand today.
          </h2>

          {/* Subtext */}
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-10">
            Launch your own teaching platform, sell courses, host live classes,
            and own your students — without relying on marketplaces.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            {/* Primary */}
            <button className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition flex items-center justify-center gap-2">
              Get Started for Free
              <ArrowRight size={18} />
            </button>

            {/* Secondary */}
            <button className="border border-white/40 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
              Book a Demo
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
