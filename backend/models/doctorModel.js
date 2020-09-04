const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  password: { type: String },
  medicalSchool: { type: String },
  graduationDate: { type: String },
  experience: { type: String },
  specialization: { type: String },
  email: { type: String },
  country: { type: String },
  timezone: { type: String },

  prescription: [mongoose.Types.ObjectId],
  appointments: [mongoose.Types.ObjectId],
  schedule: [mongoose.Types.ObjectId],
  review: [mongoose.Types.ObjectId],
});
const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
