import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello EduLine Team 👋

Name: ${name}
Email: ${email}

Message:
${message}`;

    const phoneNumber = "919400690911";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      className="relative py-24 bg-slate-50 overflow-hidden"
      id="Contact"
    >
      {/* Premium Minimal Fluid Glow Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[400px] bg-slate-200/50 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 shadow-sm rounded-full mb-4">
            <MessageCircle size={13} className="text-emerald-600 fill-current" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              Get In Touch
            </span>
          </div>

          <h2 className="poppins text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            Let's build your <span className="text-emerald-700  ">online academy</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Have structural questions about Eduline or need advice finding your perfect deployment tier? We're structured to help you scale seamlessly.
          </p>
        </div>

        {/* Core Layout Split */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Identity & Metrics Indicators */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Corporate Address Block */}
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                <GraduationCap className="text-emerald-700" size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">
                Partner with Eduline
              </h3>

              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Whether you are an independent expert, a scaling multi-branch institute, or an enterprise team, our platform molds perfectly around your domain parameters.
              </p>

              <hr className="my-6 border-slate-100" />

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Location</div>
                    <div className="text-sm font-medium text-slate-700">Infopark Phase 2, Kochi</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Email</div>
                    <div className="text-sm font-medium text-slate-700">contact@everlinesys.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Direct Support</div>
                    <div className="text-sm font-medium text-slate-700">+91 9400 690 911</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Support Dynamic Window Banner */}
            <div className="bg-gradient-to-br from-[#04281c] to-[#010d09] text-white rounded-[2rem] p-8 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[40px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/50 border border-emerald-800/30 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck size={18} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-tight text-white">
                    Live Handler Response Parameters
                  </h3>
                  <p className="mt-1 text-sm text-emerald-100/70 leading-relaxed">
                    Our direct systems architect routes incoming messages inside our secure business hub. Expect active touchpoints within a narrow minute matrix during regular operation hours.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Interactive Intake Form Container */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm">
            
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <MessageCircle size={20} className="text-emerald-700 fill-current" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Secure Inquiry Router
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  Direct encrypted connection channel
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your legal or organizational name"
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50/50
                    text-slate-900
                    text-sm
                    placeholder-slate-400
                    focus:bg-white
                    focus:border-emerald-600
                    focus:ring-1
                    focus:ring-emerald-600
                    outline-none
                    transition-all
                  "
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50/50
                    text-slate-900
                    text-sm
                    placeholder-slate-400
                    focus:bg-white
                    focus:border-emerald-600
                    focus:ring-1
                    focus:ring-emerald-600
                    outline-none
                    transition-all
                  "
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  System Blueprint Requirements
                </label>
                <textarea
                  rows="5"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Elaborate on course tracks, targeted seats, domain structure guidelines..."
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50/50
                    text-slate-900
                    text-sm
                    placeholder-slate-400
                    focus:bg-white
                    focus:border-emerald-600
                    focus:ring-1
                    focus:ring-emerald-600
                    resize-none
                    outline-none
                    transition-all
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  bg-[#04281c]
                  hover:bg-[#021811]
                  text-white
                  rounded-full
                  py-4
                  font-semibold
                  text-sm
                  tracking-wide
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-all
                  shadow-sm
                  hover:shadow-md
                  mt-2
                "
              >
                Start Conversation
                <Send size={14} className="stroke-[2.5]" />
              </button>

            </form>

            <p className="text-center text-slate-400 text-xs mt-5">
              Secure payload integration will establish a live bridge via external WhatsApp configurations.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}