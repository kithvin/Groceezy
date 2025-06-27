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

      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24">
        <h1 className="text-3xl text-gray-600 md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15">
          Fresh Groceries, Big Savings – Shop Smart, Save More!
        </h1>

        {/* Buttons */}

        <div className="flex items-center mt-15 font-medium">
          
          {/* Shop Now button */}

          <Link
            to={"/products"}
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer"
          >
            Shop Now
            <img
              className="md:hidden transition group-focus:translate-x-1"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>

          {/* Explore Deals button */} 
          {/* className remove hiddden for view exp,ore deals view in mobile */} 
          <Link
            to={"/deals"} 
            className="group md:flex items-center gap-2 px-9 py-3 cursor-pointer"
          > 
            Explore Deals
            <img
              className="transition group-hover:translate-x-1"
              src={assets.black_arrow_icon}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;

