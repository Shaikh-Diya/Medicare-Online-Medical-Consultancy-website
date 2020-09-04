const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    fullname: { type: String },
    question: { type: String },
    description: { type: String },
    city: { type: String },
    state: { type: String },
  },
  {
    timestamp: true,
  }
);
const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
