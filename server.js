const express = require("express");
const mongoose = require("mongoose");
const Workout = require("./Develop/models/Workout");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });