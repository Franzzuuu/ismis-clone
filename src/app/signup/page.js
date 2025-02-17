"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
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
      {/* Sign Up Frame */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        {/* Logo Placeholder */}
        <div className="mb-6">
          <img
            src="/logo.png" // Replace with your actual logo
            alt="Logo"
            className="w-full h-32 object-contain"
          />
        </div>

        {/* Sign-Up Form */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h2>
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

          {/* Password Field */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Must be at least 6 characters" } })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account? Go back to Homepage */}
        <div className="mt-4 text-sm">
          <span className="text-gray-600">Already have an account? </span>
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
