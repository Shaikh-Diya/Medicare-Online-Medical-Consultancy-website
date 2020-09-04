import React, { Component } from "react";
import "./doctorProfile-style.css";
import img1 from "./doctorImages/doctor1.jpeg";
import Card from "./profileCardUI";
import { Link } from "react-router-dom";
import DoctorNavBar from "./doctorNavbar";
import axios from "axios";

class DoctorProfile extends Component {
  result;
  constructor(props) {
    super(props);

    this.state = {
      doctorname: "",
      experience: "",
      medicalschool: "",
      graduationDate: "",
      country: "",
      timezone: "",
      email: "",
      specialization: "",
      appointment: [],
      data: [],
      reviewList: [],
      // appointmentObj: {},
    };
  }
  componentDidMount() {
    debugger;
    let result = JSON.parse(localStorage.getItem("diyasDoc"));
    if (result) {
      console.log(result);
      this.setState({
        doctorname: result.fullname,
        experience: result.experience,
        specialization: result.specialization,
        // medicalSchool: result.medicalSchool,
        graduationDate: result.graduationDate,
        country: result.country,
        timezone: result.timezone,
        email: result.email,
      });

      let arr = [];
      for (let i = 0; i < result.appointments.length; i++) {
        console.log(result.appointments[i]);
        let id = result.appointments[i];
        axios
          .get("https://csci5709projectdemo.herokuapp.com/appointment/" + id)
          .then((response) => {
            let tempAppointment = response.data;
            console.log(tempAppointment);
            arr.push(tempAppointment);
            this.setState({
              data: arr,
            });
          });
      }
      let brr = [];
      for (let i = 0; i < result.review.length; i++) {
        console.log(result.review[i]);
        let id = result.review[i];
        axios
          .get("https://csci5709projectdemo.herokuapp.com/review/" + id)
          .then((response) => {
            let tempReview = response.data;
            // console.log(tempReview);
            brr.push(tempReview);
            this.setState({
              reviewList: brr,
            });
          });
      }
    }
  }

  render() {
    return (
      <div className="profile">
        <DoctorNavBar />
        <div class="pro-div">
          <div className="profile-body">
            <div className="image-body">
              <Card imgsrc={img1} title="doctor1" className="image" />
            </div>
            <div class="doctor-profile-title">
              <h1 className="profile-title" id="doc-pro-title">
                {this.state.doctorname}
              </h1>
              <h3 className="profile-title" id="doc-pro-title">
                {this.state.specialization}
              </h3>
              <div className="doctor-bio">
                <p>{this.state.experience}</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div class="location-section">
              <h1 class="location-title">Qualification</h1>
              <div class="location-content">
                <div class="row">
                  <div class="country">
                    <h5 class="country-title">Medical school</h5>
                    <p class="text-center">Harvard Med</p>
                  </div>
                  <div class="time">
                    <h5 class="time-title">Graduation Date</h5>
                    <p class="text-center">{this.state.graduationDate}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="location-section">
              <h1 class="location-title">Location</h1>
              <div class="location-content">
                <div class="row">
                  <div class="country">
                    <h5 class="country-title">Country</h5>
                    <p class="text-center">{this.state.country}</p>
                  </div>
                  <div class="time">
                    <h5 class="time-title">Time Zone</h5>
                    <p class="text-center">{this.state.timezone}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-section">
              <h1 class="contact-title">Contact</h1>
              <div class="contact-content">
                <div class="row">
                  <div class="country">
                    <h5 class="email-title">Email</h5>
                    <p class="text-center">{this.state.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="appointment-section">
              <h1 class="appointment-title">Appointments</h1>
              <div class="appointment-content">
                <div class="row">
                  <table>
                    <tr>
                      <th>Patient Name</th>
                      <th>Patient Email</th>
                      <th>Appointment Date</th>
                      <th>Appointment Time</th>
                    </tr>
                    {this.state.data.map((obj) => (
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
          <div className="review">
            <h3 class="review-title">Review</h3>
            {this.state.reviewList.map((obj) => (
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

export default DoctorProfile;
{
}
