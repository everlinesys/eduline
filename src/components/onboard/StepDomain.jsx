import { Globe } from "lucide-react";
import ErrorText from "./ErrorText";

export default function StepDomain({
  form,
  update,
  errors,
}) {
  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-2xl font-bold mb-1">
          Claim your subdomain
        </h2>

        <p className="text-sm text-slate-500">
          Your students will access
          courses using this URL.
        </p>
      </div>

      <div>

        <label className="text-sm font-semibold text-slate-700 mb-2 block">
          Choose Subdomain
        </label>

        <div className="flex items-center border border-slate-200 bg-slate-50 rounded-2xl overflow-hidden">

          <input
            className="flex-1 px-4 py-3.5 bg-transparent outline-none text-sm"
            placeholder="youracademy"
            value={form.subdomain}
            onChange={(e) =>
              update(
                "subdomain",
                e.target.value
                  .toLowerCase()
                  .replace(
                    /[^a-z0-9-]/g,
                    ""
                  )
              )
            }
          />

          <div className="bg-slate-100 border-l border-slate-200 px-4 py-3.5 text-sm font-medium text-slate-500">
            .eduline.app
          </div>

        </div>

        {errors.subdomain && (
          <ErrorText
            text={
              errors.subdomain
            }
          />
        )}

        <div className="flex items-center gap-2 text-sm text-slate-500 mt-4 bg-blue-50 border border-blue-100 p-3 rounded-xl">

          <Globe
            size={15}
            className="text-blue-600"
          />

          <span>
            https://
            {form.subdomain ||
              "youracademy"}
            .eduline.app
          </span>

        </div>

      </div>

    </div>
  );
}