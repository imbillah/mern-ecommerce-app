import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import productRoute from "./routes/product.js";
import orderRoute from "./routes/order.js";
import cartRoute from "./routes/cart.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
dotenv.config();

//To supress warning in terminal
mongoose.set("strictQuery", true);

const port = process.env.PORT || 7000;

const connect = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo Server connected");
  } catch (error) {
    console.log(error.message);
  }
};
// DB connection
app.listen(port, () => {
  connect();
  console.log(`Backend Running on ${port}`);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongo server disconnected");
});

// my middleware
app.use("/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

// error handler middleware
app.use((err, req, res, next) => {
  if (err.message) {
    res.status(500).send(err.message);
  } else {
    res.status(500).send("An error happened! Try Again");
  }
});
