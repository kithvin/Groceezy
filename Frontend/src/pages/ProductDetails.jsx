import React, { useEffect, useState } from "react"; // Import React and hooks
import { useAppContext } from "../context/AppContext"; // Access global app context
import { Link, useParams } from "react-router-dom"; // For navigation and fetching URL params
import { assets } from "../assets/assets"; // Import image assets 
import ProductCard from "../components/ProductCard"; // Import related product component

const ProductDetails = () => {
  const { products, navigate, currency, addToCart } = useAppContext(); // Get data and functions from context
  const { id } = useParams(); // Get product ID from URL

  const [relatedProducts, setRelatedProducts] = useState(); // State for related products
  const [thumbnail, setThumbnail] = useState(null); // State for the selected image thumbnail

  const product = products.find((item) => item._id === id); // Find the product by ID

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice(); // Copy products array
      productsCopy = productsCopy.filter(
        (item) => product.category === item.category // Filter related products by category
      );
      setRelatedProducts(productsCopy.slice(0, 5)); // Set the related products
    }
  }, [products, product]); // Re-run when products or product changes

  useEffect(() => {
    setThumbnail(product?.image[0] ? product.image[0] : null); // Set thumbnail to first image
  }, [product]); // Re-run when the product changes

  return (
    product && ( // Only show details if the product exists
      <div className="mt-12 ml-15">
        {/* Breadcrumb navigation */}
        <p>
          <Link to={"/"}>Home</Link> /
          <Link to={"/products"}>Products</Link> /
          <Link to={`/products/${product.category.toLowerCase()}`}>
            {" "}
            {product.category}
          </Link>{" "}
          /<span className="text-primary"> {product.name}</span>
        </p>

        {/* Product details */}
        <div className="flex flex-col md:flex-row gap-16 mt-4">
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              {/* Display product image thumbnails */}
              {product.image.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)} // Update thumbnail on click
                  className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>

            {/* Main product image */}
            <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
              <img src={thumbnail} alt="Selected product" />
            </div>
          </div>

          {/* Product description and actions */}
          <div className="text-sm w-full md:w-1/2">
            <h1 className="text-3xl font-medium">{product.name}</h1>

            {/* Rating section */}
            <div className="flex items-center gap-0.5 mt-1">
              {Array(5)
                .fill("") // Fill 5 stars
                .map((_, i) => (
                  <img
                    src={i < 4 ? assets.star_icon : assets.star_dull_icon} // Display full or dull stars
                    alt=""
                    className="md:w-4 w-3.5"
                  />
                ))}
              <p className="text-base ml-2">(4)</p> {/* Display rating */}
            </div>

            {/* Pricing */}
            <div className="mt-6">
              <p className="text-gray-500/70 line-through">
                MRP: {currency}
                {product.price} {/* Original price */}
              </p>
              <p className="text-2xl font-medium">
                MRP: {currency}
                {product.offerPrice} {/* Discounted price */}
              </p>
              <span className="text-gray-500/70">(inclusive of all taxes)</span>
            </div>

            {/* Product description */}
            <p className="text-base font-medium mt-6">About Product</p>
            <ul className="list-disc ml-4 text-gray-500/70">
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li> // List each product feature
              ))}
            </ul>

            {/* Buttons for adding to cart or buying */}
            <div className="flex items-center mt-10 gap-4 text-base">
              <button
                onClick={() => addToCart(product._id)} // Add to cart action
                className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  addToCart(product._id); // Add to cart
                  navigate("/cart"); // Navigate to the cart page
                }}
                className="w-full py-3.5 cursor-pointer font-medium bg-primary text-white hover:bg-primary-dull transition"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>

        {/* Related products section */}
        <div className="flex flex-col items-center mt-20">
          <div className="flex flex-col items-center w-max">
            <p className="text-2xl md:text-3xl font-semibold text-center mb-2">Related Products</p>
            <div className="w-20 h-0.5 bg-primary rounded-full mt-2"></div>
          </div>

          {/* Display related products */}
          <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-12 mt-8 justify-center">
            {relatedProducts?.length > 0 ? (
              relatedProducts
                .filter((product) => product.inStock) // Filter in-stock products
                .map((product, index) => (
                  <ProductCard key={index} product={product} /> // Display product card
                ))
            ) : (
              <p className="text-center">
                No products found or still loading...{" "}

                {/* Display message if no related products */}

              </p>
            )}
          </div>

          {/* Button to see more products */}
          
          <button
            onClick={() => {
              navigate("/products"); // Navigate to products page
              scrollTo(0, 0); // Scroll to top
            }}
            className="mx-auto cursor-pointer px-12 my-16 py-2.5 border rounded text-primary hover:bg-primary/10 transition"
          >
            See more
          </button>
        </div>
      </div>
    )
  );
};

export default ProductDetails; // Export the component
