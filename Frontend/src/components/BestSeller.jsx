import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

// BestSeller section
function BestSeller() {
  const { products } = useAppContext(); // Get products from context
  return (
    <div className="mt-16 px-4 md:px-20 lg:px-36">
      
      {/* Section title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Best Sellers
      </h2>

    {/* Product grid */}
      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-6 lg:grid-cols-5 mt-6 justify-center">
        {products
          .filter((product) => product.inStock) // Only in-stock products
          .slice(0, 5)
          .map((product, index) => (
            <div key={index} className="flex justify-center">
              <ProductCard key={index} product={product} /> {/* Show product card */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default BestSeller;

