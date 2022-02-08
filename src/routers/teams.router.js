const {
  getTeams,
  getTeamById,
  createTeam,
} = require("../controller/team.controller");

const TeamRouter = require("express").Router();

TeamRouter.get("/", getTeams);
TeamRouter.get("/id", getTeamById);
TeamRouter.post("/", createTeam);

module.exports = TeamRouter;
