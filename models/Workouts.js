const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };

const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [{
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
}, opts);

workoutsSchema.virtual('totalDuration').get(function () {
  totalDuration = 0;
  if (this.exercises.length) {
    this.exercises.forEach(exercise => {
      totalDuration += exercise.duration;
    });
  }
  return totalDuration;
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;
