import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  const _id = req.params.id;
  try {
    const updatedHotel = await User.findByIdAndUpdate(
      _id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const _id = req.params.id;
  try {
    await User.findByIdAndDelete(_id);
    res.status(200).json("User has ben deleted.");
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// GET All HOTEL
export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
