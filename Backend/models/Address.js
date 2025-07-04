// Import mongoose to define the schema and model
import mongoose from "mongoose";

// Define the address schema for storing address data
const addressSchema = new mongoose.Schema({
  userId: { type: String, require: true }, // The user ID associated with the address
  firstName: { type: String, require: true }, // First name of the address holder
  lastName: { type: String, require: true }, // Last name of the address holder
  email: { type: String, require: true }, // Email address of the address holder
  street: { type: String, require: true }, // Street address
  city: { type: String, require: true }, // City of the address
  state: { type: String, require: true }, // State of the address
  zipcode: { type: Number, require: true }, // Zip code of the address
  country: { type: String, require: true }, // Country of the address
  phone: { type: String, require: true }, // Phone number of the address holder
});

// Create the Address model if it doesn't already exist in mongoose
const Address =
  mongoose.models.Address || mongoose.model("address", addressSchema);

// Export the Address model for use in other parts of the application
export default Address;
