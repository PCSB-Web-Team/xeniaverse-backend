const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  introduction: { type: String },
  platform: { type: String },
  prizes: [{ position: Number, prize: Number }],
  schedule: [{ round: Number, datetime: String }],
  rules: [
    {
      round: Number,
      roundName: String,
      roundDesc: String,
      roundRules: [{ type: String }],
    },
  ],
  fees: { type: Number },
  teamSize: {
    type: Number,
    default: 1,
  },
  logo: { type: String },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
