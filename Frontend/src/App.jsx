import React from "react";
import { Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ExploreDeals from "./components/ExploreDeals";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
      <Routes>
      
      <Route path="/contact" element={<Contact />} />
      <Route path="/deals" element={<ExploreDeals />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
