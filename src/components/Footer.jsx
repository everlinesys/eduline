export default function Footer() {
  return (
    <footer className="bg-blue-50/40 border-t border-blue-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">

          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                EL
              </div>

              <span className="text-2xl font-bold text-slate-900 tracking-tight">
                EduLine
              </span>
            </div>

            <p className="text-slate-500 max-w-sm mb-6">
              The platform for educators to build, brand, and scale their own
              independent teaching business.
            </p>

            <p className="text-xs text-slate-400">
              A product by Everline Systems
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition">Your Branding</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">No Piracy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Live Classes</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Certificates</a></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition">Video Courses</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Payments</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Analytics</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Email Tools</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition">About</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-blue-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 EduLine. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
