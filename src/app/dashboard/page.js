"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/"); // Redirect to login if not logged in
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-green-800 text-white p-4 flex items-center">
        {/* Logo */}
        <div className="mr-4">
          <img
            src="/logo.png" // Replace with your actual logo path
            alt="Logo"
            className="h-12"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      {/* Content Area */}
      <div className="flex min-h-screen items-center justify-center flex-col p-8">
        <h2 className="text-3xl font-bold text-green-800">Welcome to the Dashboard</h2>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            router.push("/"); // Redirect to login after logout
          }}
          className="mt-6 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
