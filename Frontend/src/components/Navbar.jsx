// import React, { useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { assets } from "../assets/assets";
// import { useAppContext } from "../context/AppContext";
// import toast from "react-hot-toast";

// const Navbar = () => {
//   const [open, setOpen] = React.useState(false); // State for mobile menu toggle
//   const {
//     user,
//     setUser,
//     setshowUserLogin,
//     navigate,
//     setSearchQuery,
//     searchQuery,
//     getCartCount,
//     axios
//   } = useAppContext(); // Get context values

//   // Logout function
//   const logout = async () => {

//     try {
//       const {data} = await axios.get('/api/user/logout')
//       if(data.success){
//         toast.success(data.message)
//         setUser(null);
//         navigate("/");
//       }else{
//         toast.error(data.message)
//       }
//     } catch (error) {
//       toast.error(error.message)
//     }
    
//   };

//   useEffect(() => {
//     if (searchQuery.length > 0) {
//       navigate("/products");
//     }
//   }, [searchQuery]);

//   return (
//     <nav
//       className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 
//     border-b border-gray-300 bg-white relative transition-all"
//     >
//       {/* Logo */}

//       <NavLink to="/" onClick={() => setOpen(false)}>
//         <img className="h-10" src={assets.logo} alt="logo" />
//       </NavLink>

//       {/* Desktop Menu */}

//       <div className="hidden sm:flex items-center gap-8">
//         <NavLink to="/" className="font-semibold hover:text-primary-dull mr-4">
//           Home
//         </NavLink>
//         <NavLink
//           to="/products"
//           className="font-semibold hover:text-primary-dull mr-4"
//         >
//           All Product
//         </NavLink>
//         <NavLink
//           to="/contact"
//           className="font-semibold hover:text-primary-dull mr-4"
//         >
//           Contact
//         </NavLink>

//         {/* Search Bar */}

//         <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
//           <input
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="py-1.5 w-36 bg-transparent outline-none placeholder-gray-500 text-center"
//             type="text"
//             placeholder="Search products"
//           />
//           <img src={assets.search_icon} alt="search" className="w-4 h-4 mr-1" />
//         </div>

//         {/* Cart Icon with badge */}

//         <div
//           onClick={() => navigate("/cart")}
//           className="relative cursor-pointer"
//         >
//           <img
//             src={assets.nav_cart_icon}
//             alt="cart"
//             className="w-6 opacity-80"
//           />
//           <button
//             className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] 
//           h-[18px] rounded-full"
//           >
//             {getCartCount()}
//           </button>
//         </div>

//         {/* Login or Profile Dropdown */}

//         {!user ? (
//           <button
//             onClick={() => setshowUserLogin(true)}
//             className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition 
//             text-white rounded-full ml-4"
//           >
//             Login
//           </button>
//         ) : (
//           <div className="relative group ml-4">
//             {/* Profile Icon */}

//             <img
//               src={assets.profile_icon}
//               alt="Profile"
//               className="w-10 cursor-pointer"
//             />

//             {/* Dropdown Menu */}

//             <ul
//               className="hidden group-hover:block absolute top-10 right-0 bg-white shadow 
//             border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40"
//             >
//               <li
//                 onClick={() => navigate("my-orders")}
//                 className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
//               >
//                 My Order
//               </li>
//               <li
//                 onClick={logout}
//                 className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
//               >
//                 Logout
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Mobile Menu Button */}

//       <div className="flex items-center gap-6 sm:hidden">
//         <div
//           onClick={() => navigate("/cart")}
//           className="relative cursor-pointer"
//         >
//           <img
//             src={assets.nav_cart_icon}
//             alt="cart"
//             className="w-6 mr-2 opacity-80"
//           />
//           <button
//             className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] 
//           h-[18px] rounded-full mr-2"
//           >
//             {getCartCount()}
//           </button>
//         </div>
//         <button
//           onClick={() => (open ? setOpen(false) : setOpen(true))}
//           aria-label="Menu"
//           className="sm:hidden"
//         >
//           {/* Menu Icon SVG */}
//           <img
//             src={assets.menu_icon}
//             alt="menu"
//             className="w-6 h-6 cursor-pointer"
//           />
//         </button>
//       </div>

//       {/* Mobile Menu */}

//       {open && (
//         <div
//           className={`${
//             open ? "flex" : "hidden"
//           } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start 
//           gap-2 px-5 text-sm md:hidden z-50`}
//         >
//           <NavLink
//             className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
//             to="/"
//             onClick={() => setOpen(false)}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
//             to="/products"
//             onClick={() => setOpen(false)}
//           >
//             All Products
//           </NavLink>
//           {user && (
//             <NavLink
//               className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
//               to="/products"
//               onClick={() => setOpen(false)}
//             >
//               My Orders
//             </NavLink>
//           )}
//           <NavLink
//             to="/contact"
//             className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
//             onClick={() => setOpen(false)}
//           >
//             Contact
//           </NavLink>

//           {/* Login or Logout Button */}

//           {!user ? (
//             <button
//               onClick={() => {
//                 setOpen(false);
//                 setshowUserLogin(true);
//               }}
//               className="w-full px-6 py-2.5 bg-primary hover:bg-primary-dull transition 
//           text-white rounded-full text-sm font-medium"
//             >
//               Login
//             </button>
//           ) : (
//             <button
//               onClick={logout}
//               className="w-full px-6 py-2.5 bg-primary hover:bg-primary-dull transition 
//           text-white rounded-full text-sm font-medium"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { assets } from "../assets/assets";
// import { useAppContext } from "../context/AppContext";
// import toast from "react-hot-toast";

// const Navbar = () => {
//   const [open, setOpen] = React.useState(false); // State for mobile menu toggle
//   const {
//     user,
//     setUser,
//     setshowUserLogin,
//     navigate,
//     setSearchQuery,
//     searchQuery,
//     getCartCount,
//     axios,
//   } = useAppContext(); // Get context values

//   // Logout function
//   const logout = async () => {
//     try {
//       const { data } = await axios.get("/api/user/logout");
//       if (data.success) {
//         toast.success(data.message);
//         setUser(null);
//         navigate("/");
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (searchQuery.length > 0) {
//       navigate("/products");
//     }
//   }, [searchQuery]);

//   return (
//     <nav
//       className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 
//     border-b border-gray-300 bg-white relative transition-all"
//     >
//       {/* Logo */}

//       <NavLink to="/" onClick={() => setOpen(false)}>
//         <img className="h-10" src={assets.logo} alt="logo" />
//       </NavLink>

//       {/* Desktop Menu */}

//       <div className="hidden sm:flex items-center gap-8">
//         <NavLink to="/" className="font-semibold hover:text-primary-dull mr-4">
//           Home
//         </NavLink>
//         <NavLink
//           to="/products"
//           className="font-semibold hover:text-primary-dull mr-4"
//         >
//           All Product
//         </NavLink>
//         <NavLink
//           to="/contact"
//           className="font-semibold hover:text-primary-dull mr-4"
//         >
//           Contact
//         </NavLink>

//         <NavLink
//           to="/seller-login"
//           onClick={() => setOpen(false)}
//           className="block mt-4 text-center py-2 rounded-lg bg-gray-100 hover:bg-primary/10 transition border"
//         >
//           Seller Dashboard
//         </NavLink>

//         {/* Search Bar */}

//         <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
//           <input
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="py-1.5 w-36 bg-transparent outline-none placeholder-gray-500 text-center"
//             type="text"
//             placeholder="Search products"
//           />
//           <img src={assets.search_icon} alt="search" className="w-4 h-4 mr-1" />
//         </div>

//         {/* Cart Icon with badge */}

//         <div
//           onClick={() => navigate("/cart")}
//           className="relative cursor-pointer"
//         >
//           <img
//             src={assets.nav_cart_icon}
//             alt="cart"
//             className="w-6 opacity-80"
//           />
//           <button
//             className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] 
//           h-[18px] rounded-full"
//           >
//             {getCartCount()}
//           </button>
//         </div>

//         {/* Login or Profile Dropdown */}

//         {!user ? (
//           <button
//             onClick={() => setshowUserLogin(true)}
//             className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition 
//             text-white rounded-full ml-4"
//           >
//             Login
//           </button>
//         ) : (
//           <div className="relative group ml-4">
//             {/* Profile Icon */}

//             <img
//               src={assets.profile_icon}
//               alt="Profile"
//               className="w-10 cursor-pointer"
//             />

//             {/* Dropdown Menu */}

//             <ul
//               className="hidden group-hover:block absolute top-10 right-0 bg-white shadow 
//             border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40"
//             >
//               <li
//                 onClick={() => navigate("my-orders")}
//                 className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
//               >
//                 My Order
//               </li>
//               <li
//                 onClick={logout}
//                 className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
//               >
//                 Logout
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Mobile Menu Button */}

//       <div className="flex items-center gap-6 sm:hidden">
//         <div
//           onClick={() => navigate("/cart")}
//           className="relative cursor-pointer"
//         >
//           <img
//             src={assets.nav_cart_icon}
//             alt="cart"
//             className="w-6 mr-2 opacity-80"
//           />
//           <button
//             className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] 
//           h-[18px] rounded-full mr-2"
//           >
//             {getCartCount()}
//           </button>
//         </div>
//         <button
//           onClick={() => (open ? setOpen(false) : setOpen(true))}
//           aria-label="Menu"
//           className="sm:hidden"
//         >
//           {/* Menu Icon SVG */}
//           <img
//             src={assets.menu_icon}
//             alt="menu"
//             className="w-6 h-6 cursor-pointer"
//           />
//         </button>
//       </div>

//       {/* Mobile Menu */}

//       {open && (
//         <div
//           className={`${
//             open ? "flex" : "hidden"
//           } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start 
//           gap-2 px-5 text-sm md:hidden z-50`}
//         >
//           <NavLink
//             className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
//             to="/"
//             onClick={() => setOpen(false)}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
//             to="/products"
//             onClick={() => setOpen(false)}
//           >
//             All Products
//           </NavLink>
//           {user && (
//             <NavLink
//               className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
//               to="/products"
//               onClick={() => setOpen(false)}
//             >
//               My Orders
//             </NavLink>
//           )}
//           <NavLink
//             to="/contact"
//             className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
//             onClick={() => setOpen(false)}
//           >
//             Contact
//           </NavLink>

//           <NavLink
//             to="/seller-login"
//             onClick={() => setOpen(false)}
//             className="block mt-4 text-center py-2 rounded-lg bg-gray-100 hover:bg-primary/10 transition border"
//           >
//             Seller Dashboard
//           </NavLink>

//           {/* Login or Logout Button */}

//           {!user ? (
//             <button
//               onClick={() => {
//                 setOpen(false);
//                 setshowUserLogin(true);
//               }}
//               className="w-full px-6 py-2.5 bg-primary hover:bg-primary-dull transition 
//           text-white rounded-full text-sm font-medium"
//             >
//               Login
//             </button>
//           ) : (
//             <button
//               onClick={logout}
//               className="w-full px-6 py-2.5 bg-primary hover:bg-primary-dull transition 
//           text-white rounded-full text-sm font-medium"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = React.useState(false); // State for mobile menu toggle
  const {
    user,
    setUser,
    setshowUserLogin,
    navigate,
    setSearchQuery,
    searchQuery,
    getCartCount,
    axios,
  } = useAppContext(); // Get context values

  // Logout function
  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      if (data.success) {
        toast.success(data.message);
        setUser(null);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  return (
    <nav
      className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 
    border-b border-gray-300 bg-white relative transition-all"
    >
      {/* Logo */}
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img className="h-10" src={assets.logo} alt="logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        {/* Primary nav links */}
        <NavLink to="/" className="font-semibold hover:text-primary-dull mr-4">
          Home
        </NavLink>
        <NavLink
          to="/products"
          className="font-semibold hover:text-primary-dull mr-4"
        >
          All Product
        </NavLink>
        <NavLink
          to="/contact"
          className="font-semibold hover:text-primary-dull mr-4"
        >
          Contact
        </NavLink>

        {/* Seller Dashboard — moved next to account actions */}
        <NavLink
          to="/seller"
          onClick={() => setOpen(false)}
          className="block text-center text-black py-0 px-2 rounded-xl bg-gray-100 hover:bg-primary/10 transition border"
        >
          Seller Dashboard
        </NavLink>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-36 bg-transparent outline-none placeholder-gray-500 text-center"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4 mr-1" />
        </div>

        {/* Cart Icon with badge */}
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 opacity-80"
          />
          <button
            className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] 
          h-[18px] rounded-full"
          >
            {getCartCount()}
          </button>
        </div>

        {/* Login or Profile Dropdown */}
        {!user ? (
          <button
            onClick={() => setshowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition 
            text-white rounded-full ml-2"
          >
            Login
          </button>
        ) : (
          <div className="relative group ml-2">
            {/* Profile Icon */}
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="w-10 cursor-pointer"
            />
            {/* Dropdown Menu */}
            <ul
              className="hidden group-hover:block absolute top-10 right-0 bg-white shadow 
            border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40"
            >
              <li
                onClick={() => navigate("my-orders")}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                My Order
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

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-6 sm:hidden">
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 mr-2 opacity-80"
          />
        <button
            className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] 
          h-[18px] rounded-full mr-2"
          >
            {getCartCount()}
          </button>
        </div>
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          {/* Menu Icon SVG */}
          <img
            src={assets.menu_icon}
            alt="menu"
            className="w-6 h-6 cursor-pointer"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start 
          gap-2 px-5 text-sm md:hidden z-50`}
        >
          <NavLink
            className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
            to="/"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
            to="/products"
            onClick={() => setOpen(false)}
          >
            All Products
          </NavLink>
          {user && (
            <NavLink
              className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
              to="/my-orders"
              onClick={() => setOpen(false)}
            >
              My Orders
            </NavLink>
          )}
          <NavLink
            to="/contact"
            className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>

          <NavLink
            to="/seller"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center py-2 rounded-lg bg-gray-100 hover:bg-primary/10 transition w-full border"
          >
            Seller Dashboard
          </NavLink>

          {/* Login or Logout Button */}
          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setshowUserLogin(true);
              }}
              className="w-full px-6 py-2.5 bg-primary hover:bg-primary-dull transition 
          text-white rounded-full text-sm font-medium"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="w-full px-6 py-2.5 bg-primary hover:bg-primary-dull transition 
          text-white rounded-full text-sm font-medium"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

