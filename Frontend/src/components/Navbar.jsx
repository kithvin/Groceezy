import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      {/* Logo */}
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img className="h-10" src={assets.logo} alt="logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/" className="font-semibold hover:text-primary-dull mr-4">
          Home
        </NavLink>
        <NavLink to="/products" className="font-semibold hover:text-primary-dull mr-4">
          All Products
        </NavLink>
        <NavLink to="/contact" className="font-semibold hover:text-primary-dull mr-4">
          Contact
        </NavLink>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-36 bg-transparent outline-none placeholder-gray-500 text-center"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4 mr-1" />
        </div>

        {/* Cart Icon */}
        <div className="relative cursor-pointer">
          <img src={assets.nav_cart_icon} alt="cart" className="w-6 opacity-80" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>

        {/* Login Button */}
        <button className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full ml-4">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-6 sm:hidden">
        <div className="relative cursor-pointer">
          <img src={assets.nav_cart_icon} alt="cart" className="w-6 mr-2 opacity-80" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full mr-2">
            3
          </button>
        </div>
        <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
          <img src={assets.menu_icon} alt="menu" className="w-6 h-6 cursor-pointer" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-50 flex">
          <NavLink
            className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
            to="/"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
            to="/products"
            onClick={() => setOpen(false)}
          >
            All Products
          </NavLink>
          <NavLink
            to="/contact"
            className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
          <button
            onClick={() => setOpen(false)}
            className="w-full px-6 py-2.5 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm font-medium"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
