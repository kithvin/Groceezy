import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext"; // Import global app context

const SellerLogin = () => {
  // Extract values from global AppContext
  const { isSeller, setIsSeller, navigate } = useAppContext();

  // Local state for email and password fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevent default form behavior (page reload)

    setIsSeller(true); // Mark user as seller after "login"
  };

  // Redirect seller to the seller dashboard/homepage if already logged in
  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller]);

  // Render login form only if user is not already logged in as seller
  return (
    !isSeller && (
      <form
        onSubmit={onSubmitHandler}
        className="min-h-screen flex items-center text-sm text-gray-600"
      >
        <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200">
          {/* Form title */}
          <p className="text-2xl font-medium m-auto">
            <span className="text-primary">Seller</span> Login
          </p>

          {/* Email input */}
          <div className="w-full">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>

          {/* Password input */}
          <div className="w-full">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>

          {/* Submit/Login button */}
          <button className="bg-primary text-white w-full py-2 rounded-md cursor-pointer">
            Login
          </button>
        </div>
      </form>
    )
  );
};

export default SellerLogin;
