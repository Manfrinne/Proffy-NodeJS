const proffys = [
  {
    name: "Diego Fernandes", avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4", whatsapp:"62 992008855", bio: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.", subject: "Química", cost: "20", weekday: [0], time_from:[720], time_to:[1220]
  },

  {
    name: "Danielle Evangelista", avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4", whatsapp:"62 992008855", bio: "Contrary to popular belief, Lorem Ipsum is not simply random text.<br><br> It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.", subject: "Química", cost: "20", weekday: [0], time_from:[720], time_to:[1220]
  }
]

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
];

const weekdays = [
  "Domigo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

function getSubject(subjectNumber) {
  const position = +subjectNumber - 1;
  return subjects[position];
}

function pageLanding(req, res) {
  return res.render("index.html");
};

function pageStudy(req, res) {
  const filters = req.query;
  return res.render("study.html", {proffys, filters, subjects, weekdays});
}

function pageGiveClasses(req, res) {
  const data = req.query;

  const isNotEmpty = Object.keys(data).length > 0;
  if (isNotEmpty) {
    data.subject = getSubject(data.subject);

    proffys.push(data);

    return res.redirect("/study");
  }

  return res.render("give-classes.html", {subjects, weekdays});
};

const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

server.use(express.static("public"));

server.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500);

