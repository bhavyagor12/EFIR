import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import efirRoutes from "./routes/efir.js";
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
app.use("/api/efir", efirRoutes);
app.get("/", (req, res) => {
  res.send("hello");
});

export const auth =
  "Basic " +
  Buffer.from(process.env.IPFSID + ":" + process.env.IPFSKEY).toString(
    "base64"
  );
export const ipfs = IPFSClient.create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

//Reading file from computer

app.get("/addfile", async function (req, res) {
  console.log(ipfs);
  const fileObj = {
    owner: "bhavya gor",
    policeStation: "efir",
    firID: 1,
    firDoc: "thiswillbeastring",
  };
  const fileStr = JSON.stringify(fileObj);
  const file = await ipfs.add(fileStr);
  console.log(file.path);
  res.send(file.path);
});

app.listen(8000, () => {
  connect();
  console.log("Server on");
});
