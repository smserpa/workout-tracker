const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            duration: {
                type: Number,
                required: true,
                min: 1,
                default: 20,
            },
            weight: {
                type: Number,
                min: 20,
            },
            reps: {
                type: Number,
                min: 1,
                default: 10,
            },
            sets: {
                type: Number,
                min: 1,
                default: 4,
            },
            distance: {
                type: Number,
                min: 1,
                default: 4,
            },

        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;