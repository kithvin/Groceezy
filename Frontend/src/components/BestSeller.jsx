import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

// BestSeller section
function BestSeller() {
  const { products } = useAppContext(); // Get products from context
  return (
    <div className="mt-16 px-4 md:px-8 lg:px-20">
      
      {/* Section title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Best Sellers
      </h2>

    {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products
          .filter((product) => product.inStock) // Only in-stock products
          .slice(0, 5)
          .map((product, index) => (
            <div key={index} className="flex justify-center">
              <ProductCard product={product} /> {/* Show product card */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default BestSeller;

