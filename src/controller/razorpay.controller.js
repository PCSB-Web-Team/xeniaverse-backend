require("dotenv").config();
const Razorpay = require("razorpay");
const shortid = require("shortid");
const bodyParser = require("body-parser");
const Event = require("../models/event.model");
const participantModel = require("../models/participant.model");
const app = require("express")();
app.use(bodyParser.json());
const instance = new Razorpay({
  key_id: process.env.razorpayKey_id,
  key_secret: process.env.razorpayKey_secret,
});

async function razorpayPayment(req, res) {
  const { eventId } = req.body;

  try {
    const event = await Event.findOne({ _id: eventId }).lean();
    const amount = event.fees;
    currency = "INR";

    const response = await instance.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: shortid.generate(),
    });

    res.json({
      id: response.id,
      currency: "INR",
      amount: response.amount,
    });
  } catch (error) {
    res.send(error.message);
  }
}

async function razorpayVerification(req, res) {
  const secret = process.env.razorpayVerification_secret;
  const crypto = require("crypto");
  const name = req.body.payload.payment.entity.card.name;
  const eventId = req.body.payload.payment.entity.notes.eventId;
  const userId = req.body.payload.payment.entity.notes.userId;

  try {
    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    if (digest === req.headers["x-razorpay-signature"]) {
      const response = await participantModel.create({
        userId: userId,
        eventId: eventId,
        name: name,
      });
      // process it
    } else {
      // pass it
      res.status(400);
    }
    res.json({ status: "ok" });
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = { razorpayPayment, razorpayVerification };
