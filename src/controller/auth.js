require("dotenv").config();
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const { generateToken } = require("../middlewares/JWT");
const nodemailer = require("nodemailer");

async function register(req, res) {
  const record = req.body;

  // checking if user already exists

  try {
    const userExist = await User.exists({ email: record.email });
    console.log(userExist);

    //process.env.Salt
    const hashedPassword = await bcrypt.hash(
      record.password,
      parseInt(process.env.SaltRounds)
    );
    const response = await User.create({
      name: record.name,
      email: record.email,
      password: hashedPassword,
      phone: parseInt(record.phone),
      college: record.college,
      branch: record.branch,
      year: record.year,
    });

    const Token = await generateToken(response);
    res.send(Token);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function login(req, res) {
  const record = req.body;
  const userExist = await User.findOne({ email: record.email }).lean();

  if (!userExist) {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }

  const isMatch = await bcrypt.compare(record.password, userExist.password);

  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }

  const token = await generateToken(userExist);
  res.json({
    ...userExist,
    token,
  });
}

async function getProfile(req, res) {
  const userID = req.body.userID;
  const profile = await User.findById(userID);
  if (!profile) {
    return res.status(404).send("User not found");
  }
  res.send(profile);
}

async function forgot(req, res) {}

module.exports = { register, login, forgot, getProfile };
