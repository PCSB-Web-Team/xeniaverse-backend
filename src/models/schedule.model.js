const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  title: { type: String },
  location: { type: String },
  description: { type: String },
  date: { type: String },
  icon: { type: String },
});

const scheduleModel = mongoose.model("schedule", scheduleSchema);

module.exports = scheduleModel;
