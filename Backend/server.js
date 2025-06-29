import express from "express"; // Framework to build the server
import cookieParser from "cookie-parser"; // To parse cookies from incoming requests
import cors from "cors"; // To enable CORS for handling cross-origin requests
import connectDB from "./configs/db.js"; // Custom function to connect to MongoDB
import 'dotenv/config';
import userRouter from "./routes/userRouter.js";

const app = express(); // Initialize the Express application
const port = process.env.PORT || 5000; // Define server port

await connectDB();

// Define allowed origins for CORS
const allowedOrigins = ['http://localhost:3000'];

// Middleware Configuration
app.use(express.json()); // Parses incoming JSON requests
app.use(cookieParser()); // Parses cookies from requests
app.use(cors({origin: allowedOrigins, // Allow requests from specific frontend origins
    credentials: true, // NOTE: should be 'credentials' (lowercase) if you want to allow cookies from frontend
  })
);

// Root route to test if API is working
app.get('/', (req, res) => res.send("API is Working 🚀"));

// User Routes
app.use('/api/user', userRouter); // All user-related routes start with /api/user

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

