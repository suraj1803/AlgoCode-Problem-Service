import mongoose from "mongoose";
import { MONGO_URL, NODE_ENV } from "./server.config.js";

export async function connectToDb() {
  try {
    if (NODE_ENV === "developement") {
      await mongoose.connect(MONGO_URL);
    }
  } catch (error) {
    console.log("Unable to connect to database");
    console.log(error);
  }
}
