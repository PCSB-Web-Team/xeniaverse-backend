require("dotenv").config();
const Razorpay = require("razorpay");
const shortid = require("shortid");
const bodyParser = require("body-parser");
const Event = require("../models/eventSchema.model");
const participantModel = require("../models/participant.model");
const app = require("express")();
app.use(bodyParser.json());
const instance = new Razorpay({
  key_id: "rzp_test_b0RqwCHzzV88K1",
  key_secret: "9gAxxH1gv5dZec3IWqccUDUY",
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
  const secret = "atharva";
  const crypto = require("crypto");
  console.log(req.body.payload.payment.entity.card.name);
  console.log(req.body.payload.payment.entity.notes);
  try {
    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    if (digest === req.headers["x-razorpay-signature"]) {
      const response = await participantModel.create({
        userId: req.body.payload.payment.entity.notes.userId,
        eventId: req.body.payload.payment.entity.notes.eventId,
      });
      console.log("response");
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
