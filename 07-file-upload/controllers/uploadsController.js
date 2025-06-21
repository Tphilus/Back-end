const { StatusCodes } = require("http-status-codes");
const path = require("path");
const fs = require("fs");
const CustomError = require("../errors");
const cloudinary = require("cloudinary");

const uploadProductImageLocal = async (req, res) => {
  // check if file exists
  // check format
  // check size

  if (!req.files) {
    throw new CustomError.BadRequestError("No File Upload");
  }

  // console.log(req.files);
  let productImage = req.files.image;

  if (!productImage.mimetype.startWith("image")) {
    throw new CustomError.BadRequestError("Please Upload Image");
  }

  const maxSize = 1024 * 1024;

  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError("Please Upload Image smaller 1KB");
  }

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

const uploadProductImage = async (req, res) => {
  // console.log(req.files.image);
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload",
    }
  );
  
  fs.unlinkSync(req.files.image.tempFilePath)
  return res.status(StatusCodes.OK).json({image: {src: result.secure_url}})
};

module.exports = {
  uploadProductImage,
};
 