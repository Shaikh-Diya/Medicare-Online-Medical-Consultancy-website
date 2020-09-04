import React, { Component } from "react";
import axios from "axios";
import PatientNavBar from "./patientNavbar";
import "./patient-profile-style.css";
import img1 from "./doctorImages/doctor1.jpeg";
import Card from "./profileCardUI";
import { Link } from "react-router-dom";

class PatientProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patientname: "",
      age: "",
      patientemail: "",
      country: "",
      timezone: "",
      state: "",
      data1: [],
      data2: [],
      data3: [],
    };
  }
  componentDidMount() {
    debugger;
    let result = JSON.parse(localStorage.getItem("patientsDoc"));
    if (result) {
      console.log(result);
      this.setState({
        patientname: result.name,
        age: result.dob,
        patientemail: result.email,
        country: result.country,
        timezone: result.timezone,
        // state: result.state,
      });
      let arr = [];
      for (let i = 0; i < result.appointments.length; i++) {
        // console.log(result.appointments[i]);
        let id = result.appointments[i];
        axios
          .get("https://csci5709projectdemo.herokuapp.com/appointment/" + id)
          .then((response) => {
            let tempAppointment = response.data;
            // console.log(tempAppointment);
            arr.push(tempAppointment);
            this.setState({
              data1: arr,
            });
          });
      }
      let brr = [];
      for (let i = 0; i < result.prescription.length; i++) {
        console.log(result.prescription[i]);
        let id = result.prescription[i];
        axios
          .get("https://csci5709projectdemo.herokuapp.com/prescription/" + id)
          .then((response) => {
            let tempPrescription = response.data;
            console.log(tempPrescription);
            brr.push(tempPrescription);
            this.setState({
              data2: brr,
            });
          });
      }
      let crr = [];
      for (let i = 0; i < result.review.length; i++) {
        console.log(result.review[i]);
        let id = result.review[i];
        axios
          .get("https://csci5709projectdemo.herokuapp.com/patientReview/" + id)
          .then((response) => {
            let tempPatientReview = response.data;
            console.log(tempPatientReview);
            crr.push(tempPatientReview);
            this.setState({
              data3: crr,
            });
          });
      }
    }
  }
  render() {
    return (
      <div className="profile">
        <PatientNavBar />

        <div class="pro-div">
          <div className="profile-body">
            <div className="image-body">
              <Card imgsrc={img1} title="Doctor 1" className="image" />
            </div>
            <div class="doctor-profile-title">
              <h1 className="patient-profile-title">
                {this.state.patientname}
              </h1>
              <div class="patient-info">
                <div class="row">
                  <div>
                    <h5 class="patient-age">Date of Birth:</h5>
                  </div>
                  <div>
                    <p class="patient-age-result">{this.state.age}</p>
                  </div>
                </div>
                <div class="row">
                  <div>
                    <h5 class="patient-email">Email:</h5>
                  </div>
                  <div>
                    <p class="patient-email-result">
                      {this.state.patientemail}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div>
                    <h5 class="patient-country">Country:</h5>
                  </div>
                  <div>
                    <p class="patient-country-result">{this.state.country}</p>
                  </div>
                </div>
                <div class="row">
                  <div>
                    <h5 class="patient-state">State:</h5>
                  </div>
                  <div>
                    <p class="patient-state-result">{this.state.state}</p>
                  </div>
                </div>
                <div class="row">
                  <div>
                    <h5 class="patient-timezone">Time zone:</h5>
                  </div>
                  <div>
                    <p class="patient-timezone-result">{this.state.timezone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div class="prescription-section">
              <h1 className="prescription-title">Prescription</h1>
              <div className="prescription-content">
                <div classname="prescription-section">
                  <div class="appointment-content">
                    <div class="row">
                      <table>
                        <tr>
                          <th>Doctor Name</th>
                          <th>Doctor Email</th>
                          <th>Prescription </th>
                        </tr>
                        {this.state.data2.map((obj) => (
                          <tr>
                            <td>{obj.doctorname}</td>
                            <td>{obj.doctoremail}</td>
                            <td>{obj.prescription}</td>
                          </tr>
                        ))}
                      </table>
                      <div class="appointment-list"></div>
                    </div>
                  </div>
                </div>

                {/* <div class="row">
                  <div class="prescription-doctor">
                    <h6>Doctor:</h6>
                  </div>
                  <div class="prescription-date">
                    <h6>Date:</h6>
                  </div>
                </div> */}
              </div>
            </div>
            <div class="appointment-section">
              <h1 class="appointment-title">Appointment</h1>
              <div class="location-content">
                <div class="appointment-content">
                  <div class="row">
                    <table>
                      <tr>
                        <th>Patient Name</th>
                        <th>Patient Email</th>
                        <th>Appointment Date</th>
                        <th>Appointment Time</th>
                      </tr>
                      {this.state.data1.map((obj) => (
                        <tr>
                          <td>{obj.patientemail}</td>
                          <td>{obj.patientname}</td>
                          <td>{obj.day}</td>
                          <td>{obj.time}</td>
                        </tr>
                      ))}
                    </table>
                    <div class="appointment-list"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="request-appointment-body">
              <Link to="/createReview" class="appointment-link">
                Review a Doctor
              </Link>
            </div>
            {/* <div class="contact-section">
              <h1 class="contact-title">Contact</h1>
              <div class="contact-content">
                <div class="row">
                  <div class="country">
                    <h5 class="email-title">Email</h5>
                    <p class="text-center">xxx@gmail.com</p>
                  </div>
                  <div class="state">
                    <h5 class="state-title">Zoom</h5>
                    <p class="text-center">Zoom Links</p>
                  </div>
                  <div class="time">
                    <h5 class="time-title">Other</h5>
                    <p class="text-center">other contact</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div class="request-appointment-body">
              <Link to="/appointment" class="appointment-link">
                Request for Appointment
              </Link>
            </div> */}
          </div>
          <div className="review">
            <h3 class="review-title">Review</h3>
            {this.state.data3.map((obj) => (
              <div>
                <p className="review-comments">{obj.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PatientProfile;
