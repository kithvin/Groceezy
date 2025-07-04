import express from "express"; // Framework to build the server
import cookieParser from "cookie-parser"; // To parse cookies from incoming requests
import cors from "cors"; // To enable CORS for handling cross-origin requests
import connectDB from "./configs/db.js"; // Custom function to connect to MongoDB
import "dotenv/config"; // To load environment variables from .env file
import userRouter from "./routes/userRouter.js"; // Import user routes
import sellerRouter from "./routes/sellerRouter.js"; // Import seller routes
import connectCloudinary from "./configs/cloudinary.js"; // Import Cloudinary routes
import productRouter from "./routes/productRouter.js"; // Import product routes
import cartRouter from "./routes/cartRouter.js"; // Import cart routes
import addressRouter from "./routes/addressRouter.js"; // Import Address routes
import orderRouter from "./routes/orderRouter.js"; // Import Order routes

const app = express(); // Initialize the Express application
const port = process.env.PORT || 5000; // Define server port

// Define allowed origins for CORS
const allowedOrigins = ["http://localhost:3000"];

// Connect to MongoDB database
await connectDB();

// Connect to cloudinary
await connectCloudinary();

// Middleware Configuration
app.use(express.json()); // Parses incoming JSON requests
app.use(cookieParser()); // Parses cookies from requests
app.use(
  cors({
    origin: allowedOrigins, // Allow requests from specific frontend origins
    credentials: true, //Allow cookies from frontend
  })
);
// Root route to test if API is working
app.get("/", (req, res) => {
  res.send("API is Working 🚀");
});

app.use('/api/user', userRouter); // All user-related routes start with /api/user

app.use('/api/seller', sellerRouter); // All seller-related routes start with /api/seller

app.use('/api/product', productRouter); // All product-related routes start with /api/product

app.use('/api/cart', cartRouter) // All cart-related routes start with /api/product

app.use("/api/address", addressRouter); // All address-related routes start with /api/

app.use("/api/order", orderRouter); // All order-related routes start with /api/order

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
