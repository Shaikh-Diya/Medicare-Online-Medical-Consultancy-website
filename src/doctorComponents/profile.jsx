import React, { Component } from "react";
import axios from "axios";
import "./profile-style.css";
import img1 from "./doctorImages/doctor1.jpeg";
import Card from "./profileCardUI";
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";
import DoctorNavBar from "../DoctorConsole/doctorNavbar";
import PatientNavBar from "../PatientConsole/patientNavbar";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctorObj: {},
    };
  }
  componentDidMount() {
    let id = this.props.location.state;
    // console.log(typeof id);
    // console.log(id);
    let ID = id.id;
    console.log(ID);
    axios
      .get("https://csci5709projectdemo.herokuapp.com/doctor/" + ID)
      .then((response) => {
        this.setState({ doctorObj: response.data });
      });
  }
  render() {
    var test = window.localStorage.getItem("diyasDoc");
    var patientdoc = window.localStorage.getItem("patientsDoc");
    if (test != null && patientdoc == null) {
      return (
        <div className="profile">
          <DoctorNavBar />

          <div class="pro-div">
            <div className="profile-body">
              <div className="image-body">
                <Card imgsrc={img1} title="Doctor 1" className="image" />
              </div>
              <div class="doctor-profile-title">
                <h1 className="profile-title">
                  {this.state.doctorObj.fullname}
                </h1>
                <div className="doctor-experience">
                  <p>{this.state.doctorObj.experience}</p>
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
                      <p class="text-center">James P. Grant School</p>
                    </div>

                    <div class="time">
                      <h5 class="time-title">Graduation Date</h5>
                      <p class="text-center">
                        {this.state.doctorObj.graduationDate}
                      </p>
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
                      <p class="text-center">{this.state.doctorObj.country}</p>
                    </div>

                    <div class="time">
                      <h5 class="time-title">Time Zone</h5>
                      <p class="text-center">{this.state.doctorObj.timezone}</p>
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
                      <p class="text-center">{this.state.doctorObj.email}</p>
                    </div>
                    <div class="state">
                      {/* <h5 class="state-title">Zoom</h5> */}
                      {/* <p class="text-center">Zoom Links</p> */}
                    </div>
                    <div class="time">
                      {/* <h5 class="time-title">Other</h5>
                  <p class="text-center">other contact</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="request-appointment-body">
                <Link to="/appointment" class="appointment-link">
                  Request for Appointment
                </Link>
              </div>
            </div>
            <div className="review">
              <h3 class="review-title">Review</h3>
              <div>
                <p className="review-comments">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto ipsam nostrum aliquid. Libero possimus asperiores
                  debitis, quibusdam porro rerum illum! Natus quia repudiandae
                  vero est quam aspernatur vitae doloribus cupiditate."
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (patientdoc != null && test == null) {
      return (
        <div className="profile">
          <PatientNavBar />

          <div class="pro-div">
            <div className="profile-body">
              <div className="image-body">
                <Card imgsrc={img1} title="Doctor 1" className="image" />
              </div>
              <div class="doctor-profile-title">
                <h1 className="profile-title">
                  {this.state.doctorObj.fullname}
                </h1>
                <div className="doctor-experience">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti voluptas facilis vitae dolorem sed nihil. Earum,
                    mollitia. Sed magnam voluptate, quidem, quod nemo nobis
                    dolore, accusantium repellat ut cumque necessitatibus.
                  </p>
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
                      <p class="text-center">14-02-2008</p>
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
                      <p class="text-center">Canada</p>
                    </div>

                    <div class="time">
                      <h5 class="time-title">Time Zone</h5>
                      <p class="text-center">Halifax</p>
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
                      <p class="text-center">xxx@gmail.com</p>
                    </div>
                    <div class="state">
                      {/* <h5 class="state-title">Zoom</h5> */}
                      {/* <p class="text-center">Zoom Links</p> */}
                    </div>
                    <div class="time">
                      {/* <h5 class="time-title">Other</h5>
                    <p class="text-center">other contact</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="request-appointment-body">
                <Link to="/appointment" class="appointment-link">
                  Request for Appointment
                </Link>
              </div>
            </div>
            <div className="review">
              <h3 class="review-title">Review</h3>
              <div>
                <p className="review-comments">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto ipsam nostrum aliquid. Libero possimus asperiores
                  debitis, quibusdam porro rerum illum! Natus quia repudiandae
                  vero est quam aspernatur vitae doloribus cupiditate."
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="profile">
          <NavBar />

          <div class="pro-div">
            <div className="profile-body">
              <div className="image-body">
                <Card imgsrc={img1} title="Doctor 1" className="image" />
              </div>
              <div class="doctor-profile-title">
                <h1 className="profile-title">
                  {this.state.doctorObj.fullname}
                </h1>
                <div className="doctor-experience">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti voluptas facilis vitae dolorem sed nihil. Earum,
                    mollitia. Sed magnam voluptate, quidem, quod nemo nobis
                    dolore, accusantium repellat ut cumque necessitatibus.
                  </p>
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
                      <p class="text-center">14-02-2008</p>
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
                      <p class="text-center">Canada</p>
                    </div>

                    <div class="time">
                      <h5 class="time-title">Time Zone</h5>
                      <p class="text-center">Halifax</p>
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
                      <p class="text-center">xxx@gmail.com</p>
                    </div>
                    <div class="state">
                      {/* <h5 class="state-title">Zoom</h5> */}
                      {/* <p class="text-center">Zoom Links</p> */}
                    </div>
                    <div class="time">
                      {/* <h5 class="time-title">Other</h5>
                    <p class="text-center">other contact</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="request-appointment-body">
                <Link to="/appointment" class="appointment-link">
                  Request for Appointment
                </Link>
              </div>
            </div>
            <div className="review">
              <h3 class="review-title">Review</h3>
              <div>
                <p className="review-comments">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto ipsam nostrum aliquid. Libero possimus asperiores
                  debitis, quibusdam porro rerum illum! Natus quia repudiandae
                  vero est quam aspernatur vitae doloribus cupiditate."
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Profile;
