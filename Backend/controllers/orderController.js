// Import required models
import Product from "../models/Product.js";
import Order from "../models/Order.js";
import Stripe from "stripe";

// Controller to place an order with Cash on Delivery
// Route: POST /api/order/cod
export const placeOrderCOD = async (req, res) => {
  try {
    const { items, address } = req.body;
    const userId = req.user.id; 

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

// Controller to place an order Stripe with Online Payment
// Route: POST /api/order/cod
export const placeOrderStripe = async (req, res) => {
  try {
    const { items, address } = req.body;
    const userId = req.user.id;

    const {origin} = req.headers;

    // Validate
    if (!userId || !address || !items || items.length === 0) {
      return res.json({ success: false, message: "Invalid data" });
    }

    let productData = [];

    // Calculate amount
    let amount = 0;
    for (const item of items) {
      const product = await Product.findById(item.product);
      productData.push({
        name : product.name,
        price: product.offerPrice,
        quantity: item.quantity,
      });
      amount += product.offerPrice * item.quantity;
    }
    amount += Math.floor(amount * 0.02); // Add 2% tax

    // Save order
    const order = await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "Online",
      isPaid: false,
    });

    // Stripe Gateway Initialize

    const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

    // Create line items for stripe

    const line_items = productData.map((item)=>{
        return{
          price_data : {
            currency: "usd",
            product_data:{
              name : item.name,
            },
            unit_amount: Math.floor(item.price + item.price * 0.02) * 100
          },
          quantity : item.quantity,
        }
    })

    // create session

    const session = await stripeInstance.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url:`${origin}/loader?next=my-orders`,
      cancel_url: `${origin}/cart`,
      metadata: {
        orderId: order._id.toString(),
        userId,
      }
    })

    return res.json({success: true, url: session.url});
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

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
