"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example: Hardcoded credentials (replace with your real authentication logic)
    const hardcodedEmail = "user@ismis.com";
    const hardcodedPassword = "password123";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      // Set token in localStorage after successful login
      localStorage.setItem("token", "some-auth-token");

      // Redirect to the dashboard
      router.push("/dashboard");
    } else {
      setErrorMessage("Invalid credentials. Please try again.");
    }
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
      {/* Login Frame */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        {/* Logo Placeholder */}
        <div className="mb-6">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-32 object-contain"
          />
        </div>

        {/* Login Form */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        {/* Forgot Password & Sign Up Links */}
        <div className="mt-4 flex justify-between text-sm">
          <a href="/forgot-password" className="text-green-600 hover:text-green-700">
            Forgot Password?
          </a>
          <a href="/signup" className="text-blue-600 hover:text-blue-700">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
