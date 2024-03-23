import "dotenv/config";
import { connect } from "mongoose";

connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => console.error("Error connecting to MongoDB: ", err));
