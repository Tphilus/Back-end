const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProduct,
} = require("../controllers/productController");
const { uploadProductImage } = require("../controllers/uploadsController");

router.route("/").post(createProduct).get(getAllProduct);
router.route("/upload").post(uploadProductImage);

module.exports = router;
