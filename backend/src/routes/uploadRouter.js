import express from "express";
import upload from "../middlewares/multer.js";
import { uploadImg } from "../services/uploadService.js";
import fs from "fs";

const uploadRouter = express.Router();

// Upload single image
uploadRouter.post(
  "/upload-single",
  upload.single("image"),
  async (req, res) => {
    try {
      const result = await uploadImg(req.file.path);
      // Optional: remove temp file
      fs.unlinkSync(req.file.path);
      res.json({ url: result.secure_url });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// Upload multiple images
uploadRouter.post(
  "/upload-multiple",
  upload.array("images", 3),
  async (req, res) => {
    try {
      const results = await Promise.all(
        req.files.map(async (file) => {
          const result = await uploadImg(file.path);
          fs.unlinkSync(file.path);
          return result.secure_url;
        })
      );
      res.json({ urls: results });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

export default uploadRouter;
