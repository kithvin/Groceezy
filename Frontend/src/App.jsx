import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import ExploreDeals from "./components/ExploreDeals";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";
import AllProducts from "./pages/AllProducts";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";

const App = () => {

  const isSellerPath = useLocation().pathname.includes("/seller");
  const {showUserLogin, isSeller} = useAppContext();
  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login/> : null}
      <Toaster />

      <div
        className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/deals" element={<ExploreDeals />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
