const eventDetailRouter = require("express").Router();
const Event = require("../models/eventSchema");

// const classicCP = new Event({
//   name: "Classic CP",
//   description: "sit amet tellus cras adipiscing enim eu turpis egestas pretium",
//   prizes: [
//     { position: 1, prize: 5000 },
//     { position: 2, prize: 3000 },
//     { position: 3, prize: 1000 },
//   ],
//   Fees: 100,
// });

// const ideathon = new Event({
//   name: "Ideathon",
//   description: "sit amet tellus cras adipiscing enim eu turpis egestas pretium",
//   prizes: [
//     { position: 1, prize: 5000 },
//     { position: 2, prize: 3000 },
//     { position: 3, prize: 1000 },
//   ],
//   Fees: 200,
// });

// const snaphunt = new Event({
//   name: "Snaphunt",
//   description: "sit amet tellus cras adipiscing enim eu turpis egestas pretium",
//   prizes: [
//     { position: 1, prize: 5000 },
//     { position: 2, prize: 3000 },
//     { position: 3, prize: 1000 },
//   ],
//   Fees: 300,
// });

// const debate = new Event({
//   name: "Debate",
//   description: "sit amet tellus cras adipiscing enim eu turpis egestas pretium",
//   prizes: [
//     { position: 1, prize: 5000 },
//     { position: 2, prize: 3000 },
//     { position: 3, prize: 1000 },
//   ],
//   Fees: 400,
// });

// classicCP.save();
// ideathon.save();
// snaphunt.save();
// debate.save();

async function getAllEvents(req, res) {
  try {
    const allEvents = await Event.find({});
    res.send(allEvents);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getEventById(req, res) {
  try {
    const eventId = req.params.eventId;

    //todo-use findOne and then if
    const eventById = await Event.findOne({ _id: eventId });
    if (!eventById) {
      return res.status(400).send("Invalid Event ID");
    }
    res.send(eventById);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function createEvent(req, res) {
  const eventDetails = req.body;
  try {
    const newEvent = await Event.create({
      name: eventDetails.name,
      description: eventDetails.description,
      prizes: [
        {
          position: eventDetails.prizes[0].position,
          prize: eventDetails.prizes[0].prize,
        },
        {
          position: eventDetails.prizes[1].position,
          prize: eventDetails.prizes[1].prize,
        },
        {
          position: eventDetails.prizes[2].position,
          prize: eventDetails.prizes[2].prize,
        },
      ],
      fees: eventDetails.fees,
    });

    res.send(newEvent);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function updateEvent(req, res) {
  const { name, description, prizes, fees } = req.body;

  const prizeposition = prizes.position - 1;
  console.log(prizeposition);

  const event = await Event.findOne({ name: name });
  const prizeId = event.prizes[prizeposition]._id;
  console.log(prizeId);

  try {
    const response = await Event.findOneAndUpdate(
      {
        "prizes._id": prizeId,
      },
      {
        $set: {
          name: name,
          description: description,
          fees: fees,
          "prizes.$.prize": prizes.prize,
        },
      },
      {
        new: true,
      }
    );

    res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = { getAllEvents, getEventById, createEvent, updateEvent };
