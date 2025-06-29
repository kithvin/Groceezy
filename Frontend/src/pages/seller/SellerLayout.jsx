import React from "react";
import { useAppContext } from "../../context/AppContext";
import { Link, NavLink, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";

const SellerLayout = () => {
  // Extract setter from app-wide context to control seller login state
  const { setIsSeller } = useAppContext();

  // Sidebar navigation configuration for seller panel
  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    {
      name: "Product List",
      path: "/seller/product-list",
      icon: assets.product_list_icon,
    },
    { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
  ];

  // Seller logout function: resets login state
  const logout = async () => {
    setIsSeller(false);
    // You can also add redirection or toast here if needed
  };

  return (
    <>
      {/* Top Navigation Bar (Logo + Greeting + Logout Button) */}
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
        {/* Logo - redirects to homepage */}
        <Link to="/">
          <img
            src={assets.logo}
            alt="logo"
            className="cursor-pointer w-34 md:w-25"
          />
        </Link>

        {/* Seller Greeting and Logout */}
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Seller</p>
          <button
            onClick={logout}
            className="border rounded-full text-sm px-4 py-1"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Page Layout with Sidebar and Main Content */}
      <div className="flex">
        {/* Sidebar for Navigation */}
        <div className="md:w-64 w-16 border-r h-[95vh] text-base border-gray-300 pt-4 flex flex-col">
          {sidebarLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              end={item.path === "/seller"} // Only highlight 'Add Product' on exact match
              className={({ isActive }) => `flex items-center py-3 px-4 gap-3 
                ${
                  isActive
                    ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary"
                    : "hover:bg-gray-100/90 border-white"
                }`}
            >
              {/* Icon for each sidebar item */}
              <img src={item.icon} alt={`${item.name} icon`} className="w-7 h-7" />

              {/* Label hidden on smaller screens for compact view */}
              <p className="md:block hidden text-center">{item.name}</p>
            </NavLink>
          ))}
        </div>

        {/* Renders the nested route component based on current route */}
        <Outlet />
      </div>
    </>
  );
};

export default SellerLayout;
