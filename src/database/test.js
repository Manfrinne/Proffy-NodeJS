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
    subject: 1,
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

  // await createProffy(db, {proffyValue, classValue, classScheduleValues});

  // consultar dados inseridos

  // todos os proffys
  const selectedProffy = await db.all("SELECT * FROM proffys");
  // console.log(selectedProffy)

  // consultar as classes de um determinado professor
  // e trazer junto os dados do professor
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `);
  // console.log(selectClassesAndProffys)

  // o horário de trabalho, por exemplo, é das 8hrs - 18hrs
  // então, o time_from (8h) precisa ser antes ou igual ao horário
  // solicitado no time_to precisa ser acima.
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300"
  `);

  // console.log(selectClassesSchedules)

});
