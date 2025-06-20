import React from "react";
import { assets } from "../assets/assets"; // Import image assets
import { useAppContext } from "../context/AppContext"; // Import global app context for cart handling and currency

// ProductCard Component
const ProductCard = ({ product }) => {
  // Destructuring values/functions from global app context
  const { currency, addToCart, removeFromCart, cartItems, navigate } =
    useAppContext();

  // Only render product card if product data is available
  return (
    product && (
      <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full">
        {/* Product Image */}
        <div
          onClick={() => {
            navigate(
              `/products/${product.category.toLowerCase()}/${product._id}`
            );
            scrollTo(0, 0);
          }}
          className="group cursor-pointer flex items-center justify-center px-2"
        >
          <img
            className="group-hover:scale-105 transition max-w-26 md:max-w-36"
            src={product.image[0]} // Show first image from product's image array
            alt={product.name}
          />
        </div>

        {/* Product Info Section */}
        <div className="text-gray-500/60 text-sm">
          <p>{product.category}</p> {/* Product Category */}
          {/* Product Name */}
          <p className="text-gray-700 font-medium text-lg truncate w-full">
            {product.name}
          </p>
          {/* Static Star Ratings */}
          <div className="flex items-center gap-0.5">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  className="md:w-3.5 w3"
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon} // Fill first 4 stars as active
                  alt="star"
                />
              ))}
            <p>(4)</p> {/* Hardcoded rating count */}
          </div>
          {/* Price and Cart Controls */}
          <div className="flex items-end justify-between mt-3">
            {/* Offer Price and Original Price */}
            <p className="md:text-xl text-base font-medium text-primary">
              {currency}{product.offerPrice}{" "}
              <span className="text-gray-500/60 md:text-sm text-xs line-through">
                {currency}{product.price}
              </span>
            </p>

            {/* Add to Cart / Quantity Controls */}
            <div onClick={(e) => e.stopPropagation()} className="text-primary">
              {!cartItems[product._id] ? (
                <button
                  className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 md:w-[80px] w-[64px] h-[34px] rounded cursor-pointer"
                  onClick={() => addToCart(product._id)} // Add product to cart
                >
                  <img src={assets.cart_icon} alt="cart_icon" />
                  Add
                </button>
              ) : (
                // If product is already in the cart, show quantity control
                <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary/25 rounded select-none">
                  {/* Decrease quantity */}
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    -
                  </button>

                  {/* Show current item count in cart */}
                  <span className="w-5 text-center">
                    {cartItems[product._id]}
                  </span>

                  {/* Increase quantity */}
                  <button
                    onClick={() => addToCart(product._id)}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;
