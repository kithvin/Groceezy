import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets, dummyOrders } from "../../assets/assets";

const Orders = () => {
  // Access the currency symbol from global context
  const { currency } = useAppContext();

  // State to hold list of orders
  const [orders, setOrders] = useState([]);

  // Fetch orders data (dummy data used here)
  const fetchOrders = async () => {
    setOrders(dummyOrders);
  };

  // Run fetchOrders once on component mount
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll">
      <div className="md:p-10 p-4 space-y-4">
        {/* Page Title */}
        <h2 className="text-lg font-medium">Orders List</h2>

        {/* Loop through each order */}
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-col md:items-center md:flex-row justify-between gap-5 p-5 max-w-4xl rounded-md border border-gray-300"
          >
            {/* Product Section */}
            <div className="flex gap-5 max-w-80">
              {/* Product Thumbnail */}
              <img
                className="w-12 h-12 object-cover"
                src={assets.box_icon}
                alt="boxIcon"
              />
              {/* Product Info List */}
              <div>
                {order.items.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <p className="font-medium">
                      {item.product.name}{" "}
                      <span className="text-primary">x {item.quantity}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address */}
            <div className="text-sm md:text-base text-black/60">
              <p className="text-black/80">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>
                {order.address.street}, {order.address.city},
              </p>
              <p>
                {order.address.state},{order.address.zipcode},{" "}
                {order.address.country}
              </p>
              <p>{order.address.phone}</p>
            </div>

            {/* Total Amount */}
            <p className="font-medium text-lg my-auto">
              {currency}
              {order.amount}
            </p>

            {/* Payment Info */}
            <div className="flex flex-col text-sm">
              <p>Method: {order.paymentType}</p>
              <p>Date: {new Date(order.createAt).toLocaleDateString()}</p>
              <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
