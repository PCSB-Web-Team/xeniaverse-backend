const seminarDetailsRouter = require("express").Router();
const Seminar = require("../models/seminarSchema.model");

// const blockchain = new Seminar({
//   name: "Blockchain seminar",
//   description: "sit amet tellus cras adipiscing enim eu turpis egestas pretium",
//   speaker: "Vitalik Buterin",
// });

// const ml = new Seminar({
//   name: "Machine learning seminar",
//   description: "sit amet tellus cras adipiscing enim eu turpis egestas pretium",
//   speaker: "Andrew Ng",
// });

// const supercars = new Seminar({
//   name: "supercars seminar",
//   description: "sit amet tellus cras adipiscing enim eu turpis egestas pretium",
//   speaker: "Elon Musk",
// });

// blockchain.save();
// ml.save();
// supercars.save();

async function getAllSeminars(req, res) {
  try {
    const allSeminars = await Seminar.find({});
    res.send(allSeminars);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getSeminarById(req, res) {
  try {
    const seminarId = req.params.seminarId;

    //todo-use findOne and then if
    const seminarById = await Seminar.findOne({ _id: seminarId });
    if (!seminarById) {
      return res.status(400).send("Invalid Seminar ID");
    }

    res.send(seminarById);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function createSeminar(req, res) {
  const { name, description, speaker } = req.body;

  try {
    const newSeminar = await Seminar.create({
      name: name,
      description: description,
      speaker: speaker,
    });
    res.send(newSeminar);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = { getAllSeminars, getSeminarById, createSeminar };
