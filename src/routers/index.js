const Router = require("express").Router();
const event=require("../routers/event");
const auth=require("../routers/auth");

Router.use("/event",event);
Router.use("/auth",auth);

Router.get("", (req, res) => {
  res.send("Welcome to Xenia-Verse");
});

module.exports = Router;