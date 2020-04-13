const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const URI =
  "mongodb+srv://alex:1234@testcluster1-dzp0r.mongodb.net/test?retryWrites=true&w=majority";

app.listen(3000, () => {
  MongoClient.connect(
    URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
      if (error) throw error;
      database = client.db("acme").collection("todos");
    }
  );
});

app.get("/", (request, response) => {
  response.send("Hello world!");
});
