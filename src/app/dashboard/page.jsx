import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-green-900 text-white flex flex-col p-4">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img src="/logo.png" alt="Logo" className="h-16" />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard">
          <span className="p-3 bg-green-900 rounded-lg hover:bg-green-700 cursor-pointer">Dashboard</span>
        </Link>
        <Link href="/profile">
          <span className="p-3 bg-green-900 rounded-lg hover:bg-green-700 cursor-pointer">Profile</span>
        </Link>
        <Link href="/settings">
          <span className="p-3 bg-green-900 rounded-lg hover:bg-green-700 cursor-pointer">Settings</span>
        </Link>
        <Link href="/logout">
          <span className="p-3 bg-red-900 rounded-lg hover:bg-red-600 cursor-pointer">Logout</span>
        </Link>
      </nav>
    </div>
  );
}
