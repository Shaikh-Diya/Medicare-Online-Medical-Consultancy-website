import React, { Component } from "react";
import DoctorNavBar from "./doctorNavbar";
import "./profile-style.css";

class EditProfile extends Component {
  state = {};
  render() {
    return (
      <div>
        <DoctorNavBar />
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
                id="name"
                aria-describedby="emailHelp"
                placeholder="Enter full name"
              />
            </div>
            <div class="form-group">
              <label for="bio-experience">Bio/Experience</label>
              <input
                type="text"
                class="form-control"
                id="bioexperience"
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
                      id="timezone"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <input
              type="button"
              className="submit-button"
              value="Submit"
              onClick={() => {
                var name = document.getElementById("name").value;
                var bioexperience = document.getElementById("bioexperience")
                  .value;

                var country = document.getElementById("email").value;
                var state = document.getElementById("state").value;
                var timezone = document.getElementById("timezone").value;

                if (
                  name == "" ||
                  bioexperience == "" ||
                  country == "" ||
                  state == "" ||
                  timezone == ""
                ) {
                  alert("Please Fill up all the fields");
                } else {
                  alert("Congrats");
                }
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default EditProfile;
