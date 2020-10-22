const Database = require('./db');
const createProffy = require('./createProffys');


Database.then(async (db) => {
  // inserir dados
  proffyValue = {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
    whatsapp:"62 992008855",
    bio: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  };

  classValue = {
    subject: "Química",
    cost: "20",
    // o proffy id virá pelo banco de dados
  };

  classScheduleValues = [
    //class_id virá pelo banco de dados, após cadastrar a class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220,
    }
  ];

  await createProffy(db, {proffyValue, classValue, classScheduleValues});

  // consultar dados inseridos
});
