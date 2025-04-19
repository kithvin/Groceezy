import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets, dummyAddress } from "../IMG/assets";

const Cart = () => {
  const {
    products, // List of available products
    currency, // Currency used for the price
    cartItems, // Cart items in the user's cart
    removeFromCart, // Function to remove an item from the cart
    getCartCount, // Function to get the total count of items in the cart
    updateCartItem, // Function to update the quantity of a cart item
    getCartAmount, // Function to get the total amount of the cart
  } = useAppContext();

  const navigate = useNavigate();
  const [cartArray, setCartArray] = useState([]); // Array to store cart products
  const [addresses, setAddresses] = useState(dummyAddress); // List of addresses
  const [showAddress, setShowAddress] = useState(false); // Flag to show address options
  const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]); // Selected address
  const [paymentoption, setPaymentoption] = useState("COD"); // Payment method (COD or Online)

  // Function to generate cart array from cartItems
  const getCart = () => {
    const tempArray = [];
    for (const key in cartItems) {
      const product = products.find((item) => item._id === key);
      if (product) {
        product.quantity = cartItems[key]; // Update product quantity from cart
        tempArray.push(product); // Add product to the array
      }
    }
    setCartArray(tempArray); // Set the cart array
  };

  // Function to handle placing the order
  const placeOrder = async () => {
    alert("Order placed!"); // Show a simple alert on order placement
  };

  // Effect to update the cart whenever products or cartItems change
  useEffect(() => {
    if (products.length > 0 && cartItems) {
      getCart(); // Update the cart array
    }
  }, [products, cartItems]);

  return products.length > 0 && cartItems ? (
    <div className="container mx-auto px-28">
      <div className="flex flex-col md:flex-row mt-16">
        <div className="flex-1 max-w-4xl">
          <h1 className="text-3xl font-medium mb-6">
            Shopping Cart{" "}
            <span className="text-sm text-primary">{getCartCount()}</span>
          </h1>

          {/* Product details header */}
          <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
            <p className="text-left">Product Details</p>
            <p className="text-center">Subtotal</p>
            <p className="text-center">Action</p>
          </div>

          {/* Display each item in the cart */}
          {cartArray.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3"
            >
              <div className="flex items-center md:gap-6 gap-3">
                <div
                  onClick={() => {
                    navigate(
                      `/products/${product.category.toLowerCase()}/${
                        product._id
                      }`
                    );
                    scrollTo(0, 0);
                  }}
                  className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded"
                >
                  <img
                    className="max-w-full h-full object-cover"
                    src={product.image[0]}
                    alt={product.name}
                  />
                </div>
                <div>
                  <p className="hidden md:block font-semibold">
                    {product.name}
                  </p>
                  <div className="font-normal text-gray-500/70">
                    <p>
                      Weight: <span>{product.weight || "N/A"}</span>
                    </p>
                    <div className="flex items-center">
                      <p>Qty:</p>
                      <select
                        onChange={(e) =>
                          updateCartItem(product._id, Number(e.target.value))
                        }
                        value={cartItems[product._id]}
                        className="outline-none ml-2"
                      >
                        {Array(
                          cartItems[product._id] > 9
                            ? cartItems[product._id]
                            : 9
                        )
                          .fill("")
                          .map((_, index) => (
                            <option key={index} value={index + 1}>
                              {index + 1}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center">
                {currency}
                {product.offerPrice * product.quantity}
              </p>
              <button
                onClick={() => removeFromCart(product._id)} // Remove product from cart
                className="cursor-pointer mx-auto"
              >
                <img
                  src={assets.remove_icon}
                  alt="remove"
                  className="inline-block w-6 h-6"
                />
              </button>
            </div>
          ))}

          {/* Continue shopping button */}
          <button
            onClick={() => {
              navigate("/products");
              scrollTo(0, 0);
            }}
            className="group cursor-pointer flex items-center mt-8 gap-2 text-primary font-medium"
          >
            <img
              className="group-hover:-translate-x-1 transition"
              src={assets.arrow_right_icon_colored}
              alt="arrow"
            />
            Continue Shopping
          </button>
        </div>

        {/* Order summary section */}
        <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
          <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
          <hr className="border-gray-300 my-5" />

          {/* Delivery address */}
          <div className="mb-6 relative">
            <p className="text-sm font-medium uppercase">Delivery Address</p>
            <div className="relative flex justify-between items-start mt-2">
              <p className="text-gray-500">
                {selectedAddress
                  ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}`
                  : "No address found"}
              </p>
              <button
                onClick={() => setShowAddress(!showAddress)} // Toggle address selection
                className="text-primary hover:underline cursor-pointer"
              >
                Change
              </button>
            </div>

            {/* Address options if "Change" is clicked */}
            {showAddress && (
              <div className="absolute top-20 bg-white border border-gray-300 text-sm w-full z-10">
                {addresses.map((address, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      setSelectedAddress(address); // Select a new address
                      setShowAddress(false);
                    }}
                    className="text-gray-500 p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {address.street}, {address.city}, {address.state},{" "}
                    {address.country}
                  </p>
                ))}
                <p
                  onClick={() => {
                    navigate("/add-address"); // Navigate to address adding page
                    setShowAddress(false);
                  }}
                  className="text-primary text-center cursor-pointer p-2 hover:bg-primary-500/10"
                >
                  Add address
                </p>
              </div>
            )}

            {/* Payment method selection */}
            <p className="text-sm font-medium uppercase mt-6">Payment Method</p>
            <select
              onChange={(e) => setPaymentoption(e.target.value)} // Set payment option
              className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none"
            >
              <option value="COD">Cash On Delivery</option>
              <option value="Online">Online Payment</option>
            </select>
          </div>

          <hr className="border-gray-300" />

          {/* Display price details */}
          <div className="text-gray-500 mt-4 space-y-2">
            <p className="flex justify-between">
              <span>Price</span>
              <span>
                {currency}
                {getCartAmount()}
              </span>
            </p>
            <p className="flex justify-between">
              <span>Shipping Fee</span>
              <span className="text-primary">Free</span>
            </p>
            <p className="flex justify-between">
              <span>Tax (2%)</span>
              <span>
                {currency}
                {(getCartAmount() * 2) / 100}
              </span>
            </p>
            <p className="flex justify-between text-lg font-medium mt-3">
              <span>Total Amount:</span>
              <span>
                {currency}
                {getCartAmount() + (getCartAmount() * 2) / 100}
              </span>
            </p>
          </div>

          {/* Place order or proceed to checkout */}
          <button
            onClick={placeOrder} // Place the order
            className="w-full py-3 mt-6 cursor-pointer bg-primary text-white font-medium hover:bg-primary-dull transition"
          >
            {paymentoption === "COD" ? "Place Order" : "Proceed to Checkout"}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Cart;
