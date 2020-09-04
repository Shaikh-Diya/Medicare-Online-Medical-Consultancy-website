import React, { Component } from "react";

import "./profile-style.css";
import PatientNavBar from "./patientNavbar";

class EditPatientProfile extends Component {
  state = {};
  render() {
    return (
      <div>
        <PatientNavBar />
        <div class="edit-profile">
          <h3 class="edit-profile-title">Edit Profile</h3>
        </div>
        <div class="edit-form">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter full name"
              />
            </div>
            <div class="form-group">
              <label for="bio-experience">Age</label>
              <input
                type="number"
                class="form-control"
                id="bio-experience"
                aria-describedby="emailHelp"
                placeholder="Enter bio/experience"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
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
                    />
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditPatientProfile;
