import React, { Component, useState } from "react";
import "./App.css";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./aboutComponent/about";
import Question from "./components/question";
import Profile from "./doctorComponents/profile";
import Doctors from "./doctorComponents/doctorPage";
import Appointment from "./doctorComponents/appointment";
import DoctorRegistration from "./doctorComponents/doctorRegistration";
import Answer from "./components/answer";
import CreatePrescription from "./DoctorConsole/createPrescription";
import DoctorProfile from "./DoctorConsole/doctorProfile";
import PatientProfile from "./PatientConsole/patientProfile";
import CreateReview from "./PatientConsole/createReview";
import PatientRegistration from "./PatientConsole/patientRegistration";
import CreateSchedule from "./DoctorConsole/createSchedule";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="app">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/doctorPage" component={Doctors} />
              <Route exact path="/about" component={About} />
              <Route exact path="/question" component={Question} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/appointment" component={Appointment} />
              <Route exact path="/answer" component={Answer} />
              <Route exact path="/createReview" component={CreateReview} />
              <Route
                exact
                path="/createPrescription"
                component={CreatePrescription}
              />
              <Route exact path="/createSchedule" component={CreateSchedule} />
              <Route
                exact
                path="/patientRegistration"
                component={PatientRegistration}
              />
              <Route
                exact
                path="/doctorRegistration"
                component={DoctorRegistration}
              />

              <Route exact path="/doctorProfile" component={DoctorProfile} />
              <Route exact path="/patientProfile" component={PatientProfile} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
