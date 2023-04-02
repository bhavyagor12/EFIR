import express from "express";
import {
  storeFileOnIPFS,
  getFileFromIPFS,
  storeFileOnMongo,
  getFileFromMongo,
} from "../controllers/efir.js";

const router = express.Router();

router.post("/storeFile", storeFileOnIPFS);
router.get("/retrieveFile", getFileFromIPFS);
router.post("/storeOnMongo", storeFileOnMongo);
router.post("/retriveFromMongo", getFileFromMongo);
export default router;
