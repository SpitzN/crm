const express = require("express");
const router = express.Router();
const Client = require("../model/Client");

router.get("/sanity", function(req, res) {
  res.send("OK!");
});

router.get("/clients", async function(req, res) {
  let clients = await Client.find({});
  res.send(clients);
});

router.get("/client/actions", async function(req, res) {
  let clients = await Client.find({}, "_id name owner");
  res.send(clients);
});

router.put("/client/:id", function(req, res) {
  const clientID = req.params.id;
  const UpdateProperty = req.query.propToUpdate;
  const value = req.body.value;

  Client.findOneAndUpdate(
    { _id: clientID },
    { $set: { [UpdateProperty]: value } },
    function(client) {
      console.log(`updated ${clientID} property ${UpdateProperty} to ${value}`);
      res.send(`changed owner of client with id ${clientID}`);
    }
  );
});

router.post("/client/new", async (req, res) => {
  let client = req.body;
  let newClient = await new Client({
    name: client.name,
    email: client.email,
    firstContact: client.firstContact,
    emailType: client.emailType,
    sold: client.sold,
    owner: client.owner,
    country: client.country
  });

  newClient.save();
  res.send(console.log(`saved new client ${client.name} to DB`));
});

module.exports = router;
