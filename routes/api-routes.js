const Workout = require("../models/Workout");

module.exports = function (app) {
    app.get("/api/workouts" , (req, res) => {
        Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findOneAndUpdate( params.id, { $push: { exercise : body } }, { new: true })
        .then(dbUpdate=> {
            res.json(dbUpdate);
          })
          .catch(err => {
            res.json(err);
          });
    });
    app.post("/api/workouts", ({ body }, res) => {
        Workout.create(body)
          .then(newWorkout => {
            res.json(newWorkout);
          })
          .catch(err => {
            res.json(err);
          });
      });
};