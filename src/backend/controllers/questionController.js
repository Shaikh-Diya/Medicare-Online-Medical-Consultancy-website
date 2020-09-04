const router = require("express").Router();
let Question = require("../models/questionModel");

router.route("/").get((req, res) => {
  Question.find()
    .then((questions) => res.json(questions))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").get((req, res) => {
  Question.findById(req.params.id)
    .then((question) => res.json(question))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/addQuestion").post((req, res) => {
  const fullname = req.body.fullname;
  const question = req.body.question;
  const description = req.body.description;
  const city = req.body.city;
  const state = req.body.state;

  const newQuestion = new Question({
    fullname,
    question,
    description,
    city,
    state,
  });
  newQuestion
    .save()
    .then(() => res.json("Question added"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
