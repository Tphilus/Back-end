const { StatusCodes } = require("http-status-codes");
const path = require("path");
const fs = require("fs");

const uploadProductImage = async (req, res) => {
  // console.log(req.files);
  let productImage = req.files.image;

  // Create uploads directory if it doesn't exist
  const uploadsDir = path.join(__dirname, "../public/uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );
  await productImage.mv(imagePath);

  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/upload/${productImage.name}` } });
};

module.exports = {
  uploadProductImage,
};
