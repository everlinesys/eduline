import { ArrowRight } from "lucide-react";

export default function CTA() {

  const sendWhatsApp = (type) => {
    const phone = "919400690911";

    let message = "";

    if (type === "start") {
      message = "Hello EduLine team 👋 I want to get started with my own branded teaching platform.";
    } else {
      message = "Hello EduLine team 👋 I would like to book a demo of EduLine.";
    }

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="relative py-32 overflow-hidden bg-white">

      {/* Emerald Background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[140%] h-96 bg-emerald-600 rotate-[-6deg] rounded-[2rem]"></div>

      <div className="relative max-w-5xl mx-auto px-6">

        <div className="bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-[1rem] p-12 md:p-16 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Build your education brand today.
          </h2>

          <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-10">
            Launch your own teaching platform and own your students.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <button
              onClick={() => sendWhatsApp("start")}
              className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition flex items-center justify-center gap-2"
            >
              Get Started for Free
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => sendWhatsApp("demo")}
              className="border border-white/40 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition"
            >
              Book a Demo
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
