export default function Sidebar() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-green-900 text-white flex flex-col items-center p-6">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="w-32 h-auto mb-6" />

        {/* Navigation */}
        <nav className="w-full">
          <ul className="space-y-2">
            <li>
              <a href="#" className="block p-3 rounded-md hover:bg-olive-600">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-md hover:bg-olive-600">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block p-3 rounded-md hover:bg-olive-600">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-black">Welcome to the Dashboard</h1>
      </main>
    </div>
  );
}
