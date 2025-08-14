import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

// NewsLetter Component - A subscription section to collect user emails
const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter an email.");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:5000/api/subscribe", { email });

      if (data?.message === "This email is already subscribed.") {
        toast.error(data.message);
      } else {
        toast.success("You are subscribed to our page!");
        setEmail("");
      }
    } catch (error) {
      console.error("Subscription failed:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 mt-24 pb-14">
      {/* Toaster for notifications */}
      <Toaster/>

      {/* Title */}
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal !</h1>

      {/* Description */}
      <p className="md:text-lg text-gray-500/70 pb-8">
        Subscribe to get the latest offers, new arrivals, and exclusive discounts
      </p>

      {/* Subscription Form */}
      <form
        onSubmit={handleSubscribe}
        className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12"
      >
        {/* Email Input Field */}
        <input
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email id"
          required
        />

        {/* Subscribe Button */}
        <button
          type="submit"
          className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
