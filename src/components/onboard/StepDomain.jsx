import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import ErrorText from "./ErrorText";
import api from "../../shared/api";

export default function StepDomain({
  form,
  update,
  errors,
}) {
  const [checking, setChecking] = useState(false);
  const [available, setAvailable] = useState(null);

  useEffect(() => {
    if (!form.subdomain) {
      setAvailable(null);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setChecking(true);

        const { data } = await api.get(
          `/subdomain-available?subdomain=${form.subdomain}.everlinesys.com`
        );

        setAvailable(data.available);
      } catch (err) {
        setAvailable(false);
      } finally {
        setChecking(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [form.subdomain]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">
          Claim your subdomain
        </h2>

        <p className="text-sm text-slate-500">
          Your students will access courses using this URL.
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
                  .replace(/[^a-z0-9-]/g, "")
              )
            }
          />

          <div className="bg-slate-100 border-l border-slate-200 px-4 py-3.5 text-sm font-medium text-slate-500">
            .eduline.app
          </div>
        </div>

        {checking && (
          <p className="text-xs text-slate-500 mt-2">
            Checking availability...
          </p>
        )}

        {!checking && available === true && (
          <p className="text-xs text-green-600 mt-2">
            ✓ Subdomain available
          </p>
        )}

        {!checking && available === false && (
          <p className="text-xs text-red-600 mt-2">
            ✗ Subdomain already taken
          </p>
        )}

        {errors.subdomain && (
          <ErrorText text={errors.subdomain} />
        )}

        <div className="flex items-center gap-2 text-sm text-slate-500 mt-4 bg-blue-50 border border-blue-100 p-3 rounded-xl">
          <Globe
            size={15}
            className="text-blue-600"
          />

          <span>
            https://
            {form.subdomain || "youracademy"}
            .eduline.app
          </span>
        </div>
      </div>
    </div>
  );
}