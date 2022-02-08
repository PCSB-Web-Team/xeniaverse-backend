require("dotenv").config();
const Razorpay = require("razorpay");
const shortid = require("shortid");
const bodyParser = require("body-parser");
const Event = require("../models/eventSchema.model");
const app = require("express")();
app.use(bodyParser.json());
const instance = new Razorpay({
  key_id: "rzp_test_b0RqwCHzzV88K1",
  key_secret: "9gAxxH1gv5dZec3IWqccUDUY",
});

async function razorpayPayment(req, res) {
  // const { eventId, userId } = req.body;
  console.log(req.body.eventId);

  try {
    const event = Event.findById(eventId);
    const amount = event.fees;
    currency = "INR";

    const response = await instance.orders.create({
      amount: amount * 100,
      currency: currency,
      receipt: shortid.generate(),
      // notes: {
      //   eventId: eventId,
      //   userId: userId,
      // },
    });

    // console.log(response);
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
  // console.log(req.body.payload.payment.entity.email);
  // console.log(req.body.payload.payment.entity.contact);
  // console.log(req.body.payload.payment.entity.card.name);
  // console.log(req.body.payload.payment.entity.notes);
  try {
    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    // console.log(digest, req.headers["x-razorpay-signature"]);
    if (digest === req.headers["x-razorpay-signature"]) {
      console.log("request is legit");
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
