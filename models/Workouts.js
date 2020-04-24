const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  userExercise: [{
  name: {
    type: String,
    required: "Enter a name of an exercise",
  },
  duration: {
    type: Number,
    required: "Enter the duration",
  },
  weight: {
    type: Number,
    required: "Enter the weight",
  },
  reps: {
    type: Number,
    required: "Enter the reps",
  },
  sets: {
    type: Number,
    required: "Enter the sets",
  },
  distance: {
    type: Number,
  }
  }]
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;
