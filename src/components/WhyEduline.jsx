import {
  Check,
  X,
  ShieldCheck,
  DollarSign,
  Globe,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyEduline() {
  const points = [
    {
      title: "Your Own Brand & Domain",
      eduline: "Launch on your own domain with complete white-label branding",
      others: "Students remember the marketplace, not your brand",
    },
    {
      title: "100% Revenue Ownership",
      eduline: "Payments go directly to your account",
      others: "Commission fees and payout delays",
    },
    {
      title: "Professional LMS Website",
      eduline: "Dedicated academy built around your business",
      others: "Shared platform with thousands of instructors",
    },
    {
      title: "Student Relationship",
      eduline: "Own your student database and communication",
      others: "Platform controls the relationship",
    },
    {
      title: "Certificates & Exams",
      eduline: "Built-in assessments and automated certificates",
      others: "Limited or paid add-ons",
    },
    {
      title: "Long-Term Growth",
      eduline: "Build a sustainable education brand",
      others: "Depend on marketplace algorithms",
    },
  ];

  return (
    <section
      className="relative py-28 bg-[#f7faf8] overflow-hidden"
      id="WhyEduline"
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

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-emerald-200/30 blur-3xl rounded-full" />

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
            <ShieldCheck size={14} />

            <span className="text-xs font-black uppercase tracking-widest">
              Why Eduline
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
            Stop Building
            <span className="block text-emerald-600">
              Someone Else's Business
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
            Marketplaces grow when your students enroll.
            Eduline helps you build your own education brand,
            audience and long-term revenue.
          </p>

        </div>

        {/* Top Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-16">

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
            <Globe className="text-emerald-600" size={40} />

            <h3 className="mt-5 text-2xl font-black">
              Your Domain
            </h3>

            <p className="mt-3 text-slate-600">
              academy.yourbrand.com
            </p>

          </div>

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
            <DollarSign className="text-emerald-600" size={40} />

            <h3 className="mt-5 text-2xl font-black">
              Your Revenue
            </h3>

            <p className="mt-3 text-slate-600">
              Direct payouts without commissions
            </p>

          </div>

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
            <Users className="text-emerald-600" size={40} />

            <h3 className="mt-5 text-2xl font-black">
              Your Students
            </h3>

            <p className="mt-3 text-slate-600">
              Own your audience and relationships
            </p>

          </div>

        </div>

        {/* Comparison */}

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
              grid
              grid-cols-3
              bg-slate-900
              text-white
              font-black
            "
          >
            <div className="p-5 border-r border-slate-700">
              Feature
            </div>

            <div className="p-5 text-emerald-400 border-r border-slate-700">
              Eduline
            </div>

            <div className="p-5 text-slate-400">
              Marketplaces
            </div>
          </div>

          {points.map((item, i) => (
            <div
              key={i}
              className="
                grid
                grid-cols-1
                md:grid-cols-3
                border-t
                border-slate-200
              "
            >

              <div className="p-6 font-black text-slate-900">
                {item.title}
              </div>

              <div
                className="
                  p-6
                  flex
                  items-start
                  gap-3
                  text-emerald-700
                  font-medium
                "
              >
                <Check
                  size={18}
                  className="mt-1 shrink-0"
                />

                <span>{item.eduline}</span>
              </div>

              <div
                className="
                  p-6
                  flex
                  items-start
                  gap-3
                  text-slate-500
                "
              >
                <X
                  size={18}
                  className="mt-1 shrink-0"
                />

                <span>{item.others}</span>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-16">

          <div
            className="
              bg-emerald-500
              border-2
              border-slate-900
              rounded-[32px]
              p-8
              md:p-10
            "
          >

            <div
              className="
                flex
                flex-col
                lg:flex-row
                items-center
                justify-between
                gap-8
              "
            >

              <div>

                <Award size={42} />

                <h3 className="mt-5 text-3xl md:text-4xl font-black text-slate-900">
                  Build Your Own Academy,
                  Not A Marketplace Profile
                </h3>

                <p className="mt-4 text-slate-800 text-lg">
                  Create an education business you truly own.
                </p>

              </div>

              <Link
                to="/onboard"
                className="
                  bg-white
                  border-2
                  border-slate-900
                  rounded-2xl
                  px-8
                  py-4
                  font-black
                  flex
                  items-center
                  gap-3
                  whitespace-nowrap
                  shadow-[5px_5px_0_0_rgba(15,23,42,1)]
                  hover:translate-x-1
                  hover:translate-y-1
                  hover:shadow-none
                  transition-all
                "
              >
                Start Free
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}