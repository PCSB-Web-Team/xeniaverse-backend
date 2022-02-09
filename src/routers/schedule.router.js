const { getallScheduleDetails } = require("../controller/schedule.controller");

const scheduleRouter = require("express").Router();

scheduleRouter.get("/", getallScheduleDetails);

module.exports = scheduleRouter;
