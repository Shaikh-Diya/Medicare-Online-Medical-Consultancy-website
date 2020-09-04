const router = require("express").Router();
let Doctor = require("../models/doctorModel");
const Appointment = require("../models/appointmentModel");
const { json } = require("express");

router.route("/").get((req, res) => {
  Doctor.find()
    .then((doctors) => res.json(doctors))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addDoctor").post((req, res) => {
  const fullname = req.body.fullname;
  const password = req.body.password;
  const medicalschool = req.body.medschool;
  const graduationDate = req.body.graduationDate;
  const experience = req.body.experience;
  const email = req.body.email;
  const specialization = req.body.specialization;
  const country = req.body.country;
  const timezone = req.body.timezone;

  const newDoctor = new Doctor({
    fullname,
    password,
    medicalschool,
    graduationDate,
    experience,
    specialization,
    email,
    country,
    timezone,
  });
  newDoctor
    .save()
    .then(() => res.json("Doctor added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/loginDoctor").post((req, res) => {
  console.log(req);
  const email = req.body.email;
  const password = req.body.password;

  Doctor.findOne({ email: email, password: password }).then((result) => {
    console.log(result);
    res.send(JSON.stringify(result));
  });
});

router.route("/:id").get((req, res) => {
  Doctor.findById(req.params.id)
    .then((doctor) => res.json(doctor))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
