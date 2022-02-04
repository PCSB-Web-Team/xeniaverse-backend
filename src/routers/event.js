const {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
} = require("../controller/event");

const eventRouter = require("express").Router();

eventRouter.get("/", getAllEvents);

eventRouter.get("/:eventId", getEventById);

eventRouter.post("/create", createEvent);

eventRouter.put("/update", updateEvent);

module.exports = eventRouter;
