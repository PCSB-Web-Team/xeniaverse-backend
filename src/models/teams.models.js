const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  max: {
    type: Number,
    default: 0,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  isFull: {
    type: Boolean,
    default: false,
    required: false,
  },
  eventId: {
    type: String,
    required: true,
  },
});

teamSchema.pre("save", function (next) {
  this.sum = this.count === this.max;
  next();
});

teamSchema.index({ userId: 1, eventId: 1 }, { unique: true });

const Teams = mongoose.model("Teams", teamSchema);

module.exports = Teams;
