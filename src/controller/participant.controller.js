const Event = require("../models/eventSchema");
const { events } = require("../models/participant.model");
const participantModel = require("../models/participant.model");
const User = require("../models/userSchema");

async function newParticipant(req, res) {
  const { userId, eventId } = req.body;
  try {
    if (!userId || !eventId)
      throw new Error("All the field are required: userId, eventId");

    // searching user
    const user = await User.findById(userId).lean();

    // checking if user is present
    if (!user) res.status(404).send("User not found");

    // searching
    const event = await Event.findById(eventId);

    // check if event exist
    if (!event) res.status(404).send("Event not found");

    const participant = await participantModel.create({
      userId,
      eventId,
      name: user.name,
    });

    res.send(participant);
  } catch (err) {
    res.status(400).send(err.message);
  }
}

// TODO - getAllparticipants => /
// TODO - get participant by id => /:id
// TODO - get all participants for event =>  /event/:eventId
// TODO - check participant if present (eventId, userId) => boolean /checkParticipant/:eventId/:userId

module.exports = { newParticipant };
