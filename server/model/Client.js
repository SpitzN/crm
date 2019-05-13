const data = require("../../data.json");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/crm", { useNewUrlParser: true });

const clientsSchema = new Schema({
  name: String,
  email: String,
  firstContact: Date,
  emailType: String,
  sold: Boolean,
  owner: String,
  country: String
});

const Client = mongoose.model("Client", clientsSchema);

// const saveToDB = function(data) {
//   data.map(client => {
//     let clientt = new Client(client);
//     clientt.save();
//   });
// };

// saveToDB(data);

module.exports = Client;
