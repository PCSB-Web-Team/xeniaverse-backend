const { newParticipant } = require("../controller/participant.controller");
const ParticipantRouter = require("express").Router();

ParticipantRouter.post("/", newParticipant);

module.exports = { ParticipantRouter };
