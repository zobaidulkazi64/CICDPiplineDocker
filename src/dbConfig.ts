import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // MongoDB connection string
    const uri = "mongodb://localhost:27017/your-database-name";

    // Options to pass to MongoDB driver during connection
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    // Connect to MongoDB
    await mongoose.connect(uri);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
