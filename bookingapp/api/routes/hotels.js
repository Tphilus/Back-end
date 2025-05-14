import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
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
    res.status(500).json(error);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    await Hotel.findByIdAndDelete(_id);
    res.status(200).json("Hotel has ben deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET
router.get("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const hotel = await Hotel.findById(_id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL
router.get("/", async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    // res.status(500).json(error);
    next(error)
  }
});

export default router;
