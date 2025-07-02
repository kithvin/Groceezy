import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🌟 My Tailwind App</h1>
        <nav className="space-x-4">
          <a href="#" className="text-blue-600 hover:underline">Home</a>
          <a href="#" className="text-blue-600 hover:underline">About</a>
          <a href="#" className="text-blue-600 hover:underline">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Welcome!</h2>
          <p className="text-gray-600">
            This is a simple React component styled with Tailwind CSS. You can build responsive UIs quickly using utility-first classes.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Click Me
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4">
        <p>&copy; 2025 My Tailwind App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
