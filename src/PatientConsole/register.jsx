import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "../App.css";
import "./style.css";

function validateForm() {
  var email = document.forms["myForm"]["email"].value;
  var emailsignin = document.forms["myForm"]["emailsignin"].value;
  if (email == "" || emailsignin == "") {
    alert("Empty fields");
    return false;
  }
}

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const formValidForSignin = ({ signinformErrors }) => {
  let valid = true;

  Object.values(signinformErrors).forEach((vals) => {
    vals.length > 0 && (valid = false);
  });
  // Object.values(rest).forEach((val) => {
  //   val == null && (valid1 = false);
  // });

  return valid;
};
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });
  // Object.values(rest).forEach((val) => {
  //   val == null && (valid = false);
  // });
  return valid;
};
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      emailsignin: null,
      formErrors: {
        email: "",
        password: "",
      },
      signinformErrors: {
        emailsignin: "",
      },
    };
  }

  handleSubmit = (e) => {
    if (formValid(this.state)) {
      console.log(
        `
        --SUBMITTING--
        Email: ${this.state.email}
        Password: ${this.state.password}
      `
      );
    } else {
      console.error("Form Invalid");
    }
  };
  handleSubmitForSignin = (e) => {
    if (formValidForSignin(this.state.signinformErrors)) {
      console.log(
        `
        --SUBMITTING--
        EmailSignin: ${this.state.emailsignin}
      `
      );
    } else {
      console.error("Form Invalid");
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Minimum 6 characters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  handleChangeForSignin = (e) => {
    const { name, value } = e.target;
    let signinformErrors = this.state.signinformErrors;

    switch (name) {
      case "emailsignin":
        signinformErrors.emailsignin = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      default:
        break;
    }
    this.setState({ signinformErrors, [name]: value }, () =>
      console.log(this.state)
    );
  };

  render() {
    const { formErrors, signinformErrors } = this.state;
    return (
      <div className="register-body">
        <div className="login-box">
          {/* sign up form */}
          <form
            onSubmit={this.handleSubmit}
            name="myForm"
            onsubmit="return validateForm()"
          >
            <div className="left-box">
              <h3 className="header">Sign Up</h3>
              <input
                type="email"
                className="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
              {/* <input
                type="password"
                className="Password"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
              /> */}
              {/* {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )} */}

              <input type="submit" name="signup-button" value="Sign Up" />
              <div>
                <Link to="/doctorRegistration" class="signup-doctor">
                  Signup as Doctor
                </Link>
              </div>
            </div>
          </form>
          {/* sign in form */}
          <form
            onSubmit={this.handleSubmitForSignin}
            name="myForm"
            onsubmit="return validateForm()"
          >
            <div className="right-box">
              <span className="signinwith">Sign in</span>

              {/* <button className="facebook">Sign in with Facebook</button>
              <button className="google">Sign in with Google+ </button> */}
              <input
                type="email"
                className="emailsignin"
                name="emailsignin"
                placeholder="Email"
                onChange={this.handleChangeForSignin}
              />
              {(signinformErrors.emailsignin.length == 0 && (
                <span className="errorMessage">
                  {signinformErrors.emailsignin}
                </span>
              )) ||
                (signinformErrors.emailsignin.length > 0 && (
                  <span className="errorMessage">
                    {signinformErrors.emailsignin}
                  </span>
                ))}
              <input type="submit" className="signin-button" value="Sign In" />
            </div>
          </form>
          <div className="or">OR</div>
        </div>
      </div>
    );
  }
}

export default Register;
