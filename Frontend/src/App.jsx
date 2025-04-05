import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white flex flex-col justify-center items-center">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4">🔥 Tailwind CSS Advanced Test</h1>
        <p className="text-xl">Check out some advanced Tailwind CSS features in action!</p>
      </header>

      {/* Button Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Buttons</h2>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg shadow-lg">Primary Button</button>
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-lg shadow-lg">Success Button</button>
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-lg shadow-lg">Danger Button</button>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-8">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">Grid Item 1</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">Grid Item 2</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">Grid Item 3</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      {/* Card Section */}
      <div className="mt-10 w-full max-w-xs mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Card Title</h3>
          <p className="text-gray-700 mb-4">This is a simple card component with some text.</p>
          <button className="px-6 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-lg">
        <p>Created with ❤️ using Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
