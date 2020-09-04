import React, { Component } from "react";
import "./question-style.css";
import NavBar from "./navbar";
import DoctorNavBar from "../DoctorConsole/doctorNavbar";
import PatientNavBar from "../PatientConsole/patientNavbar";

import axios from "axios";
class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      question: "",
      description: "",
      city: "",
      states: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeStates = this.onChangeStates.bind(this);
  }
  componentDidMount() {
    this.setState({
      fullname: "test user",
      question: "test question",
      states: ["Nova Scotia", "Ontario"],
    });
  }
  onChangeFullName(e) {
    this.setState({
      fullname: e.target.value,
    });
  }
  onChangeQuestion(e) {
    this.setState({
      question: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }
  onChangeStates(e) {
    this.setState({
      states: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    debugger;
    const question = {
      fullname: this.state.fullname,
      question: this.state.question,
      description: this.state.description,
      city: this.state.city,
      states: this.state.states,
    };
    console.log(question);

    axios
      .post(
        "https://csci5709projectdemo.herokuapp.com/questions/addQuestion",
        question
      )
      .then((res) => console.log(res.data));

    window.location = "/question";
  }
  render() {
    var test = window.localStorage.getItem("diyasDoc");
    var patientdoc = window.localStorage.getItem("patientsDoc");
    // alert("Logged in as " + test);
    if (test != null && patientdoc == null) {
      // alert("Doctors here");
      return (
        <div>
          <DoctorNavBar />
          <div className="question-body">
            <h3 className="question-title text-center">Ask Question</h3>
            <div className="form-question-body">
              <form onSubmit={this.onSubmit}>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="input-fullname">Full Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputfullname"
                      placeholder="Full Name"
                      value={this.state.fullname}
                      onChange={this.onChangeFullName}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="input-question">Question</label>
                  <br />
                  <textarea
                    class="form-control"
                    id="questioncontent"
                    rows="2"
                    placeholder="Enter Your Prescription here"
                    value={this.state.question}
                    onChange={this.onChangeQuestion}
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="input-description">Description</label>
                  <br />
                  <textarea
                    class="form-control"
                    id="descriptioncontent"
                    rows="5"
                    placeholder="Enter Your Prescription here"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                  ></textarea>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputCity"
                      value={this.state.city}
                      onChange={this.onChangeCity}
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select
                      id="inputState"
                      class="form-control"
                      value={this.state.state}
                      onChange={this.onChangeStates}
                    >
                      {this.state.states.map(function (state) {
                        return (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <input
                  type="submit"
                  className="ask-question-button"
                  value="Post"
                  onClick={() => {
                    var inputfullname = document.getElementById("inputfullname")
                      .value;
                    var questioncontent = document.getElementById(
                      "questioncontent"
                    ).value;
                    var descriptioncontent = document.getElementById(
                      "descriptioncontent"
                    ).value;
                    var inputCity = document.getElementById("inputCity").value;
                    var inputState = document.getElementById("inputState")
                      .value;

                    if (
                      inputfullname === "" ||
                      questioncontent === "" ||
                      descriptioncontent === "" ||
                      inputCity === "" ||
                      inputState === ""
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
        </div>
      );
    } else if (patientdoc != null && test == null) {
      return (
        <div>
          <PatientNavBar />
          <div className="question-body">
            <h3 className="question-title text-center">Ask Question</h3>
            <div className="form-question-body">
              <form onSubmit={this.onSubmit}>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="input-fullname">Full Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputfullname"
                      placeholder="Full Name"
                      value={this.state.fullname}
                      onChange={this.onChangeFullName}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="input-question">Question</label>
                  <br />
                  <textarea
                    class="form-control"
                    id="questioncontent"
                    rows="2"
                    placeholder="Enter Your Prescription here"
                    value={this.state.question}
                    onChange={this.onChangeQuestion}
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="input-description">Description</label>
                  <br />
                  <textarea
                    class="form-control"
                    id="descriptioncontent"
                    rows="5"
                    placeholder="Enter Your Prescription here"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                  ></textarea>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputCity"
                      value={this.state.city}
                      onChange={this.onChangeCity}
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select
                      id="inputState"
                      class="form-control"
                      value={this.state.state}
                      onChange={this.onChangeStates}
                    >
                      {this.state.states.map(function (state) {
                        return (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <input
                  type="submit"
                  className="ask-question-button"
                  value="Post"
                  onClick={() => {
                    var inputfullname = document.getElementById("inputfullname")
                      .value;
                    var questioncontent = document.getElementById(
                      "questioncontent"
                    ).value;
                    var descriptioncontent = document.getElementById(
                      "descriptioncontent"
                    ).value;
                    var inputCity = document.getElementById("inputCity").value;
                    var inputState = document.getElementById("inputState")
                      .value;

                    if (
                      inputfullname === "" ||
                      questioncontent === "" ||
                      descriptioncontent === "" ||
                      inputCity === "" ||
                      inputState === ""
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
        </div>
      );
    }
    return (
      <div>
        <NavBar />
        <div className="question-body">
          <h3 className="question-title text-center">Ask Question</h3>
          <div className="form-question-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="input-fullname">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputfullname"
                    placeholder="Full Name"
                    value={this.state.fullname}
                    onChange={this.onChangeFullName}
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="input-question">Question</label>
                <br />
                <textarea
                  class="form-control"
                  id="questioncontent"
                  rows="2"
                  placeholder="Enter Your Prescription here"
                  value={this.state.question}
                  onChange={this.onChangeQuestion}
                ></textarea>
              </div>
              <div class="form-group">
                <label for="input-description">Description</label>
                <br />
                <textarea
                  class="form-control"
                  id="descriptioncontent"
                  rows="5"
                  placeholder="Enter Your Prescription here"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                ></textarea>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    value={this.state.city}
                    onChange={this.onChangeCity}
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select
                    id="inputState"
                    class="form-control"
                    value={this.state.state}
                    onChange={this.onChangeStates}
                  >
                    {this.state.states.map(function (state) {
                      return (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <input
                type="submit"
                className="ask-question-button"
                value="Post"
                onClick={() => {
                  var inputfullname = document.getElementById("inputfullname")
                    .value;
                  var questioncontent = document.getElementById(
                    "questioncontent"
                  ).value;
                  var descriptioncontent = document.getElementById(
                    "descriptioncontent"
                  ).value;
                  var inputCity = document.getElementById("inputCity").value;
                  var inputState = document.getElementById("inputState").value;

                  if (
                    inputfullname === "" ||
                    questioncontent === "" ||
                    descriptioncontent === "" ||
                    inputCity === "" ||
                    inputState === ""
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
      </div>
    );
  }
}

export default Question;
