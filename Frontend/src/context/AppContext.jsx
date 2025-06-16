import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create the app context
export const AppContext = createContext();

// Create the provider to wrap around your app
export const AppContextProvider = ({ children }) => {

  const navigate = useNavigate(); // For page navigation
  const [user, setUser] = useState(null); // To store user info
  const [isSeller, setIsUser] = useState(false); // To check if user is a seller

  // Values that will be shared in the app
  const value = { navigate, user, setUser, isSeller, setIsUser };

  // Wrap and return children with the context provider
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context easily
export const useAppContext = () => {
  return useContext(AppContext);
};
