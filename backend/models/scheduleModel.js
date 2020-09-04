const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  monday1: { type: String },
  monday2: { type: String },
  monday3: { type: String },
  monday4: { type: String },
  tuesday1: { type: String },
  tuesday2: { type: String },
  tuesday3: { type: String },
  tuesday4: { type: String },
  wednesday1: { type: String },
  wednesday2: { type: String },
  wednesday3: { type: String },
  wednesday4: { type: String },
  thursday1: { type: String },
  thursday2: { type: String },
  thursday3: { type: String },
  thursday4: { type: String },
  friday1: { type: String },
  friday2: { type: String },
  friday3: { type: String },
  friday4: { type: String },
  saturday1: { type: String },
  saturday2: { type: String },
  saturday3: { type: String },
  saturday4: { type: String },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);
module.exports = Schedule;
