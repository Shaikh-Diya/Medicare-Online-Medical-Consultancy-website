import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import "./style.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      patientemail: "",
      patientpassword: "",
    };
    this.onSubmitDoctor = this.onSubmitDoctor.bind(this);
    this.onSubmitPatient = this.onSubmitPatient.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePatientEmail = this.onChangePatientEmail.bind(this);
    this.onChangePatientPassword = this.onChangePatientPassword.bind(this);
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangePatientEmail(e) {
    this.setState({
      patientemail: e.target.value,
    });
  }
  onChangePatientPassword(e) {
    this.setState({
      patientpassword: e.target.value,
    });
  }
  onSubmitDoctor(e) {
    e.preventDefault();
    debugger;
    const loginDoctor = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post(
        "https://csci5709projectdemo.herokuapp.com/doctor/loginDoctor",
        loginDoctor
      )
      .then((res) => {
        debugger;
        window.localStorage.setItem("diyasDoc", JSON.stringify(res.data));
        console.log(res.data);
        // window.open("http://localhost:3000/doctorProfile", "_self");
        window.location = "/doctorProfile";
      });
  }
  onSubmitPatient(e) {
    e.preventDefault();
    // debugger;

    const loginPatient = {
      email: this.state.patientemail,
      password: this.state.patientpassword,
      // patientpassword: this.state.patientpassword,
    };

    axios
      .post(
        "https://csci5709projectdemo.herokuapp.com/patient/loginPatient",
        loginPatient
      )
      .then((res) => {
        debugger;
        alert(JSON.stringify(res.data));
        window.localStorage.setItem("patientsDoc", JSON.stringify(res.data));
        // window.open("http://localhost:3000/patientProfile", "_self");
        window.location = "/patientProfile";
      });
  }
  render() {
    return (
      <div className="register-body">
        <div className="login-box">
          <div className="left-box">
            <h3 className="header">Sign Up</h3>

            <div class="patient-register-link">
              <Link to="/patientRegistration" class="signup-patient-link">
                Signup as Patient
              </Link>
            </div>
            <div class="doctor-register-link">
              <Link to="/doctorRegistration" class="signup-doctor-link">
                Signup as Doctor
              </Link>
            </div>
          </div>

          <div className="right-box">
            <form onSubmit={this.onSubmitDoctor}>
              <span className="signinwith">Sign in</span>

              <input
                type="email"
                className="emailsignin"
                name="emailsignin"
                placeholder="Doctor email"
                id="signin_email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
              <div class="password-signin">
                <input
                  type="password"
                  className="passwordsignin"
                  name="emailsignin"
                  placeholder="Doctor password"
                  id="passwordsignin"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </div>

              <button
                type="submit"
                className="signin-button"
                value=""
                // onClick={() => {
                //   var email_signup = document.getElementById("signin_email")
                //     .value;
                //   var passwordsignin = document.getElementById("passwordsignin")
                //     .value;

                //   if (email_signup == "" || passwordsignin == "") {
                //     alert("Empty fields!");
                //   } else if (!email_signup.includes("@")) {
                //     alert("Please Enter Valid Email");
                //   } else if (passwordsignin.length < 8) {
                //     alert(
                //       "Sign up password length need to be of minimum size 8"
                //     );
                //   } else if (
                //     email_signup == "patient@gmail.com" &&
                //     passwordsignin == "12345678"
                //   ) {
                //     window.open(
                //       "http://localhost:3000/patientProfile",
                //       "_self"
                //     );
                //   } else if (
                //     email_signup == "doctor@gmail.com" &&
                //     passwordsignin == "12345678"
                //   ) {
                //     window.open("http://localhost:3000/doctorProfile", "_self");
                //   } else {
                //     alert("Invalid password or email");
                //   }
                // }}
              >
                Sign In
              </button>
            </form>
            <form onSubmit={this.onSubmitPatient}>
              <input
                type="email"
                className="emailsignin"
                name="emailsignin"
                placeholder="Patient email"
                id="signin_email"
                value={this.state.patientemail}
                onChange={this.onChangePatientEmail}
              />
              <div class="password-signin">
                <input
                  type="password"
                  className="passwordsignin"
                  name="emailsignin"
                  placeholder="Patient password"
                  id="passwordsignin"
                  value={this.state.patientpassword}
                  onChange={this.onChangePatientPassword}
                />
              </div>

              <button type="submit" className="signin-button" value="">
                Sign In
              </button>
            </form>
          </div>

          <div className="or">OR</div>
        </div>
      </div>
    );
  }
}

export default Register;
