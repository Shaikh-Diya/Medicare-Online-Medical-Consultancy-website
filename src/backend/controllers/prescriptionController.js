const router = require("express").Router();
const mongoose = require("mongoose");
let Prescription = require("../models/prescriptionModel");
let Doctor = require("../models/doctorModel");
let Patient = require("../models/patientModel");

router.route("/").get((req, res) => {
  Prescription.find()
    .then((prescriptions) => res.json(prescriptions))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addPrescription").post((req, res) => {
  const email = req.body.email;
  const patientname = req.body.patientname;
  const prescription = req.body.prescription;
  const doctorname = req.body.doctorname;
  const doctoremail = req.body.doctoremail;

  const newPrescription = new Prescription({
    email,
    patientname,
    prescription,
    doctorname,
    doctoremail,
  });
  newPrescription
    .save()
    .then((result) => {
      res.json("Prescription added");
      Doctor.update(
        { email: result.doctoremail },
        { $push: { prescription: result._id } }
      ).then((result2) => {
        console.log("prescription pushed");
      });
      Patient.update(
        { email: result.email },
        { $push: { prescription: result._id } }
      ).then((result3) => {
        if (result3 != null) {
          console.log("result is not null");
          console.log(result3); //show if this msg is showing
        } else {
          console.log("its null");
        }
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Prescription.findById(req.params.id)
    .then((prescriptions) => res.json(prescriptions))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
