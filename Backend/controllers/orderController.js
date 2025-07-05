// // Import required models
// import Product from "../models/Product.js";
// import Order from "../models/Order.js";

// // Controller to place an order with Cash on Delivery
// // Route: POST /api/order/cod

// export const placeOrderCOD = async (req, res) => {
//   try {
//     const { userId, items, address } = req.body;

//     // Validate required fields
//     if (!address || items.length === 0) {
//       return res.json({ success: false, message: "Invalid data" });
//     }
//     // Calculate total amount based on products and quantities
//     let amount = await items.reduce(async (acc, item) => {
//       const product = await Product.findById(item.product);
//       return (await acc) + product.offerPrice * item.quantity;
//     }, 0);
//     // Add 2% tax to the total amount
//     amount += Math.floor(amount * 0.02);

//     // Create new order with COD as payment type
//     await Order.create({
//       userId,
//       items,
//       amount,
//       address,
//       paymentType: "COD",
//     });

//     // Respond with success
//     return res.json({ success: true, message: "Order Placed Successfully" });
//   } catch (error) {
//     console.log(error.message);
//     res.json({ success: false, message: error.message });
//   }
// };

// // Controller to get all orders placed by a specific user
// // Route: POST /api/order/user
// export const getUserOrders = async (req, res) => {
//   try {
//     const { userId } = req.body;

//     // Fetch orders placed by user with either COD or paid online
//     const orders = await Order.find({
//       userId,
//       $or: [{ paymentType: "COD" }, { isPaid: true }],
//     })
//       .populate("items.product address") // Populate product and address references
//       .sort({ created: -1 }); // Sort orders by most recent

//     // Send retrieved orders
//     res.json({ success: true, orders });
//   } catch (error) {
//     // Handle and return errors
//     res.json({ success: false, message: error.message });
//   }
// };

// // export const getUserOrders = async (req, res) => {
// //   try {
// //     const userId = req.user.id; // Automatically gets user ID from auth middleware
    
// //     const orders = await Order.find({ userId })
// //       .populate("items.product address")
// //       .sort({ createdAt: -1 });

// //     res.json({ success: true, orders });
// //   } catch (error) {
// //     res.json({ success: false, message: error.message });
// //   }
// // };

// // Controller to get all orders (admin/seller view)
// // Route: GET /api/order/seller

// export const getAllOrders = async (req, res) => {
//   try {
//     // Fetch all orders with COD or paid status
//     const orders = await Order.find({
//       $or: [{ paymentType: "COD" }, { isPaid: true }],
//     })
//       .populate("items.product address") // Populate product and address references
//       .sort({ created: -1 }); // Sort orders by most recent

//     // Return all retrieved orders
//     res.json({ success: true, orders });
//   } catch (error) {
//     // Handle and return errors
//     res.json({ success: false, message: error.message });
//   }
// };

// Import required models
import Product from "../models/Product.js";
import Order from "../models/Order.js";

// Controller to place an order with Cash on Delivery
// Route: POST /api/order/cod
export const placeOrderCOD = async (req, res) => {
  try {
    const { items, address } = req.body;
    const userId = req.user.id; // ✅ Get userId from auth middleware

    // Validate
    if (!userId || !address || !items || items.length === 0) {
      return res.json({ success: false, message: "Invalid data" });
    }

    // Calculate amount
    let amount = 0;
    for (const item of items) {
      const product = await Product.findById(item.product);
      amount += product.offerPrice * item.quantity;
    }
    amount += Math.floor(amount * 0.02); // Add 2% tax

    // Save order
    await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "COD",
      isPaid: false,
    });

    return res.json({ success: true, message: "Order Placed Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


// ✅ Controller to get orders of a user
// Route: GET /api/order/user (with auth middleware)
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;

    const orders = await Order.find({ userId })
      .populate("items.product address")
      .sort({ createdAt: -1 });

    res.json({ success: true, orders });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


// Controller to get all orders (admin/seller view)
// Route: GET /api/order/seller
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });

    res.json({ success: true, orders });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
