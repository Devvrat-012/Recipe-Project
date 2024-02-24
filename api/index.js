import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.route.js";

const app = express();
const port = 3000;

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on the port ${port}.`);
});



app.use("/auth", authRouter);