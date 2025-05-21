import dotenv from "dotenv";
dotenv.config();

import cloudinary from "../config/cloudinary";

const getImg = (publicId) => {
  return cloudinary.url(publicId, { secure: true });
};

const uploadImg = async (filePath, folder = "uploads") => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folder,
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  uploadImg,
  getImg,
};
