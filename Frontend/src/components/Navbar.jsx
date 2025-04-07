import React from "react";
import { Navigate, NavLink } from "react-router-dom"; // Import NavLink and Navigate for routing between pages
import { assets } from "../IMG/assets"; // Import assets (images, icons) from the assets folder
import { useAppContext } from "../context/AppContext"; // Import custom AppContext hook to manage global state 

function Navbar() {

  // State to handle the mobile menu visibility
  const [open, setOpen] = React.useState(false);

  // Destructure values from AppContext to access user info, functions to change state, and navigation
  const { user, setUser, setshowUserLogin, navigate } = useAppContext();

   // Function to handle logout: Clears user info from the state
  const logout = async ()=>{

        setUser(null); // Set user state to null, effectively logging out the user
        
  }

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      
    {/* Logo Section: When logo is clicked, it redirects to the homepage */}

      <NavLink to="/" onClick={()=> setOpen(false)}>
        <img
          className="h-10.5" // Ensure the height remains auto to maintain aspect ratio
          style={{ width: "140px" }} // Set custom width
          src={assets.logo}
          alt="dummyLogoColored"
        />
      </NavLink>

      {/* Desktop Menu */}

      <div className="hidden sm:flex items-center gap-8">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/products">All Product</NavLink>

        {user && <NavLink to="/">Contact</NavLink>} {/* Conditionally render "Contact" link if user is logged in */}

        {/* Search Bar for Desktop */}

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4" /> {/* Search icon */}
        </div>

        {/* Cart Icon Section */}

        <div onClick={()=> navigate("/cart")} className="relative cursor-pointer">
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 opacity-80"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>

        {/* Login / User Profile Section */}

        {!user ? ( // Login button if user is not logged in
          <button onClick={()=> setshowUserLogin(true)} className="cursor-pointer px-8 py-2  bg-primary hover:bg-primary-dull transition text-white rounded-full ml-3">
          Login
        </button>)
        :( // User profile dropdown if user is logged in
            <div className="relative group ml-4">
                <img src={assets.profile_icon} className="w-10" alt="" /> {/* User profile icon */}
                <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
                    <li onClick={()=> navigate("my-orders")} className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer">My Orders</li>
                    <li onClick={logout} className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer">Logout</li>
                </ul>
            </div>
        )}
      </div>
      
      {/* Mobile Menu Button (Hamburger Icon) */}

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))} // Toggle the open state for the mobile menu
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <img src={assets.menu_icon} alt="menu" />
      </button>

      {/* Mobile Menu: Displays when 'open' is true */}
      
      { open && (
        <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <NavLink to="/" onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/products" onClick={() => setOpen(false)}>
          All Product
        </NavLink>
        <NavLink to="/" onClick={() => setOpen(false)}>
          My Orders
        </NavLink>
        <NavLink to="/" onClick={() => setOpen(false)}>
          Contact
        </NavLink>

        {/* Mobile Login/Logout Button */}

        {!user ? (
            <button onClick={()=>{
                setOpen(false);
                setshowUserLogin(true);
            }} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
            Login
          </button>
        ) : (
            <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
            Logout
          </button>
        )}
        
      </div>
      )}

    </nav>
  );
}

export default Navbar;

