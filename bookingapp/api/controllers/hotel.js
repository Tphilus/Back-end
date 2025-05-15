import Hotel from "../models/Hotel.js";

// CREATE HOTEL
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  const _id = req.params.id;
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
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

export const deleteHotel = async (req, res, next) => {
  const _id = req.params.id;
  try {
    await Hotel.findByIdAndDelete(_id);
    res.status(200).json("Hotel has ben deleted.");
  } catch (error) {
    next(error);
  }
};

export const getHotel = async (req, res, next) => {
  const _id = req.params.id;
  try {
    const hotel = await Hotel.findById(_id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

// GET All HOTEL
export const getAllHotel = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};
