import {
  ShieldCheck,
  Zap,
  Palette,
  BarChart3,
  CreditCard,
  Video,
  Award,
} from "lucide-react";

const features = [
  {
    title: "Your Branding",
    desc: "Launch under your own name, colors, and domain. Students see only your brand — not ours.",
    subText: "Maintain full control over your customer experience with white-label settings.",
    icon: <Palette className="text-emerald-600" size={24} />,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=774&auto=format&fit=crop"
  },
  {
    title: "Anti-Piracy Protection",
    desc: "Secure video delivery, dynamic watermarking, and download protection built in.",
    subText: "Our multi-layered security ensures your intellectual property stays protected.",
    icon: <ShieldCheck className="text-emerald-600" size={24} />,
    image: "https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?q=80&w=871&auto=format&fit=crop"
  },
  {
    title: "Insightful Analytics",
    desc: "Track student progress, completion rates, and engagement in real time.",
    subText: "Deep-dive into student behavior to improve your course content and retention.",
    icon: <BarChart3 className="text-emerald-600" size={24} />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop"
  },
  {
    title: "Global Payments",
    desc: "Accept payments globally with integrated gateways like Stripe and PayPal.",
    subText: "Automated invoicing and multi-currency support for a worldwide audience.",
    icon: <CreditCard className="text-emerald-600" size={24} />,
    image: "https://images.unsplash.com/photo-1587906697341-bfbde76785c7?q=80&w=726&auto=format&fit=crop"
  },
];

export default function Features() {
  return (
    <section className="relative py-28 bg-white overflow-hidden" id="Solutions">
      
      {/* Background Hero Shape */}
      <div className="absolute -top-[5%] left-1/2 -translate-x-1/2 w-[140%] h-screen bg-emerald-600 rotate-[-6deg] shadow-2xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Heading Section */}
        <div className="mb-32 max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-emerald-200 uppercase bg-emerald-800/30 rounded-full backdrop-blur-md">
            Built for Scale
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
            Everything you need to run your
            <span className="block text-blue-800">teaching business.</span>
          </h2>
          <p className="text-xl text-emerald-50 leading-relaxed font-medium max-w-2xl">
            EduLine gives you the tools to launch, manage, and scale your own
            branded education platform — without relying on marketplaces.
          </p>
        </div>

        {/* Feature Rows */}
        <div className="flex flex-col gap-40">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Column with Glass Effect Icon */}
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white shadow-xl shadow-emerald-500/10 rounded-2xl border border-emerald-50">
                  {item.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-4xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-[3px] bg-emerald-500 rounded-full " />
                    <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest">
                      {item.subText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Column with Browser Window Effect */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  {/* Outer Glow */}
                  <div className="absolute -inset-6 bg-emerald-500/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                  
                  {/* Browser Frame */}
                  <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl border border-slate-100">
                    <div className="flex gap-1.5 mb-2 ml-4 mt-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-200"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-200"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-red-200"></div>
                    </div>
                    <div className="overflow-hidden rounded-[1.8rem]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition duration-1000 ease-in-out"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}