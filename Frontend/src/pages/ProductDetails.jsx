import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Link, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const { products, navigate, currency, addToCart } = useAppContext();
  const { id } = useParams();

  const [relatedProducts, setRelatedProducts] = useState();
  const [thumbnail, setThumbnail] = useState(null);

  const product = products.find((item) => item._id === id);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (item) => product.category === item.category
      );
      setRelatedProducts(productsCopy.slice(0, 5));
    }
  }, [products, product]);

  useEffect(() => {
    setThumbnail(product?.image[0] ? product.image[0] : null);
  }, [product]);

  return (
    product && (
      <div className="mt-8 px-4 sm:px-12">
        {" "}
        
        <p className="text-sm text-gray-600 flex flex-wrap gap-x-1">
          <Link to={"/"}>Home</Link> /<Link to={"/products"}>Products</Link> /
          <Link to={`/products/${product.category.toLowerCase()}`}>
            {product.category}
          </Link>
          /<span className="text-primary"> {product.name}</span>
        </p>
       
        <div className="flex flex-col md:flex-row gap-10 mt-4">
          
          <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
            <div className="flex flex-row sm:flex-col gap-3">
              {product.image.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className="border w-16 h-16 sm:w-24 sm:h-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
                >
                  {" "}
                  
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            
            <div className="border border-gray-500/30 w-60 h-60 sm:w-96 sm:h-96 rounded overflow-hidden">
              <img
                src={thumbnail}
                alt="Selected product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description & action buttons */}
          <div className="text-sm w-full md:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-medium">{product.name}</h1>{" "}
           
            {/* Rating section */}
            <div className="flex items-center gap-0.5 mt-1">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <img
                    key={i}
                    src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                    alt=""
                    className="md:w-4 w-3.5"
                  />
                ))}
              <p className="text-base ml-2">(4)</p>
            </div>
            {/* Price */}
            <div className="mt-6">
              <p className="text-gray-500/70 line-through">
                MRP: {currency}
                {product.price}
              </p>
              <p className="text-2xl font-medium">
                MRP: {currency}
                {product.offerPrice}
              </p>
              <span className="text-gray-500/70">(inclusive of all taxes)</span>
            </div>
            {/* About product */}
            <p className="text-lg sm:text-xl font-semibold mt-6">
              About Product
            </p>{" "}
            
            <ul className="list-disc ml-4 text-gray-500/70">
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
           
            <div className="flex flex-col sm:flex-row items-center mt-10 gap-4 text-base w-full">
              <button
                onClick={() => addToCart(product._id)}
                className="w-full py-3.5 font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition cursor-pointer"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  addToCart(product._id);
                  navigate("/cart");
                }}
                className="w-full py-3.5 font-medium bg-primary text-white hover:bg-primary-dull transition cursor-pointer"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
        {/* Related products */}
        <div className="flex flex-col items-center mt-20">
          <div className="flex flex-col items-center w-max">
            <p className="text-2xl md:text-3xl font-semibold text-center mb-2">
              Related Products
            </p>
            <div className="w-20 h-0.5 bg-primary rounded-full mt-2"></div>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-5 mt-8 justify-center">
            {relatedProducts?.length > 0 ? (
              relatedProducts
                .filter((product) => product.inStock)
                .map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))
            ) : (
              <p className="text-center">
                No products found or still loading...
              </p>
            )}
          </div>

          <button
            onClick={() => {
              navigate("/products");
              scrollTo(0, 0);
            }}
            className="mx-auto cursor-pointer px-12 my-14 py-2.5 border rounded text-primary hover:bg-primary/10 transition"
          >
            See more
          </button>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
