import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://zlata2876:SVWFIDgrzGYcHvCO@cluster0.66it4.mongodb.net/example?retryWrites=true&w=majority&appName=Cluster0",
    );
    console.log("Successfully connected to MongoDB!");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  }
};

export default connectDB;
