import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { user, setUser, setShowUserLogin } = useAppContext();

  const logout = async () => {
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
   
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img className="h-10" src={assets.logo} alt="logo" />
      </NavLink>

    
      <div className="hidden sm:flex items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) => 
            `px-4 py-1.5 rounded-full transition-colors font-semibold ${
              isActive ? 'text-primary' : 'hover:text-primary-dull'
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => 
            `px-4 py-1.5 rounded-full transition-colors font-semibold ${
              isActive ? 'text-primary' : 'hover:text-primary-dull'
            }`
          }
        >
          All Products
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => 
            `px-4 py-1.5 rounded-full transition-colors font-semibold ${
              isActive ? 'text-primary' : 'hover:text-primary-dull'
            }`
          }
        >
          Contact
        </NavLink>

       
        <div className="hidden lg:flex items-center text-sm gap-1 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 text-center"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4" />
        </div>

      
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 opacity-80"
          />
          <span className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full flex items-center justify-center">
            3
          </span>
        </div>


        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 ml-4 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group ml-4">
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="w-10 cursor-pointer"
            />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
              <li
                onClick={() => navigate("/my-orders")}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                My Orders
              </li>
              <li
                onClick={logout}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile menu button */}
      
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden focus:outline-none"
      >
        <img 
          src={assets.menu_icon} 
          alt="menu" 
          className="w-6 h-6"
        />
      </button>

      {/* Enhanced Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-start px-6 space-y-3 text-sm md:hidden z-50 animate-fadeIn">
          <NavLink 
            to="/" 
            onClick={() => setOpen(false)}
            className={({ isActive }) => 
              `w-full py-2 px-3 rounded transition-colors ${
                isActive ? 'text-primary font-medium' : 'hover:bg-gray-50'
              }`
            }
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/products" 
            onClick={() => setOpen(false)}
            className={({ isActive }) => 
              `w-full py-2 px-3 rounded transition-colors ${
                isActive ? 'text-primary font-medium' : 'hover:bg-gray-50'
              }`
            }
          >
            All Products
          </NavLink>
          
          {user && (
            <NavLink 
              to="/my-orders" 
              onClick={() => setOpen(false)}
              className={({ isActive }) => 
                `w-full py-2 px-3 rounded transition-colors ${
                  isActive ? 'text-primary font-medium' : 'hover:bg-gray-50'
                }`
              }
            >
              My Orders
            </NavLink>
          )}
          
          <NavLink 
            to="/contact" 
            onClick={() => setOpen(false)}
            className={({ isActive }) => 
              `w-full py-2 px-3 rounded transition-colors ${
                isActive ? 'text-primary font-medium' : 'hover:bg-gray-50'
              }`
            }
          >
            Contact
          </NavLink>

          <div className="w-full mt-3 pt-2 border-t border-gray-100">
            {!user ? (
              <button
                onClick={() => {
                  setOpen(false);
                  setShowUserLogin(true);
                }}
                className="w-full px-6 py-2.5 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm font-medium"
              >
                Login
              </button>
            ) : (
              <button
                onClick={logout}
                className="w-full px-6 py-2.5 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm font-medium"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;