import React from "react";
import { assets, features } from "../assets/assets"; // Import images and feature data

const BottomBanner = () => {
  return (
    <div className="scale-[0.95] relative">
      {" "}
      {/* Slight zoom effect on the whole section */}
      {/* Desktop banner image */}
      <div className="relative mt-12 md:mt-24">
        <img
          src={assets.bottom_banner_image}
          alt="banner"
          className="w-full hidden md:block relative" // Show only on medium and large screens
        />
      </div>
      {/* Mobile banner image */}
      <img
        src={assets.bottom_banner_image_sm}
        alt="banner"
        className="w-full md:hidden relative"
      />
      {/* Text and features on top of the image */}
      <div className="absolute inset-0 flex flex-col items-center md:items-end justify-start md:justify-center pt-5 md:pt-0 px-4 md:px-0 md:pr-24">
        <div className="bg-white/80 md:bg-transparent p-10 md:p-0 rounded-lg md:rounded-none">
          {/* Section title */}
          <h1 className="text-2xl md:text-4xl font-semibold text-primary mb-4 md:mb-8 text-center md:text-left">
            Why We Are Your Best Pick?
          </h1>

          {/* Loop through each feature and show it */}
          <div className="space-y-4 md:space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 md:gap-4">
                {/* Feature icon */}
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 md:w-11 flex-shrink-0"
                />
                <div>
                  {/* Feature title */}
                  <h3 className="text-base md:text-xl font-semibold leading-tight">
                    {feature.title}
                  </h3>
                  {/* Feature description */}
                  <p className="text-gray-600 md:text-gray-500/70 text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
