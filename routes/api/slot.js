const express = require("express");
const router = express.Router();
const Slot = require("../../models/Slot");

router.post("/book", async (req, res) => {
  try {
    let slot = await Slot.create(req.body);
    res.json(slot);
  } catch (error) {
    res.status(400).json({ error: "server error" });
    console.log(error.message);
  }
});

router.get("/allbookings", async (req, res) => {
    let allbookings = []
  try {
    allbookings = await Slot.find({ isDeleted: false });
  } catch (error) {
    res.status(400).json({ error: "server error" });
    console.log(error.message);
  }
  console.log(allbookings);
  res.json(allbookings);
});

router.post("/update-slot/:slotId", async (req, res) => {
  slotId = req.params.slotId;
  let updatedSlot
  update = {date: req.body.date, timeSlot: req.body.timeSlot}
  try {
    updatedSlot = await Slot.findByIdAndUpdate(
      slotId,
      { $set: update },
      {
        new: true
      }
    );
    res.json(updatedSlot)
  } catch (error) {
    res.status(400).json({ error: "server error" });
    console.log(error.message);
  }
});

router.post("/delete-slot/:slotId", async (req, res) => {
    slotId = req.params.slotId;
  let updatedSlot
  try {
    updatedSlot = await Slot.findByIdAndUpdate(
      slotId,
      { $set: {isDeleted: true} },
      {
        new: true
      }
    );
    res.json(updatedSlot)
  } catch (error) {
    res.status(400).json({ error: "server error" });
    console.log(error.message);
  }
})
module.exports = router;
