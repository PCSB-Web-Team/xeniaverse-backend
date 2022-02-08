const eventDetailRouter = require("express").Router();
const Event = require("../models/eventSchema.model");

const ideazest = new Event({
  name: "Ideazest",
  logo: "https://drive.google.com/uc?export=view&id=15RZP8NPhRaY55gx3F45NXxi_xsUFEyKB",
  fees: 200,
  platform: "D2C",
  teamSize: 4,
  description:
    "IDEAZEST is an intercollege event where we bring your ideas to life as you strive to be elite. We invite all innovators and techno geeks to come and get their creativity going.",
  introduction:
    "Have an idea that you have been mulling over for a while now? Do you think the world is ready to know what you’ve got brewing? Head over and signup for Ideazest Challenge to compete alongside other innovators to see if your idea sticks! IDEAZEST is an intercollege event where we bring your ideas to life as you strive to be elite. We invite all innovators and techno geeks to come and get their creativity going. With a great team and skilled panel of judges, this IDEAZEST is an ideal platform to put your knowledge to use and network with peers.",
  prizes: [
    {
      pos: 1,
      prize: 10000,
    },
    {
      pos: 2,
      prize: 5000,
    },
  ],
  schedule: [
    {
      round: 1,
      datetime: "16th Feb '22 (Monday) 11:59 pm",
    },
    {
      round: 2,
      datetime: "20th Feb '22 (Sunday) 11:59 pm",
    },
  ],
  rules: [
    {
      round: 1,
      roundName: "Elimination Round",
      roundDesc: "",
      roundRules: [
        "All the Registered teams are required to upload a presentation (ppt) stating their problem statement, the reason behind choosing the problem statement and are expected to give an abstract of the problem statement chosen. The teams will be shortlisted based on the presentation.",
        "Participants can choose any problem statement from the themes mentioned.  Environment & Sustainability, Healthcare, Finance and Banking, Agriculture and Rural Development, Education, Defense and Security, Blockchain, Lifestyle, and Entertainment media.",
        "Solutions in accordance with other domains will not be accepted",
        "Elimination Round will commence on 14th February 2022 and end on 16 February 2022. All the registered participants are requested to upload their PPT and video (optional ) from 14th Feb to 16th Feb 11:59 PM.",
        "The video should not exceed 5 mins.",
        "All the PPT will be evaluated and the Results for the Round 1 will be declared on 17th February evening . All the short-listed participants will be informed about the result through mails.",
      ],
    },
    {
      round: 2,
      roundName: "Final round",
      roundDesc:
        "All the shortlisted teams will be required to present their ideas and solutions before a skilled panel of judges",
      roundRules: [
        "The Final Round will begin at 2:30 PM on 20th February 2022.",
        "The order of presentation will be floated on 19th February 2022.",
        "Each team is requested to present their presentations at the allotted time slots only.",
        "All the teams are requested to upload their presentations in .pptx format on 20th February before 12 noon.",
        "PPT’s must be named as: <team number_name of team leader>",
        "After the presentation there will be a 5-minute Q&A session where the participants will be asked to answer questions on their presentations.",
        "The participants will be evaluated simultaneously along with their presentations",
        "Incase of a tie, the uploaded presentations will be evaluated to break the tie and announce winners.",
        "The decision of the judges and the organizing team will be final.",
        "The results will be declared on the last day of our Techfest ‘XENIAVERSE’.",
      ],
    },
  ],
});

const snaphunt = new Event({
  name: "Snaphunt",
  logo: "https://drive.google.com/uc?export=view&id=1HtlqA8XJ6nB8jMCowhlfYTuibaS96quM",
  fees: 30,
  platform: "MS Teams & Snaphunt App",
  teamSize: 4,
  description:
    "SNAPHUNT is an interesting team game where each team will participate and compete to solve challenging tasks and brainstorm their way out of some really tricky riddles.",
  introduction:
    "To all the hunters... are you ready to dive in the Hunt and trail for the crackle to create history??SNAPHUNT is an interesting team game where each team will participate and compete to solve challenging tasks and brainstorm their way out of some really tricky riddles. SNAPHUNT enables every player to connect with his/her teammates in a way never before. This game will tickle all the parts of your brain and will force you to think out of the box.So get ready to hunt like never before! We invite all players to come together and let your creativity boost you to glory. With a great team and amazing brains PCSB gives you a great opportunity to use your creativity and bring out the best in you for the given tasks..",
  prizes: [
    {
      pos: 1,
      prize: 6000,
    },
    {
      pos: 2,
      prize: 3000,
    },
  ],
  schedule: [
    {
      round: 1,
      datetime: "19th Feb '22 (Saturday)11:00 am to 3:30 pm",
    },
  ],
  rules: [
    {
      round: 1,
      roundName: "Single Round",
      roundDesc: "",
      roundRules: [
        "All participants will have to register on the Snaphunt App and then pay INR 30/- individually.",
        "If you are participating solo, we will provide you with a team and also provide you with the team name.",
        "If you are participating as a team, make sure to appoint one team leader and decide a unique team name.",
        "Submissions will be taken on Snaphunt App created by the AppDevelopment Team of PCSB.",
        "A user once logged in app from a device ,he/she cannot use another device for login.",
        "Participants should make sure that they play the game with the same device which they will be using to make the payment.",
        "Whatsapp group will be made of pre defined team leaders for communication.",
        "Each task will have varying points depending on difficulty.",
        "Points per team will be calculated depending on the number of tasks completed correctly.",
        "Any plagiarism found will result in disqualification of the team.",
        "Once any member from the team submits a task, it can't be changed by any of the team member .",
        "After the end of allotted time, the game will be automatically submitted.",
        "We will communicate further details once participants will register on the App.",
      ],
    },
  ],
});

const codeverse = new Event({
  name: "Codeverse",
  logo: "https://drive.google.com/uc?export=view&id=1Rld8lz72mzDZLuZeOUExBGHFaZk6mMp5",
  fees: 0,
  platform: "Hackerrank",
  teamSize: 1,
  description:
    "CODEVERSE is one of the technical event organized by PCSB team to give you the opportunity to explore the road with the code.",
  introduction:
    "Have you been yearning to put your coding abilities on display? Are your dazzling algorithms good enough to earn you the title of top coder? Take this opportunity to take over the world! With critical thinking and analytical abilities becoming increasingly important in today's competitive environment, it's only right that the complicated world of computers get a fair piece of the spotlight and present something appropriately tough.",
  prizes: [
    {
      pos: 1,
      prize: 6000,
    },
    {
      pos: 2,
      prize: 3000,
    },
  ],
  schedule: [
    {
      round: 1,
      datetime: "19th Feb '22 (Saturday) 7:05 pm to 9:20 pm",
    },
    {
      round: 2,
      datetime: "20th Feb '22 (Sunday) 11:05 am to 1:20 pm",
    },
  ],
  rules: [
    {
      round: 1,
      roundName: "Elimination Round",
      roundDesc: "",
      roundRules: [
        "You will be given 6-7 problems and 2 hours and 15 minutes to solve them.",
        "One problem will of easy difficulty, one of hard difficulty and four or five medium level difficulty.",
        "The contest will be hosted on https://www.hackerrank.com/ (Hackerrank website).",
        "The contest link will be shared with the registered participants well in advance.",
        "The Results of Round 1 will be declared on 19th February itself.",
        "All the shortlisted participants will be informed about the result through mail.",
      ],
    },
    {
      round: 2,
      roundName: "Final round",
      roundDesc: "",
      roundRules: [
        "Only the shortlisted candidates from Round 1 will qualify for the Final Round. ",
        "The contest will be hosted on https://www.hackerrank.com/ (Hackerrank website).",
        "The contest link will be shared with the registered participants well in advance.",
        "You will be given 5-6 problems and 2 hours and 15 minutes to solve them.",
        "This round will only have problems of medium and hard difficulty.",
      ],
    },
  ],
});

const debate = new Event({
  name: "Talk Of Titans",
  logo: "https://drive.google.com/uc?export=view&id=14Vq51g12U2toQqSG_5L12aeV_k-9jtcO",
  fees: 30,
  platform: "MS Teams and Gmeet",
  teamSize: 1,
  description:
    "The Talk of Titans is a comprehensive debate competitions which consists of Extempore, Group Discussion and The Ultimate Debate",
  introduction:
    "Extempore is the first round of “Talk of Titans”. Designed to test the participants ability to think on their feet and express their opinions articulately with a negligible amount of preparation time. Group Discussion is the second round of “Talk of Titans”.  A group discussion sets the stage for the contestants to express their views on any topic, listen to the views of others and come to a conclusion. The 3rd round will consist of a debate of Asian Parliament Debate format or the APD format.",
  prizes: [
    {
      pos: 1,
      prize: 6000,
    },
    {
      pos: 2,
      prize: 3000,
    },
  ],
  schedule: [
    {
      round: 1,
      datetime: "18th Feb '22 (Friday) 8:00 PM to 10:00 PM",
    },
    {
      round: 2,
      datetime: "19th Feb '22 (Saturday) 11:00 AM to 1:00 PM",
    },
    {
      round: 3,
      datetime: "19th Feb '22 (Saturday) 4:30 PM to 7:00 PM",
    },
  ],
  rules: [
    {
      round: 1,
      roundName: "Extempore",
      roundDesc: "",
      roundRules: [
        "Each participant will be given a maximum of 2 minutes to speak on their given topic.",
        "Each participant will be shown their topic 2 minutes prior to their turn and will  have 2 minutes to prepare for the same.",
        "The participants will be judged on the basis of the following criteria: a. Following the time constraint b. Quality of the content: content should be clear, concise and precise and pertaining to the topic. c. Manner of speech: confidence and articulation",
      ],
    },
    {
      round: 2,
      roundName: "Group Discussion",
      roundDesc: "",
      roundRules: [
        "A topic will be declared when the meeting starts and a preparation time of 10 mins will be given to the participants.",
        "Once the platform is open for discussion, the participants will raise their hands on Teams to get their chance.",
        "Each participant will get approximately 2 mins to speak/contribute to the topic in one turn.",
        "Exceeding the time constraint will result in significant reduction in marks.",
        "No cross talk allowed. Please respect other participants' opinions.",
        "After most of the participants finish giving their views on the topic, the previous participants can again put forth their views by raising their hands again.",
        "The total discussion time will be 50 mins.",
        "The participants will be judged on the clarity of the ideas and views they contribute to the discussion, their oratory skills, their ability to listen to and respect the opinions of their fellow contestants and the conclusion they reach at the end of the discussion.",
      ],
    },
    {
      round: 3,
      roundName: "The Ultimate Debate",
      roundDesc: "",
      roundRules: [
        "The 3rd round will consist of a debate of Asian Parliament Debate format or the APD format. The finalists will be divided into teams of 3 and would be expected to go head-to-head.",
        "The motion for the debate will be declared 20 minutes prior and you’d be portraying a specific role. A comprehensive explanation of the APD format will be offered prior to the event to all the finalists.",
        "It’ll be a battle of words where your concise unerring knowledge and consciousness would give you an edge over others! Rational and alluring arguments will help you win laurels in the debate.",
        "An opportunity to rebut the rivalry team and manifest your argument. Just a step from vision to reality to refine your oratory skills.",
      ],
    },
  ],
});

ideazest.save();
snaphunt.save();
codeverse.save();
debate.save();

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

  const event = await Event.findOne({ name: name });
  const prizeId = event.prizes[prizeposition]._id;

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
