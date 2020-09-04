import React, { Component } from "react";
import axios from "axios";
import DoctorNavBar from "./doctorNavbar";
import "./prescription-style.css";
class CreatePrescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      patientname: "",
      prescription: "",
      doctorname: "",
      doctoremail: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePatientname = this.onChangePatientname.bind(this);
    this.onChangePrescription = this.onChangePrescription.bind(this);
    this.onChangeDoctorname = this.onChangeDoctorname.bind(this);
    this.onChangeDoctoremail = this.onChangeDoctoremail.bind(this);
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePatientname(e) {
    this.setState({
      patientname: e.target.value,
    });
  }
  onChangePrescription(e) {
    this.setState({
      prescription: e.target.value,
    });
  }
  onChangeDoctorname(e) {
    this.setState({
      doctorname: e.target.value,
    });
  }
  onChangeDoctoremail(e) {
    this.setState({
      doctoremail: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    debugger;
    const prescriptionContent = {
      email: this.state.email,
      patientname: this.state.patientname,
      prescription: this.state.prescription,
      doctorname: this.state.doctorname,
      doctoremail: this.state.doctoremail,
    };
    console.log(prescriptionContent);

    axios
      .post(
        "https://csci5709projectdemo.herokuapp.com/prescription/addPrescription",
        prescriptionContent
      )
      .then((res) => console.log(res.data));

    window.location = "/createPrescription";
  }
  render() {
    return (
      <div>
        <DoctorNavBar />
        <div class="prescription">
          <h3 class="create-prescription-title">Create Prescription</h3>
          <div class="prescription-form">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter patient's email"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div class="form-group">
                <label for="email">Patient Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter patient's name"
                  value={this.state.patientname}
                  onChange={this.onChangePatientname}
                />
              </div>
              <div class="form-group">
                <label for="prescription-content-title">Prescription</label>
                <br />
                <textarea
                  class="form-control"
                  id="prescriptioncontent"
                  rows="8"
                  placeholder="Enter Your Prescription here"
                  value={this.state.prescription}
                  onChange={this.onChangePrescription}
                ></textarea>
              </div>
              <div class="form-group">
                <label for="doctor-name">Doctor Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="doctorname"
                  placeholder="Enter doctor name"
                  value={this.state.doctorname}
                  onChange={this.onChangeDoctorname}
                />
              </div>
              <div class="form-group">
                <label for="doctor-name">Doctor Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="doctorname"
                  placeholder="Enter doctor's email"
                  value={this.state.doctoremail}
                  onChange={this.onChangeDoctoremail}
                />
              </div>
              {/* <div class="form-group">
                <label for="exampleInputPassword1">Date</label>
                <input
                  type="date"
                  class="dateinput"
                  id="dateinput"
                  placeholder="enter today's date"
                />
              </div> */}

              <button
                type="submit"
                className="post-button"
                value="Post"
                onClick={() => {
                  var email = document.getElementById("email").value;
                  var prescriptioncontent = document.getElementById(
                    "prescriptioncontent"
                  ).value;

                  var doctorname = document.getElementById("doctorname").value;
                  var dateinput = document.getElementById("dateinput").value;

                  if (
                    email == "" ||
                    prescriptioncontent == "" ||
                    doctorname == ""
                  ) {
                    alert("Please Fill up all the fields");
                  } else {
                    alert("Congrats");
                  }
                }}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePrescription;
