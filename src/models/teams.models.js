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
    default: 1,
  },
  isFull: {
    type: Boolean,
    default: false,
  },
  eventId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
});

teamSchema.index({ name: 1, eventId: 1 }, { unique: true });

teamSchema.pre("save", function (next) {
  this.isFull = this.count >= this.max;
  next();
});

const Teams = mongoose.model("Teams", teamSchema);

module.exports = Teams;
