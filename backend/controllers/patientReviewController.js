const router = require("express").Router();
let PatientReview = require("../models/patientReviewModel");
let Patient = require("../models/patientModel");

router.route("/").get((req, res) => {
  PatientReview.find()
    .then((reviews) => res.json(reviews))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addPatientReview").post((req, res) => {
  const patientname = req.body.patientname;
  const patientemail = req.body.patientemail;
  const review = req.body.review;

  const newPatientReview = new PatientReview({
    patientname,
    patientemail,
    review,
  });
  newPatientReview
    .save()
    .then((result) => {
      res.json("Patient Review added");
      Patient.update(
        { email: result.patientemail },
        { $push: { review: result._id } }
      ).then((result2) => {
        console.log("patient review pushed");
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  PatientReview.findById(req.params.id)
    .then((review) => res.json(review))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
