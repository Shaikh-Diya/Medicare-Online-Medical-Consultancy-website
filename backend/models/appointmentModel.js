const mongoose = require("mongoose");
const { schema } = require("./doctorModel");

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  patientname: { type: String },
  patientemail: { type: String, unique: true },
  doctorname: { type: String },
  doctoremail: { type: String, unique: true },
  day: { type: String },
  time: { type: String },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
