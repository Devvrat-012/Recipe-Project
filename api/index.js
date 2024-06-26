import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.route.js";
import cors from 'cors'
import userRouter from "./routes/user.route.js";
import recipeRouter from "./routes/recipe.route.js";
import contactRouter from "./routes/contact.route.js";

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

app.use(cors({
  origin:"https://recipe-project-client.vercel.app",
  credentials:true,
}));

app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error!';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})

app.listen(port, () => {
  console.log(`Server is running on the port ${port}.`);
});

app.use("/api/auth", authRouter);
app.use('/api/user', userRouter);
app.use('/api/recipe', recipeRouter); 
app.use('/api/contact', contactRouter);

app.get('/', (req, res)=>{
  res.json('Hello')
})