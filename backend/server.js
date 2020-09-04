const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
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

const questionController = require("./controllers/questionController");
app.use("/questions", questionController);

const doctorController = require("./controllers/doctorController");
app.use("/doctor", doctorController);

const prescriptionController = require("./controllers/prescriptionController");
app.use("/prescription", prescriptionController);

const patientController = require("./controllers/patientController");
app.use("/patient", patientController);

const scheduleController = require("./controllers/scheduleController");
app.use("/schedule", scheduleController);

const patientReviewController = require("./controllers/patientReviewController");
app.use("/patientReview", patientReviewController);

const reviewController = require("./controllers/reviewController");
app.use("/review", reviewController);

const appointmentController = require("./controllers/appointmentController");
app.use("/appointment", appointmentController);

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
