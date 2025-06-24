// import React from "react";
// import { assets, features } from "../assets/assets";

// const BottomBanner = () => {
//   return (
//     <div className="relative mt-24">
//       <img
//         src={assets.bottom_banner_image}
//         alt="banner"
//         className="w-full hidden md:block"
//       />
//       <img
//         src={assets.bottom_banner_image_sm}
//         alt="banner"
//         className="w-full  md:hidden"
//       />
//       <div
//         className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center 
//       pt-16 md:pt-0 md:pr-24"
//       >
//         <div>
//           <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
//             Why We’re Your Best Pick ?
//           </h1>
//           {features.map((feature, index) => (
//             <div key={index} className="flex items-center gap-4 mb-2">
//               <img src={feature.icon} alt={feature.title} className="md:w-11 w-9"/>
//               <div>
//               <h3 className="text-lg md:text-xl font-semibold">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-500/70 text-xd md:text-sm">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BottomBanner;


import React from "react";
import { assets, features } from "../assets/assets"; // Import images and feature data

function BottomBanner() {
  return (
    <div className="scale-[0.95]"> {/* Slight zoom effect on the whole section */}
      
      {/* Desktop banner image */}

      <div className="relative mt-24">
        <img
          src={assets.bottom_banner_image}
          alt="banner"
          className="w-full hidden md:block" // Show only on medium and large screens
        />
      </div>

      {/* Mobile banner image */}

      <img
        src={assets.bottom_banner_image_sm}
        alt="banner"
        className="w-full md:hidden"
      />

      {/* Text and features on top of the image */}

      <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24">
        <div>

            {/* Section title */}

          <h1 className="text-2xl md:text-4xl font-semibold text-primary mb-8">
            Why We Are Your Best Pick ?
          </h1>

          {/* Loop through each feature and show it */}

          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 mt-6">

                {/* Feature icon */}

              <img
                src={feature.icon}
                alt={feature.title}
                className="md:w-11 w-9"
              />
              <div>

                {/* Feature title */}

                <h3 className="text-lg md:text-xl font-semibold">
                  {feature.title}
                </h3>

                {/* Feature description */}
                
                <p className="text-gray-500/70 text-xd md:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BottomBanner;




