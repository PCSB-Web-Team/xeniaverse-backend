const mongoose = require("mongoose");

const seminarSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  speaker: { type: String },
});

const Seminar = mongoose.model("Seminar", seminarSchema);

module.exports = Seminar;
