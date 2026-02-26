import { Sparkles, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const FreeTrialWidget = () => {
    // 🔥 Already open on load
    const [isOpen, setIsOpen] = useState(true);

    const handleStartTrial = () => {
        window.open("https://wa.me/919400690911?text=Hello%20EduLine%20team!%20I%20want%20to%20start%20my%207-day%20free%20trial.", "_blank");
    };

    return (
        <div className="fixed bottom-20 right-6 z-[9999] flex flex-col items-end gap-4">

            {/* EXPANDED CARD */}
            {isOpen && (
                <div className="w-80 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">

                    {/* Header */}
                    <div className="bg-[#0e74ec] p-4 text-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black text-xl"
                                style={{ fontWeight: "bolder" }}>
                                7
                            </div>
                            <div>
                                <p className="font-bold text-sm">7-Day Free Trial</p>
                                <p className="text-[10px] opacity-80">
                                    Launch your academy today
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/10 p-1 rounded-full transition"
                            style={{ background: "none" }}   >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-5 bg-slate-50 space-y-3">
                        <p className="text-sm text-slate-700">
                            Start your <strong>7 days free trial</strong> 🚀
                        </p>

                        <p className="text-xs text-slate-500 leading-relaxed">
                            No documentation. <br /> No credit card needed. <br />
                            Start selling your course today.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="p-4 bg-white">
                        <button
                            onClick={handleStartTrial}
                            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                            style={{ background: "#0e74ec" }}   >
                            Start Free Trial <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            )}

            {/* FLOATING BUTTON */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative w-16 h-16 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center font-extrabold text-3xl ${isOpen ? "bg-slate-800 text-white" : "bg-yellow-500 text-white"

                    }`} style={{ fontWeight: "bolder", fontSize: 26, fontFamily: "Arial, sans-serif", background: "linear-gradient(135deg, #0e74ec, #0284c7)" }}>

                7
            </button>
        </div>
    );
};

export default FreeTrialWidget;