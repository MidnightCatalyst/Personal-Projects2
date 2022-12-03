const express = require("express");
const connection = require("./MongoDBConnect");
const app = express();
app.listen(3000, () => {
  console.log("Listening at port 3000");
});