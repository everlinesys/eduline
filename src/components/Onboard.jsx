import React, { useState } from "react";
import {
    ArrowRight,
    Globe,
    School,
    Phone,
    CheckCircle,
    AlertCircle
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Onboard() {

    const [form, setForm] = useState({
        phone: "",
        academy: "",
        type: "",
        subdomain: ""
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const update = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    // Basic validation
    const validate = () => {
        let newErrors = {};

        if (!form.phone || form.phone.length < 10) {
            newErrors.phone = "Enter a valid phone number";
        }

        if (!form.academy) {
            newErrors.academy = "Academy name is required";
        }

        if (!form.type) {
            newErrors.type = "Select institute type";
        }

        if (!form.subdomain) {
            newErrors.subdomain = "Choose a subdomain";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const createAcademy = async () => {

        if (!validate()) return;

        setLoading(true);

        const payload = { ...form };

        console.log("CREATE ACADEMY:", payload);

        // simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);

        /*
        fetch("/api/create-academy", {
          method: "POST",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(payload)
        })
        */
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-black flex flex-col items-center px-6">

            <Navbar />

            <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-10 mt-32">

                {!submitted ? (
                    <>
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-semibold mb-2">
                                Create Your Eduline Academy
                            </h1>

                            <p className="text-gray-500">
                                Launch your branded teaching platform in minutes.
                            </p>
                        </div>

                        <div className="space-y-6">

                            {/* PHONE */}
                            <div>
                                <label className="text-sm text-gray-500">
                                    Phone Number
                                </label>

                                <div className="flex items-center border rounded-lg mt-1 px-3">
                                    <Phone size={16} className="text-gray-400" />
                                    <input
                                        className="w-full p-3 outline-none"
                                        placeholder="+91 9876543210"
                                        value={form.phone}
                                        onChange={(e) => update("phone", e.target.value)}
                                    />
                                </div>

                                {errors.phone && (
                                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                        <AlertCircle size={14} /> {errors.phone}
                                    </p>
                                )}
                            </div>

                            {/* ACADEMY */}
                            <div>
                                <label className="text-sm text-gray-500">
                                    Academy Name
                                </label>

                                <div className="flex items-center border rounded-lg mt-1 px-3">
                                    <School size={16} className="text-gray-400" />
                                    <input
                                        className="w-full p-3 outline-none"
                                        placeholder="Bright Future Academy"
                                        value={form.academy}
                                        onChange={(e) => update("academy", e.target.value)}
                                    />
                                </div>

                                {errors.academy && (
                                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                        <AlertCircle size={14} /> {errors.academy}
                                    </p>
                                )}
                            </div>

                            {/* TYPE */}
                            <div>
                                <label className="text-sm text-gray-500">
                                    Type of Institute
                                </label>

                                <select
                                    className="w-full border rounded-lg p-3 mt-1 outline-none"
                                    value={form.type}
                                    onChange={(e) => update("type", e.target.value)}
                                >
                                    <option value="">Select type</option>
                                    <option value="tuition">Tuition Center</option>
                                    <option value="coaching">Coaching Institute</option>
                                    <option value="school">School</option>
                                    <option value="college">College</option>
                                    <option value="individual">Individual Teacher</option>
                                </select>

                                {errors.type && (
                                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                        <AlertCircle size={14} /> {errors.type}
                                    </p>
                                )}
                            </div>

                            {/* SUBDOMAIN */}
                            <div>
                                <label className="text-sm text-gray-500">
                                    Academy URL
                                </label>

                                <div className="flex items-center border rounded-lg overflow-hidden mt-1">

                                    <input
                                        className="flex-1 p-3 outline-none"
                                        placeholder="youracademy"
                                        value={form.subdomain}
                                        onChange={(e) => update("subdomain", e.target.value)}
                                    />

                                    <div className="bg-gray-100 px-4 text-sm">
                                        .eduline.com
                                    </div>

                                </div>

                                {errors.subdomain && (
                                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                        <AlertCircle size={14} /> {errors.subdomain}
                                    </p>
                                )}

                                <div className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                                    <Globe size={16} />
                                    Preview:
                                    <span className="text-blue-600">
                                        https://{form.subdomain || "youracademy"}.eduline.com
                                    </span>
                                </div>
                            </div>

                            {/* SUBMIT */}
                            <button
                                onClick={createAcademy}
                                disabled={loading}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
                            >
                                {loading ? "Creating Academy..." : "Create My Academy"}
                                {!loading && <ArrowRight size={18} />}
                            </button>

                        </div>
                    </>
                ) : (

                    /* SUCCESS SCREEN */

                    <div className="text-center py-10 space-y-6">

                        <CheckCircle className="mx-auto text-green-500" size={60} />

                        <h2 className="text-2xl font-semibold">
                            Your academy is being created
                        </h2>

                        <p className="text-gray-500 max-w-sm mx-auto">
                            Our team is setting up your Eduline platform.
                            We will notify you soon with your login details.
                        </p>

                    </div>

                )}

            </div>
            <Footer />
        </div>
    );
}