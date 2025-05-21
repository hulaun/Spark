import multer from "multer";
import path from "path";

// Only allow image files
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if ([".jpg", ".jpeg", ".png", ".gif"].includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

const storage = multer.diskStorage({}); // we use Cloudinary, so no need to save locally

const upload = multer({ storage, fileFilter });

export default upload;
