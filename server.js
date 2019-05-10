const express = require("express");
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

// TODO: add to the db specifically MAYBE FIX THIS
// const db = require("config.js");
const url = "mongodb://localhost:27017";
// const db = client.db("mern_shopping");
let db;

const items = require("./routes/api/items/.js");

const app = express();

app.use(bodyParser.JSON());
app.use(bodyParser.urlencoded());

// Database connections

// TODO: later, change the connect to the db config, maybe
mongoose
  .connect("mongodb://localhost/mern_shopping")
  .then(() => console.log("she's connected to the mongoose server"))
  .catch(err => console.log("mongo server err => ", err));

// console a message if the connection is sucessful: https://mongoosejs.com/docs/index.html
var db = mongoose.connection;
db.on("error", console.error.bind(console, "mongoose connection error:"));
db.once("open", function() {
  console.log(`she's connected! - mongodb server`);
});

//  Using our routes from api foler
app.use("api/items");

// back to the server side stuff
const port = process.env.PORT || 5000;

app.listen(port => {
  console.log(`listening on port ${port}, Queen!`);
});
