const router = require("express").Router();
let Schedule = require("../models/scheduleModel");

router.route("/").get((req, res) => {
  Schedule.find()
    .then((schedules) => res.json(schedules))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addSchedule").post((req, res) => {
  const monday1 = req.body.monday1;
  const monday2 = req.body.monday2;
  const monday3 = req.body.monday3;
  const monday4 = req.body.monday4;

  const tuesday1 = req.body.tuesday1;
  const tuesday2 = req.body.tuesday2;
  const tuesday3 = req.body.tuesday3;
  const tuesday4 = req.body.tuesday4;

  const wednesday1 = req.body.wednesday1;
  const wednesday2 = req.body.wednesday2;
  const wednesday3 = req.body.wednesday3;
  const wednesday4 = req.body.wednesday4;

  const thursday1 = req.body.thursday1;
  const thursday2 = req.body.thursday2;
  const thursday3 = req.body.thursday3;
  const thursday4 = req.body.thursday4;

  const friday1 = req.body.friday1;
  const friday2 = req.body.friday2;
  const friday3 = req.body.friday3;
  const friday4 = req.body.friday4;

  const saturday1 = req.body.saturday1;
  const saturday2 = req.body.saturday2;
  const saturday3 = req.body.saturday3;
  const saturday4 = req.body.saturday4;

  const newSchedule = new Schedule({
    monday1,
    monday2,
    monday3,
    monday4,

    tuesday1,
    tuesday2,
    tuesday3,
    tuesday4,

    wednesday1,
    wednesday2,
    wednesday3,
    wednesday4,

    thursday1,
    thursday2,
    thursday3,
    thursday4,

    friday1,
    friday2,
    friday3,
    friday4,

    saturday1,
    saturday2,
    saturday3,
    saturday4,
  });
  newSchedule
    .save()
    .then(() => res.json("Schedule added"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
