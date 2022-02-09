const schedule = require("../models/schedule.model");

async function getallScheduleDetails(req, res) {
  const part1 = await schedule.create({
    title: "IDEAZEST (ELIMINATION BEGINS)",
    location: "D2C",
    description: "12:00 AM",
    buttonText: "Link",
    date: "14 FEB 2022",
    icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
  });

  const part2 = await schedule.create({
    title: "IDEAZEST (ELIMINATION ENDS)",
    location: "D2C",
    description: "11:59 PM",
    buttonText: "Link",
    date: "16 FEB 2022",
    icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
  });
  const part3 = await schedule.create({
    id: 3,
    title: "INAUGURATION CEREMONY",
    location: "MS TEAMS",
    description: "6:00 PM - 7:00 PM",
    buttonText: "Link",
    date: "18 FEB 2022",
    icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
  });

  const part4 = await schedule.create({
    title: "TALK OF TITANS (EXTEMPORE)",
    location: "MS TEAMS & GMEET",
    description: "8:00 PM - 10:00 PM",
    buttonText: "Link",
    date: "18 FEB 2022",
    icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
  });
  const part5 = await schedule.create({
    title: "TALK OF TITANS (GROUP DISCUSSION)",
    location: "MS TEAMS & GMEET",
    description: "11:00 AM - 1:00 PM",
    buttonText: "Link",
    date: "19 FEB 2022",
    icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
  });

  const part6 = await schedule.create({
    title: "SNAPHUNT",
    location: "Xeniaverse App",
    description: "11:00 AM - 3:30 PM",
    date: "19 FEB 2022",
    icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
  });

  const part7 = await schedule.create({
    title: "TALK OF TITANS (THE ULTIMATE DEBATE)",
    location: "MS TEAMS & GMEET",
    description: "4:30 PM - 7:00 PM",
    date: "19 FEB 2022",
    icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
  });

  const part8 = await schedule.create({
    title: "CODEVERSE (ELIMINATION ROUND)",
    location: "PCSB CODING PLATFORM",
    description: "7:05 PM - 9:20 PM",
    date: "19 FEB 2022",
    icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
  });

  const part9 = await schedule.create({
    title: "CODEVERSE (FINAL ROUND)",
    location: "PCSB CODING PLATFORM",
    description: "11:05 AM - 1:20 PM",
    date: "20 FEB 2022",
    icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
  });

  const part10 = await schedule.create({
    title: "IDEAZEST (FINAL ROUND)",
    location: "D2C",
    description: "2:30 PM - 5:00 PM",
    date: "20 FEB 2022",
    icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
  });

  const part11 = await schedule.create({
    title: "CLOSING CEREMONY",
    location: "MS TEAMS",
    description: "8:00 PM - 9:30 PM",
    date: "20 FEB 2022",
    icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
  });

  try {
    const response = await schedule.find({});
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = { getallScheduleDetails };
