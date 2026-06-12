import {
  Check,
  BookOpen,
  GraduationCap,
  Video,
  Award,
  FileText,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export default function Platform() {
  return (
    <section
      className="relative py-32 bg-slate-50 overflow-hidden border-b border-slate-100"
      id="Platform"
    >
      {/* Premium Ambient Light Flares */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-28">
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3.5
              py-1.5
              bg-emerald-50
              border
              border-emerald-100
              rounded-full
              mb-6
            "
          >
            <GraduationCap size={13} className="text-emerald-700" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
              LMS Ecosystem Core
            </span>
          </div>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-normal
              poppins
              tracking-tight
              leading-[1.15]
              text-slate-900
            "
          >
            Everything required to launch & <br />
            <span className="text-emerald-700  ">scale an online academy</span>
          </h2>

          <p className="mt-4 text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Consolidate your courses, metrics, certificates, payment structures, and 
            student environments under a singular white-labeled administrative layer.
          </p>
        </div>


        {/* --- FEATURE 1: EDUCATOR ARCHITECTURE --- */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
          
          <div className="lg:col-span-5 space-y-6">
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1
                bg-slate-100
                border
                border-slate-200
                rounded-full
              "
            >
              <BookOpen size={12} className="text-slate-600" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                Institutional Panel
              </span>
            </div>

            <h3 className="text-3xl font-bold tracking-tight text-slate-900">
              Manage curricula, student rosters, and revenue flows
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed">
              Build rich multi-tier courses, manage secure user accounts, coordinate 
              live interactive broadcasts, and keep accurate ledgers with an administrative 
              dashboard optimized for educational operators.
            </p>

            <div className="grid sm:grid-cols-2 gap-2.5 pt-4">
              {[
                "Advanced Course Builder",
                "Student Identity Management",
                "Granular Financial Logs",
                "Dedicated Subdomains",
                "Bulk Communications",
                "Native Live Classes",
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    flex
                    items-center
                    gap-2.5
                    bg-white
                    border
                    border-slate-200/60
                    rounded-xl
                    px-4
                    py-3
                    shadow-sm
                  "
                >
                  <Check size={14} className="text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span className="text-xs font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Window Wrapper */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[2rem] overflow-hidden p-3 shadow-md">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden">
              {/* Window Controls Decorator */}
              <div className="h-10 border-b border-slate-200/60 flex items-center px-4 gap-1.5 bg-slate-50">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="ml-auto text-[10px] font-medium text-slate-400 font-mono tracking-wide bg-white px-2 py-0.5 rounded border border-slate-200/50">
                  admin.eduline.io
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400"
                alt="Eduline Administration Dashboard View"
                className="w-full h-[380px] object-cover filter brightness-[0.98] contrast-[1.02]"
              />
            </div>
          </div>

        </div>


        {/* --- FEATURE 2: STUDENT EXPERIENCE --- */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
          
          {/* Environment Window Wrapper */}
          <div className="lg:col-span-7 order-2 lg:order-1 bg-white border border-slate-200 rounded-[2rem] overflow-hidden p-3 shadow-md">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden">
              <div className="h-10 border-b border-slate-200/60 flex items-center px-4 gap-1.5 bg-slate-50">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="ml-auto text-[10px] font-medium text-slate-400 font-mono tracking-wide bg-white px-2 py-0.5 rounded border border-slate-200/50">
                  learn.academy.io
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400"
                alt="Eduline Student Learning Hub interface View"
                className="w-full h-[380px] object-cover filter brightness-[0.98]"
              />
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1
                bg-slate-100
                border
                border-slate-200
                rounded-full
              "
            >
              <Video size={12} className="text-slate-600" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                Student Environment
              </span>
            </div>

            <h3 className="text-3xl font-bold tracking-tight text-slate-900">
              Fluid, distraction-free spaces built for retention
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed">
              Equip your cohort with zero-latency adaptive video playback modules, structured asset 
              cabinets, personal checkpoint indices, and responsive layouts across hardware profiles.
            </p>

            <div className="space-y-2.5 pt-2">
              {[
                { title: "Adaptive Stream Optimization", desc: "Granular bitrate switching and speed controls." },
                { title: "Asset Vault Architecture", desc: "Integrated runtime viewers for documentation and media." },
                { title: "Chronological Indexing", desc: "State preservation ensures students resume right where they left off." },
                { title: "Responsive Fluidity", desc: "Identical performance metrics on tablet, desktop, and mobile devices." }
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    bg-white
                    border
                    border-slate-200/60
                    rounded-2xl
                    p-4
                    shadow-sm
                  "
                >
                  <div className="text-xs font-bold text-slate-900">{item.title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>


        {/* --- BOTTOM BENTO MATRIX --- */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Bento Card 1 */}
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm group hover:border-slate-300 transition-all">
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center">
              <Award className="text-emerald-700" size={20} />
            </div>
            <h4 className="mt-6 text-lg font-bold text-slate-900">
              Verified Certification
            </h4>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Deploy automated secure certificate credentials featuring custom templates, cryptographic 
              hashes, and public verification routing records.
            </p>
          </div>

          {/* Bento Card 2 */}
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm group hover:border-slate-300 transition-all">
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center">
              <FileText className="text-emerald-700" size={20} />
            </div>
            <h4 className="mt-6 text-lg font-bold text-slate-900">
              Evaluations & Testing
            </h4>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Design comprehensive quiz configurations, specify grade limits, apply conditional progress 
              gates, and automate graduation workflows.
            </p>
          </div>

          {/* Bento Card 3: Deep Contrast Visual Anchor */}
          <div className="bg-[#04281c] text-white rounded-[2rem] p-8 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                <BarChart3 className="text-emerald-400" size={20} />
              </div>
              <h4 className="mt-6 text-lg font-bold">
                Operational Analytics
              </h4>
              <p className="mt-2 text-xs text-emerald-100/60 leading-relaxed">
                Analyze student engagement vectors, conversion margins, program velocity metrics, 
                and academy growth profiles via real-time data structures.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-emerald-400 group cursor-pointer">
              <span>View Data Capabilities</span>
              <ArrowRight size={14} className="stroke-[2.5] transition-transform group-hover:translate-x-1" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}