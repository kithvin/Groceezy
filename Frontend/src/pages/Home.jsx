import React from "react";

import MainBanner from "../components/MainBanner"; // MainBanner component
import Categories from "../components/Categories"; // Categories component
import BestSeller from "../components/BestSeller"; // Categories BestSeller

function Home() {
  return (
    <div className="mt-10">
      
      {/* Main banner section */}
      <MainBanner />

      {/* Categories section */}
      <Categories/>

      {/* BestSeller section */}
      <BestSeller/>
    </div>
  );
}

export default Home;
