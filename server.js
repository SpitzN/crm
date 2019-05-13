const express = require("express");
const app = express();
const bodyParser = require("body-Parser");
const mongoose = require("mongoose");
const API = require("./server/routes/api");

mongoose.connect("mongodb://localhost/crm", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  next();
});

app.use("/", API);

const port = 2000;
app.listen(port, function() {
  console.log(`Server running on port ${port}`);
});
