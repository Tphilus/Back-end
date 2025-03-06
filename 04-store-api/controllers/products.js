const Product = require("../models/product");
const getAllProductsStatic = async (req, res) => {
  // throw new Error('testing async errors')
  const products = await Product.find({});
  res.status(200).json({
    products,
    // msg: "products testing route",
  });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({
    msg: "products route",
  });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
