const express = require("express");
const router = express.Router();
const Client = require("../model/Client");
const moment = require("moment");

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

router.get("/analytics/charts/sales", async function(req, res) {
  let clients = await Client.find({}, "firstContact sold");
  let today = moment();
  const thirtyDaysAgo = moment().subtract(30, "days");

  const salesList = clients
    .filter(c => c.sold)
    .filter(c => moment(c.firstContact).isBetween(thirtyDaysAgo, today))
    .map(c => ({ date: moment(c.firstContact) }));

  let countObj = {};

  salesList.forEach(d => {
    let dateStr = d.date.format("L");
    countObj[dateStr] = 0;
  });

  salesList.forEach(s => {
    countObj[s.date.format("L")]++;
  });

  res.send(countObj);
});

router.get("/analytics/charts/ca", async (req, res) => {
  let clients = await Client.find({}, "firstContact");
  const dateList = [
    ...new Set(
      clients
        .filter(c => c.firstContact)
        .map(c => moment(c.firstContact).format("L"))
    )
  ];
  const salesByDate = dateList.map(d => ({ date: d, count: 0 }));

  clients.forEach(d => {
    salesByDate.find(s => {
      if (s.date === moment(d.firstContact).format("L")) {
        s.count++;
      }
    });
  });

  res.send(salesByDate);
});

module.exports = router;
