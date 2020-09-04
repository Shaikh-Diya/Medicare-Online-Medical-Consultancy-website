import React, { Component } from "react";
import "../forumComponents/card-style.css";
import NavBar from "../components/navbar";
import Cards from "./doctorCards";
import axios from "axios";
import DoctorNavBar from "../DoctorConsole/doctorNavbar";
import PatientNavBar from "../PatientConsole/patientNavbar";

class Doctors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctors: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://csci5709projectdemo.herokuapp.com/doctor")
      .then((response) => {
        let tempDoctors = response.data;
        let doctors = {};
        for (let i = 0; i < tempDoctors.length; i++) {
          let specialization = tempDoctors[i].specialization;
          if (doctors[specialization]) {
            let data = doctors[specialization];
            data.push(tempDoctors[i]);
            doctors[specialization] = data;
          } else {
            let data = [];
            data.push(tempDoctors[i]);
            doctors[specialization] = data;
          }
        }
        debugger;
        this.setState({ doctors: doctors });
      });
  }

  render() {
    let test = window.localStorage.getItem("diyasDoc");
    let patientdoc = window.localStorage.getItem("patientsDoc");
    if (test != null && patientdoc == null) {
      // alert("Doctors here");
      return (
        <div className="doctors-page-body">
          <div className="body">
            <DoctorNavBar />
            <div className="title">
              <h2 className="doctor-title">DOCTORS</h2>
            </div>
            <div className="medicine-doctors">
              {Object.keys(this.state.doctors).map((specialization) => (
                <div className="container-card">
                  <h2 class="medicine-doctors-title">{specialization}</h2>
                  <div className="card-columns">
                    {this.state.doctors[specialization].map((_) => (
                      <Cards
                        doctorname={_.fullname}
                        experience={_.experience}
                        doctorId={_._id}
                      />
                      // <p>{_._id}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (patientdoc != null && test == null) {
      return (
        <div className="doctors-page-body">
          <div className="body">
            <PatientNavBar />
            <div className="title">
              <h2 className="doctor-title">DOCTORS</h2>
            </div>
            <div className="medicine-doctors">
              {Object.keys(this.state.doctors).map((specialization) => (
                <div className="container-card">
                  <h2 class="medicine-doctors-title">{specialization}</h2>
                  <div className="card-columns">
                    {this.state.doctors[specialization].map((_) => (
                      <Cards
                        doctorname={_.fullname}
                        experience={_.experience}
                        docpic={_.imgpic}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="doctors-page-body">
        <div className="body">
          <NavBar />
          <div className="title">
            <h2 className="doctor-title">DOCTORS</h2>
          </div>
          <div className="medicine-doctors">
            {Object.keys(this.state.doctors).map((specialization) => (
              <div className="container-card">
                <h2 class="medicine-doctors-title">{specialization}</h2>
                <div className="card-columns">
                  {this.state.doctors[specialization].map((_) => (
                    <Cards
                      doctorname={_.fullname}
                      experience={_.experience}
                      doctorId={_._id}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Doctors;
