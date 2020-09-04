import React, { Component } from "react";
import axios from "axios";
import "./patient-profile-style.css";
import "./profile-style.css";
import NavBar from "../components/navbar";

class PatientRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      dob: "",
      email: "",
      country: "",
      district: "",
      timezone: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.onChangeTimezone = this.onChangeTimezone.bind(this);
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeDOB(e) {
    this.setState({
      dob: e.target.value,
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
  onChangeDistrict(e) {
    this.setState({
      district: e.target.value,
    });
  }

  onChangeTimezone(e) {
    this.setState({
      timezone: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    debugger;
    const patient = {
      name: this.state.name,
      password: this.state.password,
      dob: this.state.dob,
      email: this.state.email,
      country: this.state.country,
      district: this.state.district,
      timezone: this.state.timezone,
    };
    console.log(patient);

    axios
      .post(
        "https://csci5709projectdemo.herokuapp.com/patient/addPatient",
        patient
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }
  render() {
    return (
      <div>
        <NavBar />
        <div class="edit-profile">
          <h3 class="edit-profile-title">Patient Registration</h3>
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
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>
            <div class="form-group">
              <label for="bio-experience">Password</label>
              <input
                type="password"
                class="form-control"
                id="bio-experience"
                aria-describedby="emailHelp"
                placeholder="password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </div>
            <div class="form-group">
              <label for="bio-experience">Date-of-Birth</label>
              <input
                type="text"
                class="form-control"
                id="bio-experience"
                aria-describedby="emailHelp"
                placeholder="yyyy-mm-dd"
                value={this.state.dob}
                onChange={this.onChangeDOB}
              />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
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
                <div class="state-form">
                  <div class="form-group">
                    <label for="state-label">State</label>
                    <input
                      type="text"
                      class="state-input"
                      id="state"
                      placeholder=""
                      value={this.state.district}
                      onChange={this.onChangeDistrict}
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

export default PatientRegistration;
