const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  eventId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  teamId: {
    type: mongoose.SchemaTypes.ObjectId,
    default: null,
  },
});

participantSchema.index({ userId: 1, eventId: 1 }, { unique: true });

const participantModel = mongoose.model("Participant", participantSchema);

module.exports = participantModel;
