import {
  Palette,
  Lock,
  BarChart3,
  CreditCard,
  Zap,
  ShieldCheck,
  BookOpen,
  Award,
  Users,
  FileText,
} from "lucide-react";

export default function Features() {
  return (
    <section
      className="relative py-28 bg-[#f7faf8] overflow-hidden"
      id="Features"
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

        <div className="max-w-4xl mb-20">

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
            <ShieldCheck size={14} />

            <span className="text-xs font-black uppercase tracking-widest">
              Everything Included
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
            The Complete
            <span className="block text-emerald-600">
              LMS Business Platform
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              md:text-xl
              text-slate-600
              max-w-3xl
            "
          >
            More than just a course website. Eduline gives educators
            everything required to sell courses, manage students,
            conduct exams, issue certificates and grow an education business.
          </p>

        </div>

        {/* Bento Grid */}

        <div className="grid lg:grid-cols-12 gap-6">

          {/* HERO FEATURE */}

          <div
            className="
              lg:col-span-7
              bg-white
              border-2
              border-slate-900
              rounded-[32px]
              overflow-hidden
              shadow-[10px_10px_0_0_rgba(15,23,42,.08)]
            "
          >

            <div className="p-8 md:p-10">

              <div className="w-16 h-16 rounded-3xl bg-emerald-100 flex items-center justify-center mb-6">
                <BookOpen
                  className="text-emerald-600"
                  size={32}
                />
              </div>

              <h3 className="text-4xl font-black text-slate-900">
                Professional LMS Website
              </h3>

              <p className="mt-5 text-slate-600 text-lg leading-relaxed">
                Launch a complete learning platform under your own
                brand with course catalogs, lesson tracking,
                certificates, quizzes, study materials and
                student management.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="bg-emerald-50 rounded-2xl p-4">
                  <div className="font-black">Courses</div>
                  <div className="text-sm text-slate-600">
                    Unlimited lessons & modules
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-4">
                  <div className="font-black">Students</div>
                  <div className="text-sm text-slate-600">
                    Manage enrollments
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-4">
                  <div className="font-black">Progress</div>
                  <div className="text-sm text-slate-600">
                    Track completion rates
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-4">
                  <div className="font-black">Branding</div>
                  <div className="text-sm text-slate-600">
                    Custom domain & logo
                  </div>
                </div>

              </div>

            </div>

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
              alt=""
              className="w-full h-72 object-cover"
            />

          </div>

          {/* FEATURE 2 */}

          <div
            className="
              lg:col-span-5
              bg-emerald-500
              border-2
              border-slate-900
              rounded-[32px]
              p-8
              shadow-[10px_10px_0_0_rgba(15,23,42,.08)]
            "
          >

            <Award size={42} />

            <h3 className="mt-6 text-3xl font-black text-slate-900">
              Automated Certificates
            </h3>

            <p className="mt-4 text-slate-800 leading-relaxed">
              Generate professional certificates automatically
              when students complete courses or pass exams.
            </p>

            <div className="mt-8 space-y-3 text-sm font-bold">

              <div>✓ Unique Certificate Numbers</div>
              <div>✓ Verification Pages</div>
              <div>✓ Automatic Generation</div>
              <div>✓ Custom Designs</div>

            </div>

          </div>

          {/* FEATURE 3 */}

          <div
            className="
              lg:col-span-4
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
              size={40}
            />

            <h3 className="mt-6 text-2xl font-black">
              Exams & Assessments
            </h3>

            <p className="mt-4 text-slate-600">
              Create quizzes, tests and final exams with
              instant evaluation and score tracking.
            </p>
          </div>

          {/* FEATURE 4 */}

          <div
            className="
              lg:col-span-4
              bg-white
              border-2
              border-slate-900
              rounded-[32px]
              p-8
              shadow-[10px_10px_0_0_rgba(15,23,42,.08)]
            "
          >
            <CreditCard
              className="text-emerald-600"
              size={40}
            />

            <h3 className="mt-6 text-2xl font-black">
              Direct Payments
            </h3>

            <p className="mt-4 text-slate-600">
              Accept online payments and receive money
              directly into your bank account.
            </p>
          </div>

          {/* FEATURE 5 */}

          <div
            className="
              lg:col-span-4
              bg-white
              border-2
              border-slate-900
              rounded-[32px]
              p-8
              shadow-[10px_10px_0_0_rgba(15,23,42,.08)]
            "
          >
            <Users
              className="text-emerald-600"
              size={40}
            />

            <h3 className="mt-6 text-2xl font-black">
              Student Management
            </h3>

            <p className="mt-4 text-slate-600">
              View enrollments, monitor progress,
              communicate and manage learners efficiently.
            </p>
          </div>

          {/* FEATURE 6 */}

          <div
            className="
              lg:col-span-6
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

            <h3 className="mt-6 text-3xl font-black">
              Analytics Dashboard
            </h3>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Track revenue, enrollments, course performance,
              completion rates and student engagement from
              a centralized dashboard.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">

              <div>
                <div className="text-3xl font-black">100%</div>
                <div className="text-xs text-slate-400">
                  Revenue Visibility
                </div>
              </div>

              <div>
                <div className="text-3xl font-black">24/7</div>
                <div className="text-xs text-slate-400">
                  Monitoring
                </div>
              </div>

              <div>
                <div className="text-3xl font-black">Live</div>
                <div className="text-xs text-slate-400">
                  Insights
                </div>
              </div>

            </div>

          </div>

          {/* FEATURE 7 */}

          <div
            className="
              lg:col-span-6
              bg-white
              border-2
              border-slate-900
              rounded-[32px]
              p-8
              shadow-[10px_10px_0_0_rgba(15,23,42,.08)]
            "
          >
            <Palette
              className="text-emerald-600"
              size={42}
            />

            <h3 className="mt-6 text-3xl font-black">
              White Label Branding
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Use your own domain, logo, colors and identity.
              Build long-term trust with students while
              growing your independent education brand.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded-full bg-emerald-50 font-bold text-sm">
                Custom Domain
              </span>

              <span className="px-4 py-2 rounded-full bg-emerald-50 font-bold text-sm">
                Custom Logo
              </span>

              <span className="px-4 py-2 rounded-full bg-emerald-50 font-bold text-sm">
                Brand Colors
              </span>

              <span className="px-4 py-2 rounded-full bg-emerald-50 font-bold text-sm">
                Professional Identity
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}