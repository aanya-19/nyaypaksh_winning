const express = require("express");
const multer = require("multer");
const path = require("path");
const { addNewCase } = require("../controllers/trackController");

const router = express.Router();

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploads/")); // Destination folder
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`; // Unique file name
    cb(null, uniqueName);
  },
});

// Initialize Multer
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Max file size: 10MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /pdf|doc|docx|png|jpg|jpeg/;
    const mimeType = allowedTypes.test(file.mimetype);
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());

    if (mimeType && extName) {
      return cb(null, true);
    }
    cb(new Error("Only .pdf, .doc, .docx, .png, .jpg, .jpeg formats allowed."));
  },
});

// Define the route
router.post("/add-case", upload.single("document"), addNewCase);

module.exports = router;
