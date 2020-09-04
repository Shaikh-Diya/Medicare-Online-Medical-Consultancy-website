const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  doctorname: { type: String },
  doctoremail: { type: String },
  review: { type: String },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
