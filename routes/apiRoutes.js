const db = require("../models");

module.exports = function(app) {

    // app.get - find most recent workout to continue
    app.get("/api/workouts/", (req, res) => {
        console.log(req.body);

        db.Workout.find({})
        .then(lastWorkout => {
            res.json(lastWorkout);
        })
        .catch(error => {
            res.json(error);
        });    
    });

    // app.post - create new workout
    app.post("/api/workouts/", (req, res) => {
        console.log(req.body);

        db.Workout.create(req.body)
        .then(newWorkout => {
            res.json(newWorkout);
        })
        .catch(error => {
            res.json(error);
        });    
    });

    // app.put - add new exercise to most recent workout plan
    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body);

        db.Workout.findOneAndUpdate(
            req.params.id,
            { $push: { exercises: req.body } },
            { new: true }
        )
        .then(updateWorkout => {
            res.json(updateWorkout);
        })
        .catch(error => {
            res.json(error);
        });
    });

    // /api/workouts/range
    app.get("/api/workouts/range", (req, res) => {
        console.log(req.body);

        db.Workout.find({})
        .limit(7)
        .then(rangeWorkout => {
            res.json(rangeWorkout);
        })
        .catch(error => {
            res.json(error);
        });    
    });

    // app.get - find combined weight from past seven workouts

    // app.get - find total duration from past seven workouts

}

