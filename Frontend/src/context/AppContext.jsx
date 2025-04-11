import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../IMG/assets"; // Import dummy product data

// Create a context for managing global state
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  // Retrieve the currency value from environment variables
  const currency = import.meta.env.VITE_CURRENCY;

  // Hook for navigation
  const navigate = useNavigate();

  // State for managing user authentication (true means user is logged in, false means not)
  const [user, setUser] = useState(true);

  // State for checking if the current user is a seller
  const [isSeller, setIsSeller] = useState(false);

  // State to manage visibility of user login form
  const [showUserLogin, setshowUserLogin] = useState(false);

  // State to manage the products (you can later update this with actual product data)
  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState({});

  // Fetch product data (dummy data)
  const fetchProducts = async () => {
    setProducts(dummyProducts); // Set products
  };

  /* Function to add product to the cart */

  const addToCart = (itemId) => {
    // Clone the current cart items to avoid directly mutating state

    let cartData = structuredClone(cartItems);

    // Check if the item is already in the cart

    if (cartData[itemId]) {
      cartData[itemId] += 1; // If yes, increase the quantity
    } else {
      cartData[itemId] = 1; // If no, add the item with a quantity of 1
    }

    // Update the cart state with the new cart data
    setCartItems(cartData);
    toast.success("Added to Cart");
  };

  /*  update cart item quantity  */
  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems); // Clone the current cart items to avoid directly mutating state
    cartData[itemId] = quantity; // Update the quantity of the specified item
    setCartItems(cartData); // Update the cart state with the new cart data
    toast.success("Cart Updated"); // Show success toast notification
  };

  /* Romove Product form Cart */

    const removeFromCart = (itemId)=>{
      let cartData = structuredClone(cartItems); // Clone the cart data
      if(cartData[itemId]){ // Check if the item exists in the cart
        cartData[itemId] -= 1; // Decrease the quantity of the ite
        if(cartData[itemId] === 0){
          delete cartData[itemId]; // Remove item from cart if quantity is 0
        }
      }

      // Show success toast notification
      toast.success("Remove from Cart");

      // Update the cart state with the new data
      setCartItems(cartData);
    }

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts(); // Call the function to fetch products
  }, []);

  // The context value that will be provided to children components
  const value = {
    navigate, // to navigate between pages
    user, // stores the user state (logged in or not)
    setUser, // function to update the user state
    setIsSeller, // function to set whether the user is a seller or not
    isSeller, // stores whether the user is a seller
    showUserLogin, // controls visibility of the login form
    setshowUserLogin, // function to show/hide login form
    products, // stores product data
    setProducts, // function to set product data
    currency, // Current currency value
    cartItems, // Stores items in the cart
    addToCart, // Function to add an item to the cart
    updateCartItem, // Function to update the quantity of an item in the cart
    removeFromCart // Function to remove an item from the cart
  };

  // Providing the context to children components
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to access AppContext values
export const useAppContext = () => {
  return useContext(AppContext); // Return the context value
};
