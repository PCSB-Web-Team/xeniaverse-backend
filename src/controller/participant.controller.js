const Event = require("../models/event.model");
const { events } = require("../models/participant.model");
const participantModel = require("../models/participant.model");
const Teams = require("../models/teams.models");
const User = require("../models/user.model");
const { addTeamMember } = require("./team.controller");

async function newParticipant(req, res) {
  const { userId, eventId } = req.body;
  try {
    if (!userId || !eventId)
      throw new Error("All the field are required: userId, eventId");

    // searching user
    const user = await User.findById(userId).lean();

    // checking if user is present
    if (!user) return res.status(404).send("User not found");

    // searching
    const event = await Event.findById(eventId);

    // check if event exist
    if (!event) return res.status(404).send("Event not found");

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
    const team = await Teams.findById(teamId);

    if (!team) return res.status(404).send("Team not found");

    if (team.isFull) return res.status(400).send("Team is Full");

    const participant = await participantModel.findOne({
      userId,
      eventId: team.eventId,
    });

    if (!participant)
      return res
        .status(400)
        .send("Particiant has not participated for this event");

    participant.teamId = teamId;

    team.count = team.count + 1;

    await participant.save();
    await team.save();

    res.send(participant);
  } catch (err) {
    res.status(400).send(err.message);
  }
}

async function getTeamMembers(req, res) {
  const { teamId } = req.params;
  const team = await Teams.find({});
  res.send(team);
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
  getTeamMembers,
};
