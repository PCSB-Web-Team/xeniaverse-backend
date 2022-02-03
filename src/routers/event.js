const eventRouter = require("express").Router();

eventRouter.get("/", function (req, res) {
  res.send("this is events page");
});

eventRouter.get("/:eventID");

module.exports = eventRouter;
