import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-xl border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Brand Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="EduLine Logo"
                        className="h-6 w-6 object-contain"
                    />

                    <span className="text-xl font-bold tracking-widest font-mono text-emerald-600">
                        EDULINE
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
                    <a href="#Platform" className="hover:text-emerald-600 transition-colors">Platform</a>
                    <a href="#Solutions" className="hover:text-emerald-600 transition-colors">Solutions</a>
                    <a href="#Pricing" className="hover:text-emerald-600 transition-colors">Pricing</a>

                    <div className="flex items-center gap-3 ml-4">
                        {/* <button className="text-slate-700 font-bold px-4 py-2 hover:text-emerald-600 transition-colors">
                            Login
                        </button> */}

                        <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-full hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-100 transition-all active:scale-95">
                            Start Building
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col p-6 gap-6 shadow-xl shadow-slate-200/50">
                    <a href="#" className="text-base font-semibold text-emerald-600" onClick={() => setIsOpen(false)}>Platform</a>
                    <a href="#" className="text-base font-semibold text-emerald-600" onClick={() => setIsOpen(false)}>Solutions</a>
                    <a href="#" className="text-base font-semibold text-emerald-600" onClick={() => setIsOpen(false)}>Pricing</a>

                    <hr className="border-slate-100" />

                    <div className="flex flex-col gap-3">
                        {/* <button className="w-full py-3 text-slate-100 bg-emerald-600 font-bold border border-slate-200 rounded-xl hover:bg-emerald-700 transition-colors">
                            Login
                        </button> */}

                        <button className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-100">
                            Start Building
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
