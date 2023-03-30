import { createError } from "../error.js";
import { brotliCompressSync, brotliDecompressSync } from "zlib";
import crypto from "crypto";
import * as IPFSClient from "ipfs-http-client";
import { auth, ipfs } from "../server.js";
const algorithm = "aes-256-cbc";

// const key = crypto.randomBytes(32);
// const fixedIV = Buffer.alloc(16, 0);
const key = process.env.ENCDECKEY;

const fixedIV = process.env.IV;

export const compressString = (string) => {
  const str = string;
  const cipher = crypto.createCipheriv(algorithm, key, fixedIV);
  let encrypted = cipher.update(str);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  const compressedString = brotliCompressSync(encrypted).toString("base64");
  return compressedString;
};

export const decompressString = (string) => {
  const encryptedText = Buffer.from(string, "base64");
  const decompressed = brotliDecompressSync(encryptedText);
  const decipher = crypto.createDecipheriv(algorithm, key, fixedIV);
  let decrypted = decipher.update(decompressed);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

export const storeFileOnIPFS = async (req, res, next) => {
  //this function takes in the FIR json,stringifies it, compresses and encrypts it and stores it on IPFS
  try {
    let getDocument = req.body.document || {};
    let getDocumentString = JSON.stringify(getDocument);
    let compressedString = compressString(getDocumentString);

    const file = await ipfs.add(compressedString);
    res.status(200).json({ status: "success", data: file.path });
  } catch (err) {
    res.send("error in storing file on IPFS");
    next(err);
  }
};

export const getFileFromIPFS = async (req, res, next) => {
  try {
    const hash = req.body.hash;
    const stream = ipfs.cat(hash);
    let content = "";
    for await (const chunk of stream) {
      content += chunk.toString();
    }
    let decompressedStr = decompressString(content);
    let fileObj = JSON.parse(decompressedStr);
    res.status(200).send(fileObj);
  } catch (err) {
    res
      .status(500)
      .json({ status: "error", message: "Error in getting file from IPFS" });
    next(err);
  }
};
