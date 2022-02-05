require("dotenv").config();
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { generateToken } = require("../middlewares/JWT");
const nodemailer = require("nodemailer");
const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pictpbl@gmail.com",
    pass: "pictpbl@2021",
  },
});

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

async function forgotLink(req, res) {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email: email }).lean();
    if (!user) {
      return res.send("Please provide a valid email address");
    }

    const resetSecret = process.env.Secret + user.password;
    const token = JWT.sign(
      {
        id: user._id,
        email: user.email,
      },
      resetSecret,
      { expiresIn: "10m" }
    );

    const link = `http://localhost:4000/api/auth/reset/${user._id}/${token}`;

    const details = {
      from: "pictpbl@gmail.com",
      to: email,
      subject: "One time password reset",
      html: `<h1>Password reset link</h1><a href=${`http://localhost:4000/api/auth/reset/${user._id}/${token}`}>Password reset</a>`,
    };
    mailTransporter.sendMail(details);
    res.send("link has been sent");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function passReset(req, res) {
  const { id, token } = req.params;
  const { password, password2 } = req.body;

  try {
    const user = await User.findOne({ _id: id }).lean();
    if (!user) {
      return res.send("Please provide a valid email address");
    }

    const resetSecret = process.env.Secret + user.password;
    const payload = JWT.verify(token, resetSecret);

    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.SaltRounds)
    );

    const response = await User.findOneAndUpdate(
      {
        _id: id,
      },
      {
        password: hashedPassword,
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

module.exports = { register, login, forgotLink, getProfile, passReset };
