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
      className="relative py-28 bg-[#f7faf8] overflow-hidden"
      id="Contact"
    >
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

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-emerald-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center max-w-4xl mx-auto mb-20">

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
            <MessageCircle size={14} />

            <span className="text-xs font-black uppercase tracking-widest">
              Contact Us
            </span>
          </div>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-black
              tracking-tight
              leading-[1]
              text-slate-900
            "
          >
            Let's Build Your
            <span className="block text-emerald-600">
              Online Academy
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Have questions about Eduline? Need help choosing a plan?
            We're happy to help you launch and grow your academy.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT SIDE */}

          <div className="space-y-6">

            <div
              className="
                bg-white
                border-2
                border-slate-900
                rounded-[32px]
                p-8
                shadow-[8px_8px_0_0_rgba(15,23,42,.08)]
              "
            >
              <GraduationCap
                className="text-emerald-600"
                size={42}
              />

              <h3 className="mt-6 text-3xl font-black text-slate-900">
                Start Your Academy
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Whether you're an individual educator,
                coaching institute or training organization,
                we'll help you launch your own branded learning platform.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <MapPin
                      size={20}
                      className="text-emerald-600"
                    />
                  </div>

                  <div>
                    <div className="font-black text-slate-900">
                      Location
                    </div>

                    <div className="text-slate-600">
                      Infopark Phase 2, Kochi
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <Mail
                      size={20}
                      className="text-emerald-600"
                    />
                  </div>

                  <div>
                    <div className="font-black text-slate-900">
                      Email
                    </div>

                    <div className="text-slate-600">
                      contact@everlinesys.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <Phone
                      size={20}
                      className="text-emerald-600"
                    />
                  </div>

                  <div>
                    <div className="font-black text-slate-900">
                      Phone
                    </div>

                    <div className="text-slate-600">
                      +91 9400 690 911
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div
              className="
                bg-emerald-500
                border-2
                border-slate-900
                rounded-[32px]
                p-8
              "
            >
              <ShieldCheck size={42} />

              <h3 className="mt-5 text-2xl font-black text-slate-900">
                Typical Response Time
              </h3>

              <p className="mt-3 text-slate-800">
                We usually respond within a few minutes on WhatsApp
                during business hours.
              </p>
            </div>

          </div>

          {/* RIGHT FORM */}

          <div
            className="
              bg-white
              border-2
              border-slate-900
              rounded-[32px]
              p-8
              md:p-10
              shadow-[8px_8px_0_0_rgba(15,23,42,.08)]
            "
          >

            <div className="flex items-center gap-4 mb-8">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-emerald-500
                  border-2
                  border-slate-900
                  flex
                  items-center
                  justify-center
                "
              >
                <MessageCircle
                  size={26}
                  className="text-white"
                />
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  WhatsApp Inquiry
                </h3>

                <p className="text-slate-500">
                  Quick responses from our team
                </p>
              </div>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>
                <label className="block font-bold text-slate-900 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="Your name"
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border-2
                    border-slate-900
                    bg-white
                    outline-none
                  "
                />
              </div>

              <div>
                <label className="block font-bold text-slate-900 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="name@example.com"
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border-2
                    border-slate-900
                    bg-white
                    outline-none
                  "
                />
              </div>

              <div>
                <label className="block font-bold text-slate-900 mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  required
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  placeholder="Tell us about your academy..."
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    border-2
                    border-slate-900
                    bg-white
                    resize-none
                    outline-none
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  bg-emerald-500
                  border-2
                  border-slate-900
                  rounded-2xl
                  py-4
                  font-black
                  text-white
                  flex
                  items-center
                  justify-center
                  gap-3
                  shadow-[5px_5px_0_0_rgba(15,23,42,1)]
                  hover:translate-x-1
                  hover:translate-y-1
                  hover:shadow-none
                  transition-all
                "
              >
                Start Conversation
                <Send size={18} />
              </button>

            </form>

            <p className="text-center text-slate-500 text-sm mt-6">
              You'll be redirected to WhatsApp to continue the conversation.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}