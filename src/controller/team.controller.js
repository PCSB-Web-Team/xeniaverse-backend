const res = require("express/lib/response");
const Event = require("../models/event.model");
const participantModel = require("../models/participant.model");
const Teams = require("../models/teams.models");
const User = require("../models/user.model");

async function getTeams(req, res) {
  const teamsList = await Teams.find({});
  res.send(teamsList);
}

async function getTeamById(req, res) {
  const { id } = req.params;
  try {
    const teamDetails = await Teams.findById(id);
    if (!teamDetails)
      return res.status(404).send("No Teams exist with this Id");
    res.send(teamDetails);
  } catch (err) {
    res.status(400).send(err.message);
  }
}

async function addTeamMember(teamId) {
  try {
    const update = await Teams.findOneAndUpdate(
      { _id: teamId },
      { $inc: { count: 1 } },
      { new: true }
    );
    return update;
  } catch (error) {
    return false;
  }
}

async function addTeamMemberRequest(req, res) {
  try {
    const updated = await Teams.updateOne(
      { _id: req.params.id },
      { $inc: { count: 1 } },
      { new: true }
    );

    res.send(updated);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function createTeam(req, res) {
  const { name, eventId, userId } = req.body;

  try {
    if (!name || !eventId || !userId)
      return res.status(400).send("Send all details: name, userId, eventId");

    const eventDetails = await Event.findById(eventId).lean();

    if (!eventDetails) return res.status(400).send("Event does not exist");
    if (!eventDetails.teamSize)
      return res
        .status(400)
        .send("This event requires individual participant.");

    const newTeam = await Teams.create({
      name: name,
      eventId: eventId,
      max: eventDetails.teamSize,
    });

    const participant = await participantModel.findOneAndUpdate(
      { eventId, userId },
      { teamId: newTeam._id },
      {
        new: true,
      }
    );

    res.send(newTeam);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getAllTeamsOfEvent(req, res) {
  const { eventId } = req.params;

  try {
    const teams = await Teams.find({ eventId: eventId });
    res.send(teams);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  getTeams,
  getTeamById,
  addTeamMember,
  addTeamMemberRequest,
  createTeam,
  getAllTeamsOfEvent,
};
