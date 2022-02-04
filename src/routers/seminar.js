const {
  getAllSeminars,
  getSeminarById,
  createSeminar,
} = require("../controller/seminar");

const seminarRouter = require("express").Router();

seminarRouter.get("/", getAllSeminars);
seminarRouter.get("/:seminarId", getSeminarById);
seminarRouter.post("/create", createSeminar);

module.exports = seminarRouter;
