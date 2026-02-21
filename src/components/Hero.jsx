import { ArrowRight, Sparkles, MessageCircle, X, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- WHATSAPP WIDGET COMPONENT ---
const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

  // Show a "1" badge after 3 seconds to grab attention
  useEffect(() => {
    const timer = setTimeout(() => setShowBadge(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919400690911";
    const message = encodeURIComponent("Hello EduLine team! I'd like to know more about the platform.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center gap-4">
      {/* Chat Bubble */}
      {isOpen && (
        <div className="mb-4 w-72 md:w-80 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-600 rounded-full"></span>
              </div>
              <div>
                <p className="font-bold text-sm">EduLine Support</p>
                <p className="text-[10px] opacity-80">Typically replies in minutes</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition">
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 mb-2">
              <p className="text-sm text-slate-700">
                Hi there! 👋 <br />
                Ready to launch your own branded academy? How can we help you today?
              </p>
            </div>
          </div>

          {/* Footer / CTA */}
          <div className="p-4 bg-white">
            <button
              onClick={handleWhatsAppRedirect}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
            >
              Start Chat <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowBadge(false);
        }}
        className={`relative p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${isOpen ? 'bg-slate-800 text-white' : 'bg-emerald-500 text-white'
          }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}

        {showBadge && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 text-[10px] font-bold items-center justify-center">1</span>
          </span>
        )}
      </button>
    </div>
  );
};

// --- HERO COMPONENT ---
export default function Hero() {
  return (
    <>
      <section className=" min-w-[100vw] min-h-[90vh] relative pt-28 pb-12 flex items-center overflow-hidden bg-white">

        {/* Modern Gradient Accents */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-emerald-50/60 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-blue-50/40 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-left">

          {/* LEFT CONTENT */}
          <div className="z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full mb-8 shadow-sm">
              <Sparkles size={14} className="text-emerald-600" />
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                The Infrastructure for Educators
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 text-slate-900 tracking-tight leading-[1.1]">
              Brand your <br />
              <span className="text-emerald-600">teaching.</span>
            </h1>

            <p className="text-xl text-slate-500 mb-10 max-w-md leading-relaxed">
              EduLine is the all-in-one builder to launch your own branded e-learning store.
              <strong> Own your students, your data, and your future.</strong>
            </p>

            <div className="flex flex-wrap gap-4">

              {/* PRIMARY — WHATSAPP */}
              <a
                href="https://wa.me/919400690911?text=Hello%20EduLine%20team%20👋%20I%20want%20to%20get%20started%20with%20my%20own%20branded%20teaching%20platform."
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }} className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center gap-3 text-lg"
              >
                Get Started for Free
                <ArrowRight size={20} />
              </a>

              {/* SECONDARY — SEE DEMO */}
              <a
                href="https://edulinedemo.everlinesys.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline  py-5 font-bold transition-all flex items-center gap-3 text-lg"
                style={{ color: "emerald-600" }} >
                See Demo
              </a>

            </div>

          </div>

          {/* RIGHT SIDE (Mockup) */}
          <div className="z-10 relative group lg:max-w-[300px] xl:max-w-[350px] mx-auto">
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2rem] blur-3xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>

            <div className="relative bg-white border border-slate-200 rounded-[2rem] shadow-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
              {/* Browser Header */}
              <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-5 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                </div>
                <div className="mx-auto bg-white border border-slate-200 px-4 py-1 rounded-full text-[10px] text-slate-400 font-medium">
                  academy.yourbrand.com
                </div>
              </div>

              {/* Mockup UI Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">ED</div>
                    <span className="font-bold text-slate-800">Your Academy</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-500 border border-slate-200"></div>
                </div>

                <div className="rounded-2xl overflow-hidden mb-6">
                  <img src="https://images.unsplash.com/photo-1631203928493-a4e4eb2b8da1?q=80&w=869" alt="Course" className="w-full aspect-video object-cover" />
                </div>

                <div className="space-y-2 mb-8">
                  <h3 className="text-lg font-bold text-slate-900">Digital Masterclass</h3>
                  <p className="text-sm text-slate-500 italic">42 lessons • 12,403 students enrolled</p>
                </div>

                <div className="w-full py-4 bg-emerald-600 rounded-xl text-center text-white font-bold shadow-lg shadow-emerald-100">
                  Enroll Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIXED WIDGET */}
      <WhatsAppWidget />
    </>
  );
}