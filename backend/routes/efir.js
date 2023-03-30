import express from "express";
import { storeFileOnIPFS, getFileFromIPFS } from "../controllers/efir.js";

const router = express.Router();

router.post("/storeFile", storeFileOnIPFS);
router.get("/retrieveFile", getFileFromIPFS);
export default router;
