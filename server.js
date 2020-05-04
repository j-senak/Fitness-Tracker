const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

// Main page routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "public/stats.html"));
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
    db.Workouts.create({}).then(workoutdb => {
        console.log("This is my post route");
        console.log(workoutdb);
        res.json(workoutdb);
    }).catch(err => {
        res.json(err);
    });
});
// .catch(err => {
//     res.json(err);
// });

app.get("/api/workouts", (req, res) => {
    db.Workouts.find()
      .then(workoutdb => {
        res.json(workoutdb);
      }).catch(err => {
        res.json(err);
      });
  });


app.get("/api/workouts/range", (req, res) => {
    db.Workouts.find({}).limit(7)
    .then(workoutdb => {
        res.json(workoutdb);
    });
});

app.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log(body);
    db.Workouts.findByIdAndUpdate(params.id, {
        $push: { exercises: body }
    },
    {
        new: true, runValidators: true
    }).then(workoutdb => {
        res.json(workoutdb);
    }).catch(err => {
        res.json(err);
    });
});

// Added for practice with CRUD
// app.delete("/api/workouts", ({ body }, res) => {
//     db.Workouts.findByIdAndDelete(body.id)
//       .then(() => {
//         res.json(true);
//       }).catch(err => {
//         res.json(err);
//       });
//   });


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});