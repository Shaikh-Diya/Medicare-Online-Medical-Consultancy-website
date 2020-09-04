const router = require("express").Router();
let Review = require("../models/reviewModel");
let Doctor = require("../models/doctorModel");

router.route("/").get((req, res) => {
  Review.find()
    .then((reviews) => res.json(reviews))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addReview").post((req, res) => {
  const doctorname = req.body.doctorname;
  const doctoremail = req.body.doctoremail;
  const review = req.body.review;

  const newReview = new Review({
    doctorname,
    doctoremail,
    review,
  });
  newReview
    .save()
    .then((result) => {
      res.json("Review added");
      Doctor.update(
        { email: result.doctoremail },
        { $push: { review: result._id } }
      ).then((result2) => {
        console.log("appointment pushed");
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Review.findById(req.params.id)
    .then((review) => res.json(review))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
