const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-12">
      <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>
      <nav className="space-y-2">
        <a
          href="#"
          className="block px-4 text-xl py-2 rounded hover:bg-gray-700">
          Settings
        </a>
        <a
          href="#"
          className="block text-xl  px-4 py-2 rounded hover:bg-gray-700">
          Profile
        </a>
        <a
          href="#"
          className="block text-xl px-4 py-2 rounded hover:bg-gray-700">
          Logout
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;