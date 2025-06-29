import mongoose from "mongoose";

// Function to establish a connection to the MongoDB database
const connectDB = async () => {
  try {
    // Log a message when the database connection is successfully established
    mongoose.connection.on('connected', () =>
      console.log("Database Connected")
    );

    // Connect to MongoDB using the URI from environment variables
    // Appends 'GroceezyDB' as the database name
    await mongoose.connect(`${process.env.MONGODB_URI}/GroceezyDB`); //DB Name
    
  } catch (error) {
    // Log an error message if connection fails
    console.error(error.message);
  }
};

// Export the connection function to use in other parts of the application
export default connectDB;

