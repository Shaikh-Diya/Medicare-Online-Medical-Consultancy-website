const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri =
  "mongodb+srv://diya:pass123@webprojectcluster.jlx8r.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established succesfully");
});

//routes

const questionController = require("./src/backend/controllers/questionController");
app.use("/questions", questionController);

const doctorController = require("./src/backend/controllers/doctorController");
app.use("/doctor", doctorController);

const prescriptionController = require("./src/backend/controllers/prescriptionController");
app.use("/prescription", prescriptionController);

const patientController = require("./src/backend/controllers/patientController");
app.use("/patient", patientController);

const scheduleController = require("./src/backend/controllers/scheduleController");
app.use("/schedule", scheduleController);

const patientReviewController = require("./src/backend/controllers/patientReviewController");
app.use("/patientReview", patientReviewController);

const reviewController = require("./src/backend/controllers/reviewController");
app.use("/review", reviewController);

const appointmentController = require("./src/backend/controllers/appointmentController");
app.use("/appointment", appointmentController);

//server.js

const path = require("path");
app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 5000);
