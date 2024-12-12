import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/usersdb");
    console.log(`connect to ${conn.connection.host}`);
  } catch {
    console.log("error");
    process.exit(1);
  }
};

export default connectDB;
