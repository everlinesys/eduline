import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Globe,
  School,
  User
} from "lucide-react";

export default function Onboard() {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState(null);

  const [form, setForm] = useState({
    name: "",
    academy: "",
    subdomain: ""
  });

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const update = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  // Google login handler
  const handleCredentialResponse = (response) => {
    const token = response.credential;

    const payload = JSON.parse(
      atob(token.split(".")[1])
    );

    setUser(payload);
    setForm((f) => ({
      ...f,
      name: payload.name
    }));

    next();
  };

  useEffect(() => {
    if (step === 2 && window.google) {
      window.google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID",
        callback: handleCredentialResponse
      });

      window.google.accounts.id.renderButton(
        document.getElementById("googleButton"),
        {
          theme: "outline",
          size: "large",
          width: 280
        }
      );
    }
  }, [step]);

  const createAcademy = () => {
    const payload = {
      user,
      ...form
    };

    console.log("CREATE ACADEMY:", payload);

    // call backend here
    // fetch("/api/create-academy", {method:"POST", body:JSON.stringify(payload)})
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-6">

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-10">

        {/* Progress */}
        <div className="flex justify-between mb-10">
          {[1,2,3,4].map((s) => (
            <div
              key={s}
              className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium
              ${step >= s ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"}`}
            >
              {s}
            </div>
          ))}
        </div>

        {/* STEP 1 — Welcome */}
        {step === 1 && (
          <div className="text-center space-y-6">

            <Sparkles size={40} className="mx-auto text-blue-600"/>

            <h1 className="text-3xl font-semibold">
              Create Your Eduline Academy
            </h1>

            <p className="text-gray-500">
              Launch your own online course platform in minutes.
            </p>

            <button
              onClick={next}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto"
            >
              Get Started <ArrowRight size={18}/>
            </button>

          </div>
        )}

        {/* STEP 2 — Google Login */}
        {step === 2 && (
          <div className="text-center space-y-6">

            <h2 className="text-2xl font-semibold">
              Sign in to continue
            </h2>

            <p className="text-gray-500">
              Use Google to quickly create your account.
            </p>

            <div className="flex justify-center">
              <div id="googleButton"></div>
            </div>

            <button
              onClick={back}
              className="text-gray-500 flex items-center gap-2 mx-auto"
            >
              <ArrowLeft size={16}/> Back
            </button>

          </div>
        )}

        {/* STEP 3 — Academy Info */}
        {step === 3 && (
          <div className="space-y-6">

            <h2 className="text-2xl font-semibold">
              About your academy
            </h2>

            <div>

              <label className="text-sm text-gray-500">
                Your Name
              </label>

              <div className="flex items-center border rounded-lg mt-1 px-3">
                <User size={16} className="text-gray-400"/>
                <input
                  className="w-full p-3 outline-none"
                  value={form.name}
                  onChange={(e)=>update("name",e.target.value)}
                />
              </div>

            </div>

            <div>

              <label className="text-sm text-gray-500">
                Academy Name
              </label>

              <div className="flex items-center border rounded-lg mt-1 px-3">
                <School size={16} className="text-gray-400"/>
                <input
                  className="w-full p-3 outline-none"
                  placeholder="Example: Math Academy"
                  value={form.academy}
                  onChange={(e)=>update("academy",e.target.value)}
                />
              </div>

            </div>

            <div className="flex justify-between pt-4">

              <button
                onClick={back}
                className="flex items-center gap-2 text-gray-500"
              >
                <ArrowLeft size={16}/> Back
              </button>

              <button
                onClick={next}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
              >
                Continue <ArrowRight size={16}/>
              </button>

            </div>

          </div>
        )}

        {/* STEP 4 — Domain */}
        {step === 4 && (
          <div className="space-y-6">

            <h2 className="text-2xl font-semibold">
              Choose your academy URL
            </h2>

            <div className="flex items-center border rounded-lg overflow-hidden">

              <input
                className="flex-1 p-3 outline-none"
                placeholder="youracademy"
                value={form.subdomain}
                onChange={(e)=>update("subdomain",e.target.value)}
              />

              <div className="bg-gray-100 px-4 text-sm">
                .eduline.com
              </div>

            </div>

            <div className="text-sm text-gray-500 flex items-center gap-2">
              <Globe size={16}/>
              Preview:
              <span className="text-blue-600">
                https://{form.subdomain || "youracademy"}.eduline.com
              </span>
            </div>

            <div className="flex justify-between pt-4">

              <button
                onClick={back}
                className="flex items-center gap-2 text-gray-500"
              >
                <ArrowLeft size={16}/> Back
              </button>

              <button
                onClick={createAcademy}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
              >
                Launch Academy <CheckCircle size={18}/>
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}