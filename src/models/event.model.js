const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  prizes: [{ position: Number, prize: Number }],
  fees: { type: Number },
  teamSize: {
    type: Number,
    default: 1,
  },
  logo: { type: String },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
