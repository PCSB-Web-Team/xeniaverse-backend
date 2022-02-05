const Router = require("express").Router();
const event = require("../routers/event");
const auth = require("../routers/auth");
const seminar = require("../routers/seminar");
const { ParticipantRouter } = require("./participant.router");

Router.use("/event", event);
Router.use("/auth", auth);
Router.use("/seminar", seminar);
Router.use("/participant", ParticipantRouter);
Router.get("", (req, res) => {
  res.send("Welcome to Xenia-Verse");
});

module.exports = Router;
