require("dotenv").config();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { generateToken } = require("../middlewares/JWT");
const sgmail = require("@sendgrid/mail");
// const nodemailer = require("nodemailer");

// const mailTransporter = nodemailer.createTransport({
//   host: "smtp.gmail.com", // hostname
//   secure: true, // TLS requires secureConnection to be false
//   port: 465, // port for secure SMTP
//   // tls: {
//   //   ciphers: "SSLv3",
//   // },
//   auth: {
//     type: "OAuth2",
//     clientId:
//       "528689738488-rc91q7hvm9dh314ape1hrg3u40iumh9m.apps.googleusercontent.com",
//     clientSecret: "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",
//     // user: "testing01022019@outlook.com",
//     // pass: "testing@122019",
//   },
// });

async function getAll(req, res) {
  const list = await User.find({});
  res.send(list);
}

async function register(req, res) {
  const record = req.body;

  try {
    const userExist = await User.exists({ email: record.email });

    //process.env.Salt
    const hashedPassword = await bcrypt.hash(record.password, 10);
    var newUser = await User.create({
      name: record.name,
      email: record.email,
      password: hashedPassword,
      mobile: parseInt(record.mobile),
      college: record.college,
      branch: record.branch,
      year: record.year,
    });

    const token = await generateToken(newUser);

    newUser.token = token;

    res.send(newUser);
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
    const token = await JWT.sign(
      {
        id: user._id,
        email: user.email,
      },
      resetSecret,
      { expiresIn: "10m" }
    );

    const link = `http://localhost:4000/api/auth/reset/${user._id}/${token}`;

    const API_KEY =
      "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";

    sgmail.setApiKey(API_KEY);

    const details = {
      from: {
        name: "Xeniaverse",
        email: "pictpbl@gmail.com",
      },
      to: email,
      subject: "One time password reset link",
      html: `<h1>Here's the password reset link for your xeniaverse account</h1><a href=${`https://xeniaverse.co.in/resetpassword/${user._id}/${token}`}>Password reset</a>`,
    };

    sgmail.send(details).then((response) => res.send("Email has been sent"));

    // mailTransporter.sendMail(details, function (err, info) {
    //   if (err) {
    //     res.send(err);
    //     return;
    //   } else {
    //     res.send(info.response);
    //   }
    // });
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

module.exports = { register, login, forgotLink, getProfile, passReset, getAll };
