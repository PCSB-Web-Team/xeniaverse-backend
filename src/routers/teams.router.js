const {
  getTeams,
  getTeamById,
  createTeam,
  getAllTeamsOfEvent,
} = require("../controller/team.controller");

const TeamRouter = require("express").Router();

// TeamRouter.get("/", getTeams);
TeamRouter.get("/:id", getTeamById);
TeamRouter.post("/", createTeam);
TeamRouter.get("/event/:eventId", getAllTeamsOfEvent);

module.exports = TeamRouter;
