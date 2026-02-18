import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Hello Everline Systems,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const phoneNumber = "919400690911";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <section className="relative py-32 bg-white overflow-hidden" id="Contact">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            WE'RE ONLINE
                        </div>

                        <h2 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Ready to grow your <br />
                            <span className="text-emerald-600">digital academy?</span>
                        </h2>

                        <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-lg">
                            Have questions about EduLine? Message us on WhatsApp for a quick chat or to schedule a live demo of the dashboard.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 shrink-0 bg-white shadow-md border border-slate-100 rounded-2xl flex items-center justify-center">
                                    <MapPin className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">Visit Us</h3>
                                    <p className="text-slate-500">
                                        Everline Systems, Infopark Phase 2<br />
                                        Kochi, Kerala, India
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                                    <Mail className="text-emerald-600" />
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                                    <p className="text-slate-500">
                                        contact@everlinesys.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 shrink-0 bg-white shadow-md border border-slate-100 rounded-2xl flex items-center justify-center">
                                    <Phone className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">Direct Contact</h3>
                                    <p className="text-slate-500">+91 9400 690 911</p>
                                    <p className="text-emerald-600 font-medium text-sm">Mon - Sat, 9am - 6pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — CONTACT CARD */}
                    <div className="relative">
                        {/* Soft decorative glow */}
                        <div className="absolute -inset-4 bg-emerald-500/5 rounded-[2.5rem] blur-2xl" />

                        <div className="relative bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                                    <MessageCircle size={26} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">WhatsApp Inquiry</h3>
                                    <p className="text-slate-400 text-sm">Typical response time: 5 mins</p>
                                </div>
                            </div>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="group">
                                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter your name"
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@company.com"
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">How can we help?</label>
                                    <textarea
                                        rows="3"
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="I'm interested in a platform demo..."
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all placeholder:text-slate-400 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full mt-4 bg-emerald-600 text-white py-4 rounded-2xl font-extrabold text-lg shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3"
                                >
                                    Start Conversation
                                    <Send size={20} />
                                </button>
                            </form>

                            <p className="text-center text-slate-400 text-xs mt-6">
                                By clicking "Start Conversation", you'll be redirected to WhatsApp.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}