import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const connect = () => {
  mongoose
    .connect(
      `mongodb+srv://bhavyagor9999:xr1jKt2CuWNb61si@cluster0.lxplezn.mongodb.net/EFIR?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
};
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(8000, () => {
  connect();
  console.log("Server on");
});
