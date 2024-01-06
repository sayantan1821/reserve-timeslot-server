const mongoose = require("mongoose");

const slotModel = mongoose.Schema(
  {
    date: { type: String},
    timeSlot: { type: String},
    userName: {type: String},
    useEmail: {type: String},
    userPhoneNo: {type: String},
    desc: {type: String},
    isDeleted: {type: Boolean, default: false}
  },
  { timestamps: true }
);


module.exports = mongoose.model("Slot", slotModel);

 