const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientReviewSchema = new Schema({
  patientname: { type: String },
  patientemail: { type: String },
  review: { type: String },
});

const PatientReview = mongoose.model("PatientReview", patientReviewSchema);
module.exports = PatientReview;
