import {
  ShieldCheck,
  Smartphone,
  Palette,
  BarChart3,
  CreditCard,
  Zap,
  Lock,
} from "lucide-react";

const features = [
  {
    title: "Complete White-Label Authority",
    desc: "Educators shouldn't have to share their hard-earned students with a marketplace. Launch on your own domain with your logo.",
    subText: "Your students stay yours. No competing 'suggested courses' from other teachers.",
    icon: <Palette className="text-blue-600" size={24} />,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=774&auto=format&fit=crop"
  },
  {
    title: "Your Brand in Their Pocket",
    desc: "Offer a seamless mobile experience. A dedicated Android & iOS app allows students to learn offline and receive push notifications.",
    subText: "Boost course completion rates by 40% with mobile-first learning pathways.",
    icon: <Smartphone className="text-blue-600" size={24} />,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "No Downloads, No Screenshots",
    desc: "Educators fear content theft. We provide dynamic watermarking (student's email on screen) and encrypted video streaming.",
    subText: "Prevent screen recording and illegal downloads with our proprietary DRM tech.",
    icon: <Lock className="text-blue-600" size={24} />,
    image: "https://images.unsplash.com/flagged/photo-1560854350-13c0b47a3180"
  },
  {
    title: "Student Behavioral Insights",
    desc: "Identify exactly where students drop off. Track lesson heatmaps and quiz performance to improve your curriculum.",
    subText: "Data-driven teaching: know who is struggling before they ask for a refund.",
    icon: <BarChart3 className="text-blue-600" size={24} />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop"
  },
  {
    title: "Dedicated Student Mobile App",
    desc: "Your students get a branded Android & iOS app with offline access, push notifications, and instant updates.",
    subText: "Increase engagement and course completion with learning on the go.",
    icon: <Smartphone className="text-blue-600" size={24} />,
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1200"
  },
  {
    title: "Direct Payments to Your Bank",
    desc: "Receive course payments directly into your bank account within 24 hours. No marketplace delays or commission cuts.",
    subText: "You own your revenue stream — full control over pricing and payouts.",
    icon: <CreditCard className="text-blue-600" size={24} />,
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Live Classes & Doubt Sessions",
    desc: "Host live interactive classes, webinars, and doubt-solving sessions directly inside your platform.",
    subText: "Replace Zoom links with a fully integrated learning experience.",
    icon: <Zap className="text-blue-600" size={24} />,
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },


];

export default function Features() {
  return (
    <section className="relative py-28 bg-white overflow-hidden" id="Solutions">

      {/* Background Hero Shape */}
      <div className="absolute -top-[5%] left-1/2 -translate-x-1/2 w-[140%] h-[150vh] md:h-[150vh] bg-blue-600 rotate-[-4deg] shadow-2xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Main Heading Section */}
        <div className="mb-32 max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-200 uppercase bg-blue-800/40 rounded-full backdrop-blur-md border border-blue-400/20">
            Engineered for Professional Educators
          </div>
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-8  leading-[1.05]">
            Everything you need
            <span className="block text-slate-900 mt-2">to run your teaching business</span>
          </h2>
          <p className="text-xl text-blue-50 leading-relaxed font-medium max-w-2xl opacity-90">
            EduLine isn't just a host—it's your private campus. Everything you need to manage 100 or 100,000 students under your own brand name.
          </p>
        </div>

        {/* Feature Rows */}
        <div className="flex flex-col gap-48">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
            >
              {/* Text Column */}
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 shadow-xl shadow-blue-500/10 rounded-[2rem] border border-blue-100">
                  {item.icon}
                </div>

                <div className="space-y-6">
                  <h3 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>

                  {/* The "Why Educators Care" Highlight */}
                  <div className="flex items-start gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                    <Zap className="text-blue-500 shrink-0 mt-1" size={18} />
                    <p className="text-sm font-bold text-blue-700 uppercase tracking-wide leading-snug">
                      {item.subText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute -inset-8 bg-blue-500/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>

                  <div className="relative bg-white p-3 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100">
                    <div className="flex gap-2 mb-4 ml-6 mt-3">
                      <div className="w-3 h-3 rounded-full bg-green-200"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-200"></div>
                      <div className="w-3 h-3 rounded-full bg-red-200"></div>
                    </div>
                    <div className="overflow-hidden rounded-[2.2rem] bg-slate-50">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition duration-[2s] ease-in-out"
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