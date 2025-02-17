"use client";
import { useForm } from "react-hook-form";
import Link from 'next/link';

export default function ForgotPasswordPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Forgot Password Data:", data);
        // Later, you can send this data to your API
    };

    return (
        <div
            className="flex min-h-screen items-center justify-center"
            style={{
                backgroundImage: 'url(/ismisbg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Forgot Password Frame */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
                {/* Logo Placeholder */}
                <div className="mb-6">
                    <img
                        src="/logo.png" // Replace with your actual logo
                        alt="Logo"
                        className="w-full h-32 object-contain"
                    />
                </div>

                {/* Forgot Password Form */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Forgot Password</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Email Field */}
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: "Email is required" })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                    >
                        Reset Password
                    </button>
                </form>

                {/* Go back to Homepage */}
                <div className="mt-4 text-sm">
                    <Link href="/" className="text-blue-600 hover:text-blue-700">
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
}
