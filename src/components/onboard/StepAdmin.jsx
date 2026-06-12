import {
  User,
  Mail,
  Lock,
} from "lucide-react";
import { useEffect, useState } from "react";
import ErrorText from "./ErrorText";
import Input from "./Input";
import api from "../../shared/api";

export default function StepAdmin({
  form,
  update,
  errors,
}) {
  const [checkingEmail, setCheckingEmail] =
    useState(false);

  const [emailAvailable, setEmailAvailable] =
    useState(null);

  useEffect(() => {
    if (!form.adminEmail) {
      setEmailAvailable(null);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setCheckingEmail(true);

        const { data } = await api.get(
          `/email-available?email=${encodeURIComponent(
            form.adminEmail
          )}`
        );

        setEmailAvailable(data.available);
      } catch (err) {
        setEmailAvailable(false);
      } finally {
        setCheckingEmail(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [form.adminEmail]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">
          Administrator Account
        </h2>

        <p className="text-sm text-slate-500">
          Create your primary admin login.
        </p>
      </div>

      <Input
        icon={<User size={16} />}
        label="Admin Name"
        value={form.adminName}
        onChange={(e) =>
          update("adminName", e.target.value)
        }
        placeholder="John Doe"
        error={errors.adminName}
      />

      <div>
        <Input
          icon={<Mail size={16} />}
          label="Admin Email"
          value={form.adminEmail}
          onChange={(e) =>
            update(
              "adminEmail",
              e.target.value.toLowerCase()
            )
          }
          placeholder="admin@example.com"
          error={errors.adminEmail}
        />

        {checkingEmail && (
          <p className="text-xs text-slate-500 mt-2">
            Checking email...
          </p>
        )}



        {!checkingEmail &&
          emailAvailable === false && (
            <p className="text-xs text-red-600 mt-2">
              ✗ Email already exists
            </p>
          )}
      </div>

      <Input
        icon={<Lock size={16} />}
        label="Password"
        type="password"
        value={form.password}
        onChange={(e) =>
          update("password", e.target.value)
        }
        placeholder="••••••••"
        error={errors.password}
      />
    </div>
  );
}