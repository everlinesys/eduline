import {
  User,
  Mail,
  Lock,
} from "lucide-react";

import Input from "./Input";



export default function StepAdmin({
  form,
  update,
  errors,
}) {
  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-2xl font-bold mb-1">
          Administrator Account
        </h2>

        <p className="text-sm text-slate-500">
          Create your primary
          admin login.
        </p>
      </div>

      <Input
        icon={<User size={16} />}
        label="Admin Name"
        value={form.adminName}
        onChange={(e) =>
          update(
            "adminName",
            e.target.value
          )
        }
        placeholder="John Doe"
        error={errors.adminName}
      />

      <Input
        icon={<Mail size={16} />}
        label="Admin Email"
        value={form.adminEmail}
        onChange={(e) =>
          update(
            "adminEmail",
            e.target.value
          )
        }
        placeholder="admin@example.com"
        error={errors.adminEmail}
      />

      <Input
        icon={<Lock size={16} />}
        label="Password"
        type="password"
        value={form.password}
        onChange={(e) =>
          update(
            "password",
            e.target.value
          )
        }
        placeholder="••••••••"
        error={errors.password}
      />

    </div>
  );
}