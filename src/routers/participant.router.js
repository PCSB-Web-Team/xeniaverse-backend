const {
  newParticipant,
  getAllparticipants,
  getParticipantById,
  getEventById,
  checkIfParticipantPresent,
  joinTeam,
} = require("../controller/participant.controller");
const ParticipantRouter = require("express").Router();

ParticipantRouter.post("/create", newParticipant);
ParticipantRouter.get("/", getAllparticipants);
ParticipantRouter.get("/:id", getParticipantById);
ParticipantRouter.get("/event/:id", getEventById);
ParticipantRouter.get(
  "/checkParticipant/:eventId/:userId",
  checkIfParticipantPresent
);
ParticipantRouter.post("/jointeam", joinTeam);

module.exports = { ParticipantRouter };
