const Router = require("express").Router();
const event = require("../routers/event.router");
const auth = require("../routers/auth.router");
const seminar = require("./seminar.router");
const { ParticipantRouter } = require("./participant.router");
const RazorpayRouter = require("./razorpay.router");

Router.use("/event", event);
Router.use("/auth", auth);
Router.use("/seminar", seminar);
Router.use("/participant", ParticipantRouter);
Router.use("/razorpay", RazorpayRouter);
Router.get("", (req, res) => {
  res.send("Welcome to Xenia-Verse");
});

module.exports = Router;
