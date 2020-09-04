import React, { Component } from "react";
import NavBar from "../components/navbar";
import "./style.css";
import Cards from "./aboutCards";
import DoctorNavBar from "../DoctorConsole/doctorNavbar";
import PatientNavBar from "../PatientConsole/patientNavbar";
class About extends Component {
  render() {
    var test = window.localStorage.getItem("diyasDoc");
    var patientdoc = window.localStorage.getItem("patientsDoc");
    if (test != null && patientdoc == null) {
      // alert("Doctors here");
      return (
        <div className="body">
          <DoctorNavBar />
          <div class="about-body">
            <div className="title">
              <h2 className="about-title text-center">ABOUT</h2>
            </div>
            <div className="about-cards">
              <Cards />
            </div>
          </div>
        </div>
      );
    } else if (patientdoc != null && test == null) {
      return (
        <div className="body">
          <PatientNavBar />
          <div class="about-body">
            <div className="title">
              <h2 className="about-title text-center">ABOUT</h2>
            </div>
            <div className="about-cards">
              <Cards />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="body">
        <NavBar />
        <div class="about-body">
          <div className="title">
            <h2 className="about-title text-center">ABOUT</h2>
          </div>
          <div className="about-cards">
            <Cards />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
