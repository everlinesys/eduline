import { Check, ArrowRight } from "lucide-react";

export default function Platform() {
  return (
    <section className="md:px-30 py-32 bg-slate-50/50" id="Platform">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            A complete <span className="text-blue-600">teaching ecosystem.</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            From back-office management to the front-row student experience, 
            we've built everything you need to scale.
          </p>
        </div>

        {/* ===== EDUCATOR DASHBOARD (Image Right) ===== */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-700 uppercase bg-blue-100 rounded-full">
              For Educators
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              Manage your academy with <br /> surgical precision.
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              A command center designed for growth. Monitor your revenue, 
              manage thousands of students, and build courses without touching code.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Drag-and-drop Course Builder",
                "Real-time Revenue Analytics",
                "Automated Student Onboarding",
                "Live Class Coordination",
                "Bulk Email Broadcasts",
                "Custom Domain Mapping"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <Check className="text-white" size={12} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative overflow-hidden rounded-2xl border border-slate-200 shadow-2xl bg-white">
            {/* Decorative Background Glow */}
            <div className="absolute -inset-10 bg-blue-200/40 rounded-full blur-3xl opacity-50"></div>
            
            {/* Browser Window UI */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400"
                alt="Educator Analytics Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* ===== STUDENT EXPERIENCE (Image Left) ===== */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-10 bg-blue-200/40 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-300"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                <div className="w-3 h-3 rounded-full bg-green-300"></div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400"
                alt="Student Learning Interface"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-700 uppercase bg-blue-100 rounded-full">
              For Students
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              A distraction-free <br /> learning environment.
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              We focus on the UX so your students can focus on the content. 
              Built for high retention and seamless progress across all devices.
            </p>

            <ul className="space-y-4">
              {[
                "Modern Video Player with Speed & Quality Control",
                "Mobile-Optimized Learning Portal",
                "Interactive Quizzes & Assignments",
                "Instant Certificate Generation",
                "Resource Library (PDFs, Assets)",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
                  <Check className="text-blue-600 mt-1" size={20} />
                  <div>
                    <span className="text-slate-900 font-bold block">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}