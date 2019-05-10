const express = require("express");
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

// TODO: add to the db specifically MAYBE FIX THIS
// const db = require("config.js");
const url = "mongodb://localhost:27017";
// const db = client.db("mern_shopping");
let db;

const app = express();

app.use(bodyParser.JSON());
app.use(bodyParser.urlencoded());

// Database connections
MongoClient.connect(url)
  .then(client => {
    const db = client.db("mern-shopping");
    // db.collection("exhibit").insertOne({
    //   species: "Lion",
    //   name: "Fred",
    //   age: 12
    // });
  })
  .catch(err =>
    console.error(err, "There was an error inserting into the database")
  );

MongoClient.connect(url)
  .then(client => {
    db = client.db("mern_shopping");
  })
  .catch(err =>
    console.error(err, "There was an error connecting to the database")
  );

// back to the server side stuff
const port = process.env.PORT || 5000;

app.listen(port => {
  console.log(`listening on port ${port}, Queen!`);
});
