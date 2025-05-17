import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();

    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }

    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

export const updateRoom = async (req, res, next) => {
  const _id = req.params.id;
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      _id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};

export const deleteRoom = async (req, res, next) => {
  const _id = req.params.id;
  const hotelId = req.params.hotelId;

  try {
    await Room.findByIdAndDelete(_id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      next(error);
    }

    res.status(200).json("Room has ben deleted.");
  } catch (error) {
    next(error);
  }
};

export const getRoom = async (req, res, next) => {
  const _id = req.params.id;
  try {
    const room = await Room.findById(_id);
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

// GET All Rooms
export const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};
