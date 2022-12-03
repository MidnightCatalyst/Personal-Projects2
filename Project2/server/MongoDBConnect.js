const mongoose = require("mongoose");
require("dotenv").config();
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.gkkeok5.mongodb.net/?retryWrites=true&w=majority`;
const connexion = mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

module.exports = connexion;