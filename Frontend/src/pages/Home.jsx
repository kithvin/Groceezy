import React from "react";

import MainBanner from "../components/MainBanner"; // MainBanner component
import Categories from "../components/Categories"; // Categories component

function Home() {
  return (
    <div className="mt-10">
      
      {/* Main banner section */}
      <MainBanner />

      {/* Categories section */}
      <Categories/>
    </div>
  );
}

export default Home;
