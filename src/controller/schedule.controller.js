const schedule = require("../models/schedule.model");

const part1 = new schedule({
  title: "Seminar 1",
  location: "MS Teams",
  description: "12:00 - 13:00",
  buttonText: "Link",
  date: "26 Jan 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});

const part2 = new schedule({
  title: "Seminar 2",
  location: "MS Teams",
  description: "14:00 - 15:00",
  buttonText: "Link",
  date: "27 Jan 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});
const part3 = new schedule({
  id: 3,
  title: "Seminar 3",
  location: "MS Teams",
  description: "16:00 - 17:00",
  buttonText: "Link",
  date: "28 Jan 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});

const part4 = new schedule({
  title: "Event 1",
  location: "Xeniaverse Website",
  description: "17:00 - 18:00",
  buttonText: "Link",
  date: "29 Jan 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});
const part5 = new schedule({
  title: "Event 2",
  location: "Xeniaverse Website",
  description: "1:00 - 2:00",
  buttonText: "Link",
  date: "30 Jan 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});

const part6 = new schedule({
  title: "Event 3",
  location: "Xeniaverse Website",
  description: "2:00 - 3:00",
  date: "31 Jan 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});

const part7 = new schedule({
  title: "Event 4",
  location: "Xeniaverse Website",
  description: "2:00 - 3:00",
  date: "31 Jan 2022",
  icon: "https://drive.google.com/uc?export=view&id=1PWTwh_NBEFn3ZZMqaFZR8ukYecawoMTa",
});

part1.save();
part2.save();
part3.save();
part4.save();
part5.save();
part6.save();
part7.save();

async function getallScheduleDetails(req, res) {
  try {
    const response = await schedule.find({});
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = { getallScheduleDetails };
