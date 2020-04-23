const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  name: {
    type: String,
    required: "Enter the name"
  },
  duration: {
    type: Number,
    required: "Enter the duration"
  },
  distance: {
      type: Number,
      required: "Enter the distance"
  }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;