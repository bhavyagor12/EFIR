import express from "express";
import {
  storeFileOnIPFS,
  getFileFromIPFS,
  storeFileOnMongo,
} from "../controllers/efir.js";

const router = express.Router();

router.post("/storeFile", storeFileOnIPFS);
router.get("/retrieveFile", getFileFromIPFS);
router.post("/storeOnMongo", storeFileOnMongo);

export default router;
