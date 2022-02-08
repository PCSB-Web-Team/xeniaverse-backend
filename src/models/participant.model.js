const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  eventId: {
    type: String,
    required: true,
  },
  teamId: {
    type: mongoose.SchemaTypes.ObjectId,
  },
});

participantSchema.index({ userId: 1, eventId: 1 }, { unique: true });

const participantModel = mongoose.model("Participant", participantSchema);

module.exports = participantModel;
