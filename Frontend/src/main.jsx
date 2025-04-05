// Importing necessary libraries and components
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // React Router for routing
import { AppContextProvider } from "./context/AppContext.jsx"; // Importing AppContextProvider

// Rendering the app with BrowserRouter and AppContextProvider to manage global state and routing
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
