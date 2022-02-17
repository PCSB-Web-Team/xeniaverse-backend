const {
  newParticipant,
  getAllparticipants,
  getParticipantById,
  getEventById,
  checkIfParticipantPresent,
  joinTeam,
  getTeamMembers,
  getAllparticipantsWithEmailData,
} = require("../controller/participant.controller");
const ParticipantRouter = require("express").Router();

ParticipantRouter.post("/create", newParticipant);
ParticipantRouter.get("/", getAllparticipants);
ParticipantRouter.get("/:id", getParticipantById);
ParticipantRouter.get("/event/:id", getEventById);
ParticipantRouter.get(
  "/checkParticipant/:userId/:eventId",
  checkIfParticipantPresent
);
ParticipantRouter.post("/jointeam", joinTeam);
ParticipantRouter.get("/team/:teamId", getTeamMembers);
ParticipantRouter.get("/withemail", getAllparticipantsWithEmailData);

module.exports = { ParticipantRouter };
