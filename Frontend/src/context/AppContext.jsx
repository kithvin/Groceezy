// Importing necessary React hooks and libraries
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Creating the context for the app
export const AppContext = createContext();

// AppContextProvider component to wrap the app and provide context values
export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate(); // React Router hook for navigation
  const [user, setUser] = useState(true); // State to store the user information
  const [isSeller, setIsSeller] = useState(false); // State to track if the user is a seller
  const [showUserLogin, setshowUserLogin] = useState(false); // State to track if the user is a seller

  // Providing context values for global state management
  const value = {navigate, user, setUser, setIsSeller, isSeller,showUserLogin,setshowUserLogin};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to access AppContext in components
export const useAppContext = () => {
  return useContext(AppContext);
};