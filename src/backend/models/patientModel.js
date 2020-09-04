const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: { type: String },
  password: { type: String },
  dob: { type: String },
  email: { type: String },
  country: { type: String },
  district: { type: String },
  timezone: { type: String },
  prescription: [mongoose.Types.ObjectId],
  appointments: [mongoose.Types.ObjectId],
  review: [mongoose.Types.ObjectId],
});
const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
