import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom"; // For navigation links

// Main banner section
const MainBanner = () => {
  return (
    <div className="relative">
      {/* Desktop banner image */}

      <div className="scale-[0.95]">
        <img
          src={assets.main_banner_bg}
          alt="banner"
          className="w-full hidden md:block"
        />
      </div>

      {/* Mobile banner image */}

      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden"
      />

      {/* Text and buttons over banner */}
    
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-16 md:pb-0 px-4 md:pl-18 lg:pl-24 ">
        <h1 className="text-3xl text-stone-900 md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15">
          Fresh Groceries, Big Savings – Shop Smart, Save More!
        </h1>

        {/* Buttons */}
        <div className="mt-2">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 sm:mt-10 sm:w-auto">
          {/* Shop Now button */}
          <Link
            to={"/products"}
            className="w-60 sm:w-auto mx-auto text-center group flex justify-center gap-2 px-5 sm:px-7 md:px-9 py-3 bg-green-500 hover:bg-green-600 transition-all duration-200 rounded-lg text-white cursor-pointer font-medium"
          >
            Shop Now
          </Link>

          {/* Explore Deals button */}
          <Link
            to={"/deals"}
            className="w-60 sm:w-auto mx-auto text-center group flex justify-center gap-2 px-5 sm:px-7 md:px-9 py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-200 rounded-lg text-white cursor-pointer font-medium"
          >
            Explore Deals
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
