// Import required models
import Product from "../models/Product.js";
import Order from "../models/Order.js";
import stripe from "stripe"
import User from "../models/User.js";

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
// Route: POST /api/order/stripe
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

    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

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

// Stripe Webhooks to Verify Payment Action : /stripe

export const stripeWebhooks = async (request, response)=>{
      // Stripe Gateway Initialize
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

    const sig = request.headers["stripe-signature"];
    let event;

    try {

      event = stripeInstance.webhooks.constructEvent(
        request.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );

    } catch (error) {
      response.status(400).send(`Webhook Error:${error.message}`);
    }
    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":{

        const paymentIntent = event.data.object;
        const paymentIntentId = paymentIntent.id;

        // Getting Session Metadata
        const session = await stripeInstance.checkout.sessions.list({
            payment_intent: paymentIntentId,
        });

        const {orderId, userId} = session.data[0].metadata;

        // Mark Payment as Paid

        await Order.findByIdAndUpdate(orderId,{isPaid: true});

        // Clear user cart

        await User.findByIdAndUpdate(userId, {cartItems: {}})
        break;
      }
      case "payment_intent.payment_failed": {

        const paymentIntent = event.data.object;
        const paymentIntentId = paymentIntent.id;

        // Getting Session Metadata
        const session = await stripeInstance.checkout.sessions.list({
            payment_intent: paymentIntentId,
        });

        const {orderId} = session.data[0].metadata;
        await Order.findByIdAndDelete(orderId);
        break;
      }

      default:
        console.error(`Unhandled event type ${event.type}`)
      break;
    }
    response.json({received: true});
}

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
