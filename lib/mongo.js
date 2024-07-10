import mongoose from "mongoose";

async function dbConnect() {
  try {
    const conn = await mongoose.connect(String(process.env.MONGODB_URI));
    return conn;
  } catch (error) {
    throw new Error(error);
  }
}

export default dbConnect;
