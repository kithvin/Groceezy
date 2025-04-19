import React from "react";
import Navbar from "./components/Navbar"; // Navbar component
import { Route, Routes, useLocation } from "react-router-dom"; // Routing tools
import Home from "./pages/Home"; // Home page
import { Toaster } from "react-hot-toast"; // Import Toaster for showing notifications
import Footer from "./components/Footer"; // Footer component
import { useAppContext } from "./context/AppContext"; // AppContext component
import Login from "./components/Login"; // Login component
import AllProducts from "./pages/AllProducts"; // All Products component
import ProductCategory from "./pages/ProductCategory"; // Product Category component
import ProductDetails from "./pages/ProductDetails"; // Product Details component

function App() {
  // Check if the current path includes "seller"
  const isSellerPath = useLocation().pathname.includes("seller");

  // Access context value to determine whether to show the user login modal
  const {showUserLogin} =useAppContext();
  return (
    <div>
      {/* Only show Navbar if not on seller path */}
      {isSellerPath ? null : <Navbar />}

      {/* Conditionally render the login modal if showUserLogin is true */}
      {showUserLogin ? <Login/> : null}

      {/* Display toast notifications */}
      <Toaster />

      {/* Apply padding to content unless on seller path */}
      <div
        className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"} `}
      >
        <Routes>
          
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* All Products route */}
          <Route path="/products" element={<AllProducts />} />

          {/* Product Category route */}
          <Route path="/products/:category" element={<ProductCategory />} />

          {/* Product Details route */}
          <Route path="/products/:category/:id" element={<ProductDetails />} />

        </Routes>
      </div>

      {/* Render Footer only if the route is not a seller route */}
      {!isSellerPath && <Footer />}
    </div>
  );
}

export default App;
