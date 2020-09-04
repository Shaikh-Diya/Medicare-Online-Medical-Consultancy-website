const router = require("express").Router();
let Appointment = require("../models/appointmentModel");
let Doctor = require("../models/doctorModel");
let Patient = require("../models/patientModel");

router.route("/").get((req, res) => {
  Appointment.find()
    .then((appointments) => res.json(appointments))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addAppointment").post((req, res) => {
  const patientname = req.body.patientname;
  const patientemail = req.body.patientemail;
  const doctorname = req.body.doctorname;
  const doctoremail = req.body.doctoremail;
  const day = req.body.day;
  const time = req.body.time;

  const newAppointment = new Appointment({
    patientname,
    patientemail,
    doctorname,
    doctoremail,
    day,
    time,
  });
  newAppointment
    .save()
    .then((result) => {
      res.json("Appointment added");
      Doctor.update(
        { email: result.doctoremail },
        { $push: { appointments: result._id } }
      ).then((result2) => {
        console.log("appointment pushed");
      });
      Patient.update(
        { email: result.patientemail },
        { $push: { appointments: result._id } }
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
  Appointment.findById(req.params.id)
    .then((appointment) => res.json(appointment))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
