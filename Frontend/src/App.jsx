import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-blue-200 to-pink-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-xl w-full text-center border border-blue-100">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-6">
          Tailwind CSS Works!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This beautifully styled page is a proof that Tailwind is ready to
          build your UI. Explore components, try out colors, and build something
          awesome.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition-transform hover:scale-105 font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
