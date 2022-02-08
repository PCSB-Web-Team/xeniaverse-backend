// getTeams
// getTeamById
// addTeamMember
// createTeam

const res = require("express/lib/response");
const Event = require("../models/eventSchema.model");
const Teams = require("../models/teams.models");

async function getTeams(req, res) {
  const teamsList = await Teams.find({});
  res.send(teamsList);
}

async function getTeamById(req, res) {
  const { id } = req.params;
  try {
    const teamDetails = await Teams.findById(id);
    if (!teamDetails) res.status(404).send("No Teams exist with this Id");
    res.send(teamDetails);
  } catch (err) {
    res.status(400).send(err.message);
  }
}

async function addTeamMember(teamId) {
  try {
    const update = await Teams.updateOne(
      { _id: teamId },
      { $inc: { count: 1 } }
    );
    return true;
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
  const { name, eventId } = req.body;
  try {
    if (!name || !eventId) res.send("Send all details: name, size, eventId");

    const eventDetails = await Event.findById(eventId).lean();

    if (!eventDetails) res.status(400).send("Event does not exist");

    const newTeam = await Teams.create({
      name,
      eventId,
      max: eventDetails.teamSize,
    });

    res.send(newTeam);
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
};
