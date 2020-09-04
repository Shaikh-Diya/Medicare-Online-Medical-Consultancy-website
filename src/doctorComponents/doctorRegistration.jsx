import React, { Component } from "react";
import axios from "axios";
import "../PatientConsole/patient-profile-style.css";
import NavBar from "../components/navbar";

class DoctorRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      password: "",
      medicalschool: "",
      graduationDate: "",
      experience: "",
      specialization: "",
      email: "",
      country: "",
      timezone: "",
      // selectedFile: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeFullname = this.onChangeFullname.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeMedicalschool = this.onChangeMedicalschool.bind(this);
    this.onChangeGraduationdate = this.onChangeGraduationdate.bind(this);
    this.onChangeExperience = this.onChangeExperience.bind(this);
    this.onChangeSpecialization = this.onChangeSpecialization.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeTimezone = this.onChangeTimezone.bind(this);
    // this.fileSelectHandler = this.fileSelectHandler.bind(this);
  }
  onChangeFullname(e) {
    this.setState({
      fullname: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeMedicalschool(e) {
    this.setState({
      medicalschool: e.target.value,
    });
  }
  onChangeGraduationdate(e) {
    this.setState({
      graduationDate: e.target.value,
    });
  }
  onChangeExperience(e) {
    this.setState({
      experience: e.target.value,
    });
  }
  onChangeSpecialization(e) {
    this.setState({
      specialization: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeCountry(e) {
    this.setState({
      country: e.target.value,
    });
  }
  onChangeTimezone(e) {
    this.setState({
      timezone: e.target.value,
    });
  }
  // fileSelectHandler(event) {
  //   this.setState({
  //     selectedFile: event.target.files[0],
  //   });
  // }
  onSubmit(e) {
    const mongoose = require("mongoose");
    e.preventDefault();
    debugger;
    const doctor = {
      // _id: new mongoose.Types.ObjectId(),
      fullname: this.state.fullname,
      password: this.state.password,
      medicalschool: this.state.medicalschool,
      graduationDate: this.state.graduationDate,
      experience: this.state.experience,
      specialization: this.state.specialization,
      email: this.state.email,
      country: this.state.country,
      timezone: this.state.timezone,
      // selectedFile: this.state.selectedFile,
    };
    console.log(doctor);

    axios
      .post(
        "https://csci5709projectdemo.herokuapp.com/doctor/addDoctor",
        doctor
      )
      .then((res) => console.log(res.data));

    window.location = "/createSchedule";
  }
  render() {
    return (
      <div>
        <NavBar />
        <div class="edit-profile">
          <h3 class="edit-profile-title">Doctor Registration</h3>
        </div>
        <div class="edit-form">
          <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter full name"
                value={this.state.fullname}
                onChange={this.onChangeFullname}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter full name"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </div>
            <div class="form-group">
              <label for="bio-experience">Medical School</label>
              <input
                type="text"
                class="form-control"
                id="bio-experience"
                aria-describedby="emailHelp"
                placeholder="Medical school name"
                value={this.state.medicalschool}
                onChange={this.onChangeMedicalschool}
              />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Date of graduation</label>
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="yyyy-mm-dd"
                value={this.state.graduationDate}
                onChange={this.onChangeGraduationdate}
              />
            </div>
            <div class="form-group">
              <label for="input-description">Experience</label>
              <br />
              <textarea
                class="form-control"
                id="descriptioncontent"
                rows="3"
                placeholder="Enter Your Experience here"
                value={this.state.experience}
                onChange={this.onChangeExperience}
              ></textarea>
            </div>
            <div class="form-group">
              <label for="specialization">Specialization</label>
              <br />

              <input
                type="text"
                class="form-control"
                id="specialization"
                placeholder="Specialization"
                value={this.state.specialization}
                onChange={this.onChangeSpecialization}
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <br />
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
            {/* <div class="form-group">
              <label for="picture-label">Upload Picture</label>
              <input
                type="file"
                class="file-input"
                placeholder="Upload Picture"
                onChange={this.fileSelectHandler}
              />
            </div> */}
            <div class="location-div">
              <div class="row">
                <div class="country-form">
                  <div class="form-group">
                    <label for="country-label">Country</label>
                    <input
                      type="text"
                      class="country-input"
                      id="country"
                      placeholder=""
                      value={this.state.country}
                      onChange={this.onChangeCountry}
                    />
                  </div>
                </div>

                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label">Time zone</label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder=""
                      value={this.state.timezone}
                      onChange={this.onChangeTimezone}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" value="Post" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default DoctorRegistration;
