import React from "react";

import MainBanner from "../components/MainBanner"; // MainBanner Component
import Categories from "../components/Categories"; // Categories Component
import BestSeller from "../components/BestSeller"; // BestSeller Component
import BottomBanner from "../components/BottomBanner"; // BottomBanner Component
import NewsLetter from "../components/NewsLetter"; // NewsLetter Component

function Home() {
  return (
    <div className="mt-10">
      
      {/* Main banner section */}
      <MainBanner />

      {/* Categories section */}
      <Categories/>

      {/* BestSeller section */}
      <BestSeller/>

     {/* BottomBanner section */}
      <BottomBanner/>

    {/* NewsLetter section */}
      <NewsLetter/>
    </div>
  );
}

export default Home;
