const {
  razorpayPayment,
  razorpayVerification,
} = require("../controller/razorpay.controller");

const RazorpayRouter = require("express").Router();

RazorpayRouter.post("/", razorpayPayment);
RazorpayRouter.post("/verification", razorpayVerification);
module.exports = RazorpayRouter;
