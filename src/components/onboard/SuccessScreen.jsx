import {
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function SuccessScreen({
  createdUrl,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-12 text-center max-w-xl mx-auto">

      <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">

        <CheckCircle size={40} />

      </div>

      <h2 className="text-3xl font-black mb-3 text-slate-900">
        Your Platform is Live!
      </h2>

      <p className="text-slate-500 text-sm mb-8">
        Your academy has been created successfully.
      </p>

      <a
        href={createdUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white text-sm font-bold"
      >
        Open Portal

        <ArrowRight size={16} />
      </a>

    </div>
  );
}