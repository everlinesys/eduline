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
      className="relative py-28 bg-[#f7faf8] overflow-hidden"
      id="Platform"
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

        <div className="text-center max-w-4xl mx-auto mb-24">

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
            <GraduationCap size={14} />

            <span className="text-xs font-black uppercase tracking-widest">
              Complete LMS Platform
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
            Everything Required To
            <span className="block text-emerald-600">
              Run An Online Academy
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              md:text-xl
              text-slate-600
              max-w-3xl
              mx-auto
            "
          >
            Courses, students, certificates, payments,
            analytics and learning experiences —
            all managed from one powerful platform.
          </p>

        </div>

        {/* Feature 1 */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          <div>

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                bg-emerald-50
                border-2
                border-slate-900
                rounded-full
                mb-6
              "
            >
              <BookOpen size={14} />

              <span className="text-xs font-black uppercase tracking-widest">
                Educator Dashboard
              </span>
            </div>

            <h3 className="text-4xl font-black text-slate-900 leading-tight">
              Manage Courses,
              Students & Revenue
            </h3>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Build courses, organize lessons, track student progress,
              monitor enrollments and manage payments from a
              centralized dashboard designed specifically for educators.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              {[
                "Course Builder",
                "Student Management",
                "Revenue Analytics",
                "Custom Domain",
                "Bulk Communication",
                "Live Classes",
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    flex
                    items-center
                    gap-3
                    bg-white
                    border-2
                    border-slate-900
                    rounded-2xl
                    px-4
                    py-3
                  "
                >
                  <Check
                    size={16}
                    className="text-emerald-600"
                  />

                  <span className="font-bold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          <div
            className="
              bg-white
              border-2
              border-slate-900
              rounded-[32px]
              overflow-hidden
              shadow-[10px_10px_0_0_rgba(15,23,42,.08)]
            "
          >

            <div
              className="
                h-14
                bg-slate-50
                border-b-2
                border-slate-900
                flex
                items-center
                px-5
                gap-2
              "
            >
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />

              <div className="ml-auto text-xs text-slate-500">
                Admin Dashboard
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400"
              alt=""
              className="w-full h-[420px] object-cover"
            />

          </div>

        </div>

        {/* Feature 2 */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          <div
            className="
              order-2
              lg:order-1
              bg-white
              border-2
              border-slate-900
              rounded-[32px]
              overflow-hidden
              shadow-[10px_10px_0_0_rgba(15,23,42,.08)]
            "
          >

            <div
              className="
                h-14
                bg-slate-50
                border-b-2
                border-slate-900
                flex
                items-center
                px-5
                gap-2
              "
            >
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />

              <div className="ml-auto text-xs text-slate-500">
                Student Learning Portal
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400"
              alt=""
              className="w-full h-[420px] object-cover"
            />

          </div>

          <div className="order-1 lg:order-2">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                bg-emerald-50
                border-2
                border-slate-900
                rounded-full
                mb-6
              "
            >
              <Video size={14} />

              <span className="text-xs font-black uppercase tracking-widest">
                Student Experience
              </span>
            </div>

            <h3 className="text-4xl font-black text-slate-900 leading-tight">
              Learning Experience
              Students Actually Enjoy
            </h3>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Deliver premium learning experiences with fast video
              streaming, study materials, progress tracking and
              distraction-free course navigation.
            </p>

            <div className="space-y-4 mt-10">

              {[
                {
                  title: "4K Video Streaming",
                  desc: "Speed controls, quality selection and adaptive streaming.",
                },
                {
                  title: "PDF Learning Materials",
                  desc: "Built-in reader for notes, guides and resources.",
                },
                {
                  title: "Progress Tracking",
                  desc: "Students always know where they are in the course.",
                },
                {
                  title: "Mobile Friendly",
                  desc: "Learn anywhere from any device.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    bg-white
                    border-2
                    border-slate-900
                    rounded-2xl
                    p-4
                  "
                >
                  <div className="font-black text-slate-900">
                    {item.title}
                  </div>

                  <div className="text-slate-600 mt-1">
                    {item.desc}
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom Bento */}

        <div className="grid md:grid-cols-3 gap-6">

          <div
            className="
              bg-white
              border-2
              border-slate-900
              rounded-[32px]
              p-8
              shadow-[10px_10px_0_0_rgba(15,23,42,.08)]
            "
          >
            <Award
              className="text-emerald-600"
              size={42}
            />

            <h3 className="mt-6 text-2xl font-black">
              Certificates
            </h3>

            <p className="mt-4 text-slate-600">
              Automatically generate professional certificates
              with verification pages and unique certificate numbers.
            </p>
          </div>

          <div
            className="
              bg-white
              border-2
              border-slate-900
              rounded-[32px]
              p-8
              shadow-[10px_10px_0_0_rgba(15,23,42,.08)]
            "
          >
            <FileText
              className="text-emerald-600"
              size={42}
            />

            <h3 className="mt-6 text-2xl font-black">
              Exams & Quizzes
            </h3>

            <p className="mt-4 text-slate-600">
              Conduct assessments, evaluate students and
              automate completion requirements.
            </p>
          </div>

          <div
            className="
              bg-slate-900
              text-white
              border-2
              border-slate-900
              rounded-[32px]
              p-8
            "
          >
            <BarChart3
              className="text-emerald-400"
              size={42}
            />

            <h3 className="mt-6 text-2xl font-black">
              Business Analytics
            </h3>

            <p className="mt-4 text-slate-300">
              Track enrollments, revenue, engagement,
              completion rates and academy growth in real time.
            </p>

            <div className="mt-8 flex items-center gap-3 text-emerald-400 font-black">
              Grow With Confidence
              <ArrowRight size={18} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}