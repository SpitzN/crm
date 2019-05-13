const express = require("express");
const router = express.Router();
const Client = require("../model/Client");

router.get("/clients", async function(req, res) {
  let clients = await Client.find({});
  res.send(clients);
});

router.get("/actions", async function(req, res) {
  let clients = await Client.find({}, "_id name owner");
  res.send(clients);
});

module.exports = router;
