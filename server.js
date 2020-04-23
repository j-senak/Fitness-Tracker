const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const Workouts = require("../models/Workouts.js");

const PORT = process.env.PORT || 3000;

// const db = require();
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

// Main page routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});

// API routes
app.get("/api/workouts", (req, res) => {
    db.Workouts.find({})
    .then(workoutdb => {
        res.json(workoutdb);
    }).catch(err => {
        res.json(err);
    });
});

app.post("/api/workouts", (req, res) => {
    db.Workouts.create({});
    return (req.body);
}).catch(err => {
    res.json(err);
});





app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});