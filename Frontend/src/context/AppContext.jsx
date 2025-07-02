import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create a context for managing global state
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    // Hook for navigation
  const navigate = useNavigate();

  // State for managing user authentication (true means user is logged in, false means not)
  const [user, setUser] = useState(null);

  // State for checking if the current user is a seller
  const [isSeller, setIsSeller] = useState(false);

// The context value that will be provided to children components

const value = {
    navigate, // to navigate between pages
    user, // stores the user state (logged in or not)
    setUser, // function to update the user state
    setIsSeller, // function to set whether the user is a seller or not
    isSeller, // stores whether the user is a seller
}

return <AppContext.Provider value={value}>
    {children}
</AppContext.Provider>

}

// Custom hook to access AppContext values
export const useAppContext = () => {
    return useContext(AppContext); // Return the context value
  };