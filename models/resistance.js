const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  name: {
    type: String,
    required: "Enter a name of en exercise"
  },
  duration: {
    type: Number,
    required: "Enter the ducration"
  },
  weight: {
    type: Number,
    required: "Enter the weight"
  },
  reps: {
      type: Number,
      required: "Enter the reps"
  },
  sets: {
      type: Number,
      required: "Enter the sets"
  }
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;