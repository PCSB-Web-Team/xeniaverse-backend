const schedule = require("../models/schedule.model");

const part1 = new schedule({
  title: "IDEAZEST (ELIMINATION BEGINS)",
  location: "D2C",
  description: "12:00 AM",
  buttonText: "Link",
  date: "14 FEB 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});

const part2 = new schedule({
  title: "IDEAZEST (ELIMINATION ENDS)",
  location: "D2C",
  description: "11:59 PM",
  buttonText: "Link",
  date: "16 FEB 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});
const part3 = new schedule({
  id: 3,
  title: "INAUGURATION CEREMONY",
  location: "MS TEAMS",
  description: "6:00 PM - 7:00 PM",
  buttonText: "Link",
  date: "18 FEB 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});

const part4 = new schedule({
  title: "TALK OF TITANS (EXTEMPORE)",
  location: "MS TEAMS & GMEET",
  description: "8:00 PM - 10:00 PM",
  buttonText: "Link",
  date: "18 FEB 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});
const part5 = new schedule({
  title: "TALK OF TITANS (GROUP DISCUSSION)",
  location: "MS TEAMS & GMEET",
  description: "11:00 AM - 1:00 PM",
  buttonText: "Link",
  date: "19 FEB 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});

const part6 = new schedule({
  title: "SNAPHUNT",
  location: "Xeniaverse App",
  description: "11:00 AM - 3:30 PM",
  date: "19 FEB 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});

const part7 = new schedule({
  title: "TALK OF TITANS (THE ULTIMATE DEBATE)",
  location: "MS TEAMS & GMEET",
  description: "4:30 PM - 7:00 PM",
  date: "19 FEB 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});

const part8 = new schedule({
  title: "CODEVERSE (ELIMINATION ROUND)",
  location: "PCSB CODING PLATFORM",
  description: "7:05 PM - 9:20 PM",
  date: "19 FEB 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});

const part9 = new schedule({
  title: "CODEVERSE (FINAL ROUND)",
  location: "PCSB CODING PLATFORM",
  description: "11:05 AM - 1:20 PM",
  date: "20 FEB 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});

const part10 = new schedule({
  title: "IDEAZEST (FINAL ROUND)",
  location: "D2C",
  description: "2:30 PM - 5:00 PM",
  date: "20 FEB 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});

const part11 = new schedule({
  title: "CLOSING CEREMONY",
  location: "MS TEAMS",
  description: "8:00 PM - 9:30 PM",
  date: "20 FEB 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});

part1.save();
part2.save();
part3.save();
part4.save();
part5.save();
part6.save();
part7.save();
part8.save();
part9.save();
part10.save();
part11.save();

async function getallScheduleDetails(req, res) {
  try {
    const response = await schedule.find({});
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = { getallScheduleDetails };
