const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  userID: String,
  registeredEvent: String,
});

const participant = mongoose.model("participant", participantSchema);

module.exports = participant;
