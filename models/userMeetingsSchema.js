const mongoose = require("mongoose");


const usersSchema = new mongoose.Schema({
  username: String,
});
const meetingsSchema = new mongoose.Schema({
  uid1: String,
  uid2: String,
  date: Date,
});
const Users = new mongoose.model("Users", usersSchema);
const Meetings = new mongoose.model("Meetings", meetingsSchema);

module.exports = { Users, Meetings };
