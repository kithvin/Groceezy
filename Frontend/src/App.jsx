import React from "react";
import Navbar from "./components/Navbar"; // Navbar component
import { Route, Routes, useLocation } from "react-router-dom"; // Routing tools
import Home from "./pages/Home"; // Home page
import { Toaster } from "react-hot-toast"; // Import Toaster for showing notifications
import Footer from "./components/Footer"; // Footer component

function App() {
  // Check if the current path includes "seller"
  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div>
      {/* Only show Navbar if not on seller path */}
      {isSellerPath ? null : <Navbar />}

      {/* Display toast notifications */}
      <Toaster />

      {/* Apply padding to content unless on seller path */}
      <div
        className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"} `}
      >
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      {/* Render Footer only if the route is not a seller route */}
      {!isSellerPath && <Footer />}
    </div>
  );
}

export default App;
