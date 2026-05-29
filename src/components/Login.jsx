import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import api from "../shared/api";

export default function Login() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function findPortal(e) {
        e.preventDefault();

        setError("");

        if (!email.trim()) {
            setError("Email is required");
            return;
        }

        try {
            setLoading(true);

            const res = await api.post(
                "/saas/find-portal",
                {
                    email,
                }
            );

            if (!res.data?.portal) {
                throw new Error(
                    "Portal not found"
                );
            }

            window.location.href =
                res.data.portal + "/login";

        } catch (err) {
            setError(
                err.response?.data?.message ||
                "No academy found for this email"
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-5 py-20">

            <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-xl p-8">

                <div className="text-center mb-8">

                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">

                        <Search size={24} />

                    </div>

                    <h1 className="text-2xl font-black text-slate-900">
                        Find Your Academy
                    </h1>

                    <p className="text-sm text-slate-500 mt-2">
                        Enter your email address and we'll
                        take you to your learning portal.
                    </p>

                </div>

                <form
                    onSubmit={findPortal}
                    className="space-y-5"
                >

                    <div>

                        <label className="text-sm font-semibold text-slate-700 block mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(
                                    e.target.value
                                )
                            }
                            placeholder="you@example.com"
                            className="w-full px-4 py-3.5 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        />

                        {error && (
                            <p className="text-red-500 text-sm mt-2">
                                {error}
                            </p>
                        )}

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                    >

                        {loading
                            ? "Searching..."
                            : "Find My Academy"}

                        {!loading && (
                            <ArrowRight
                                size={18}
                            />
                        )}

                    </button>

                </form>

                <div className="mt-6 text-center text-sm text-slate-500">

                    Are you an institution owner?

                    <a
                        href="/start"
                        className="ml-2 text-blue-600 font-semibold"
                    >
                        Create Academy
                    </a>

                </div>

            </div>

        </div>
    );
}