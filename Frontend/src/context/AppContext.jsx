// Importing necessary React hooks and libraries
import { Children, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Creating the context for the app
export const AppContext = createContext();

// AppContextProvider component to wrap the app and provide context values
export const AppContextProvider = ({ Children }) => {
  const navigate = useNavigate(); // React Router hook for navigation
  const [user, setUser] = useState(null); // State to store the user information
  const [isSeller, setIsSeller] = useState(false); // State to track if the user is a seller
  
  // Providing context values for global state management
  const value = {navigate, user, setUser, setIsSeller, isSeller};
  return <AppContext.Provider value={value}>{Children}</AppContext.Provider>;
};

// Custom hook to access AppContext in components
export const UseAppContext = () => {
  return useContext(AppContext); // Returning context values
};
