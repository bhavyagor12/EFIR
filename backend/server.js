import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import * as IPFSClient from "ipfs-http-client";
import fs from "fs";
import morgan from "morgan";
dotenv.config();

morgan("tiny");
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
app.use(morgan("tiny"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

const auth =
  "Basic " +
  Buffer.from(process.env.IPFSID + ":" + process.env.IPFSKEY).toString(
    "base64"
  );
const ipfs = IPFSClient.create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

//Reading file from computer
let testFile = fs.readFileSync(
  "///home/bhavya/final_Hackniche Problem Statement.pdf"
);
//Creating buffer for ipfs function to add file to the system
let testBuffer = new Buffer(testFile);
console.log(testFile);

app.get("/addfile", async function (req, res) {
  console.log(ipfs);
  const file = await ipfs.add({ assets: [""], fir: "asdasdbuwdbubdwedf" });
  console.log(file.path);
  res.send(file.path);
});

app.listen(8000, () => {
  connect();
  console.log("Server on");
});
