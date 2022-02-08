const Event = require("../models/eventSchema.model");
const { events } = require("../models/participant.model");
const participantModel = require("../models/participant.model");
const User = require("../models/userSchema.model");
const { addTeamMember } = require("./team.controller");

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

async function getAllparticipants(req, res) {
  try {
    const allUsers = await participantModel.find({});
    res.send(allUsers);
  } catch (error) {
    res.send(error.message);
  }
}

async function getParticipantById(req, res) {
  try {
    const { id } = req.params;
    const registered = await participantModel.find({ userId: id });
    res.send(registered);
  } catch (error) {
    res.send(error.message);
  }
}

async function getEventById(req, res) {
  try {
    const { id } = req.params;
    const registered = await participantModel.find({ eventId: id });
    res.send(registered);
  } catch (error) {
    res.send(error.message);
  }
}

async function checkIfParticipantPresent(req, res) {
  const { userId, eventId } = req.params;
  console.log(userId, eventId);
  try {
    console.log("Checking");
    const response = await participantModel.findOne({
      userId: userId,
      eventId: eventId,
    });
    if (response) {
      return res.send(true);
    }
    return req.send(false);
  } catch (error) {
    res.send(error.message);
  }
}

async function joinTeam(req, res) {
  const { userId, teamId } = req.body;
  try {
    const status = await addTeamMember(teamId);
    if (!status)
      return res.status(400).send("Team is full, or something went wrong");

    const participant = await participantModel.findOneAndUpdate(
      {
        userId,
        eventId: status.eventId,
      },
      {
        $set: {
          teamId,
        },
      },
      {
        new: true,
      }
    );

    if (!participant) return res.status(404).send("Participant not found");

    res.send(participant);
  } catch (err) {
    res.status(400).send("An Error Occured");
  }
}

// TODO - getAllparticipants => /
// TODO - get participant by id => /:id
// TODO - get all participants for event =>  /event/:eventId
// TODO - check participant if present (eventId, userId) => boolean /checkParticipant/:eventId/:userId

module.exports = {
  newParticipant,
  getAllparticipants,
  getParticipantById,
  getEventById,
  checkIfParticipantPresent,
  joinTeam,
};
