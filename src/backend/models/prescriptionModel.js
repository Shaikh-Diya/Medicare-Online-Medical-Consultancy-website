const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
  email: { type: String },
  patientname: { type: String },
  prescription: { type: String },
  doctorname: { type: String },
  doctoremail: { type: String },
});

const Prescription = mongoose.model("Prescription", prescriptionSchema);
module.exports = Prescription;
