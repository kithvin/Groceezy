import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ExploreDeals from "./components/ExploreDeals";
import Home from "./pages/Home";

const App = () => {

  const isSellerPath = useLocation().pathname.includes("/seller");

  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {isSellerPath ? null : <Navbar /> }
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/deals" element={<ExploreDeals />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
