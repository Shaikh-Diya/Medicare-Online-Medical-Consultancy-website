const router = require("express").Router();
let Patient = require("../models/patientModel");

router.route("/").get((req, res) => {
  Patient.find()
    .then((patients) => res.json(patients))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addPatient").post((req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const dob = req.body.dob;
  const email = req.body.email;
  const country = req.body.country;
  const district = req.body.state;
  const timezone = req.body.timezone;

  const newPatient = new Patient({
    name,
    password,
    dob,
    email,
    country,
    district,
    timezone,
  });
  newPatient
    .save()
    .then(() => res.json("Patient added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/loginPatient").post((req, res) => {
  // console.log(req);
  const email = req.body.email;
  const password = req.body.password;

  Patient.findOne({ email: email, password: password }).then((result) => {
    console.log(result);
    res.send(JSON.stringify(result));
  });
});
module.exports = router;
