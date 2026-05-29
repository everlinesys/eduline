import { ArrowRight, Sparkles, MessageCircle, X, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// --- WHATSAPP WIDGET COMPONENT ---
const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

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
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-72 md:w-80 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="bg-blue-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-blue-600 rounded-full"></span>
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

          <div className="p-4 bg-slate-50">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
              <p className="text-sm text-slate-700">
                Hi there! 👋 <br />
                Ready to launch your own branded academy? How can we help you today?
              </p>
            </div>
          </div>

          <div className="p-4 bg-white">
            <button
              onClick={handleWhatsAppRedirect}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              Start Chat <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowBadge(false);
        }}
        className={`relative p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-slate-800 text-white' : 'bg-blue-600 text-white'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {showBadge && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-red-500 text-[11px] font-bold items-center justify-center">1</span>
          </span>
        )}
      </button>
    </div>
  );
};

// --- MOCKUP COMPONENT (Reusable) ---
const AcademyMockup = () => (
  <div className="relative group w-full max-w-[350px] mx-auto animate-float">
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
      }
      .animate-float { animation: float 6s ease-in-out infinite; }
    `}</style>
    <div className="absolute -inset-4 bg-blue-500/10 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
    <div className="relative bg-white border border-slate-200 rounded-[2rem] shadow-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
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
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-[10px] font-bold">ED</div>
            <span className="font-bold text-slate-800 text-sm">Your Academy</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200"></div>
        </div>
        <div className="rounded-xl overflow-hidden mb-4 shadow-inner">
          <img src="https://images.unsplash.com/photo-1631203928493-a4e4eb2b8da1?q=80&w=869" alt="Course" className="w-full aspect-video object-cover" />
        </div>
        <div className="space-y-1 mb-6">
          <h3 className="text-md font-bold text-slate-900">Digital Masterclass</h3>
          <p className="text-[11px] text-slate-500">42 lessons • 12,403 students</p>
        </div>
        <Link to="/onboard" className="cursor-pointer w-full py-3 px-10 bg-blue-600 rounded-xl text-center text-white text-sm font-bold shadow-lg shadow-blue-100"
         style={{color:"white"}} >
          Enroll Now
        </Link>
      </div>
    </div>
  </div>
);

// --- MAIN HERO ---
export default function Hero() {
  return (
    <>
      <section className="md:px-30 min-h-screen relative pt-32 pb-20 flex items-center overflow-hidden bg-white">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-blue-50/60 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-blue-50/40 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8">
                <Sparkles size={14} className="text-blue-600" />
                <span className="text-[10px] md:text-xs font-bold text-blue-700 uppercase tracking-[0.2em]">
                  The Infrastructure for Educators
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-slate-900 tracking-tight leading-[1.1]">
                Brand your <br />
                <span className="text-blue-600">teaching.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
                EduLine is the all-in-one builder to launch your own branded e-learning store.
                <span className="block mt-2 font-semibold text-slate-700"> Own your students, your data, and your future.</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Link
                  to="/onboard"
                  className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 text-lg"
               style={{color:"white"}} >
                  Get Started for Free
                  <ArrowRight size={20} />
                </Link>

                <a
                  href="https://axiom-learning.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold hover:text-blue-700 transition-all flex items-center gap-2 text-lg group"
                >
                  See Demo
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Right Side Mockup */}
            <div className="order-1 lg:order-2">
              <AcademyMockup />
            </div>

          </div>
        </div>
      </section>

      <WhatsAppWidget />
    </>
  );
}