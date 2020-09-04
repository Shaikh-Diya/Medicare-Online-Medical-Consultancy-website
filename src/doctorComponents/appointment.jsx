import React, { Component } from "react";
import NavBar from "../components/navbar";
import axios from "axios";
import "./appointment-style.css";
class Appointment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patientname: "",
      patientemail: "",
      doctorname: "",
      doctoremail: "",
      day: "",
      time: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangePatientName = this.onChangePatientName.bind(this);
    this.onChangePatientEmail = this.onChangePatientEmail.bind(this);
    this.onChangeDoctorName = this.onChangeDoctorName.bind(this);
    this.onChangeDoctorEmail = this.onChangeDoctorEmail.bind(this);
    this.onChangeDay = this.onChangeDay.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
  }

  onChangePatientName(e) {
    this.setState({
      patientname: e.target.value,
    });
  }
  onChangePatientEmail(e) {
    this.setState({
      patientemail: e.target.value,
    });
  }
  onChangeDoctorName(e) {
    this.setState({
      doctorname: e.target.value,
    });
  }
  onChangeDoctorEmail(e) {
    this.setState({
      doctoremail: e.target.value,
    });
  }
  onChangeDay(e) {
    this.setState({
      day: e.target.value,
    });
  }
  onChangeTime(e) {
    this.setState({
      time: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    debugger;
    const appointment = {
      patientname: this.state.patientname,
      patientemail: this.state.patientemail,
      doctorname: this.state.doctorname,
      doctoremail: this.state.doctoremail,
      day: this.state.day,
      time: this.state.time,
    };
    console.log(appointment);

    axios
      .post(
        "https://csci5709projectdemo.herokuapp.com/appointment/addAppointment",
        appointment
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }
  render() {
    return (
      <div class="make-appointment">
        <NavBar />

        <div class="appointment-booking-content">
          <div className="row">
            <div className="schedule-content">
              <h3 class="schedule-title">Schedule</h3>
              <table className="schedule-table">
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
                <tr>
                  <td>9:00am - 9:30am</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>9:00am - 9:30am</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>9:30am - 10:00am</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>10:00am - 10:30am</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>10:30am - 11:00am</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>11:00am - 11:30am</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>11:30am - 12:00pm</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>12:00pm - 12:30pm</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>12:30pm - 13:00pm</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>13:00pm - 13:30pm</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>13:30pm - 14:00pm</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>14:00pm - 14:30pm</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>14:30pm - 15:00pm</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>15:00pm - 15:30pm</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>15:30pm - 16:00pm</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>16:00pm - 16:30pm</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>16:30pm - 17:00pm</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>17:00pm - 17:30pm</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>17:30pm - 18:00pm</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                  <td>Available</td>
                </tr>
              </table>
            </div>
            <div class="appointment-form">
              <div className="appoinment-form-title-div">
                <h3 className="appoinment-form-title">Book Appoinment</h3>
              </div>
              <form onSubmit={this.onSubmit}>
                <div class="patient-name-input">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Patient name"
                    value={this.state.patientname}
                    onChange={this.onChangePatientName}
                  />
                </div>
                <div class="appointment-email-input">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Patient Email"
                    value={this.state.patientemail}
                    onChange={this.onChangePatientEmail}
                  />
                </div>
                <div class="doctor-name-input">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Doctor name"
                    value={this.state.doctorname}
                    onChange={this.onChangeDoctorName}
                  />
                </div>
                <div class="appointment-email-input">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Doctor Email"
                    value={this.state.doctoremail}
                    onChange={this.onChangeDoctorEmail}
                  />
                </div>
                <div class="location-div">
                  <div class="row">
                    {/* <label>Day</label> */}
                    <input
                      type="text"
                      class="input-day"
                      placeholder="Enter Day"
                      value={this.state.day}
                      onChange={this.onChangeDay}
                    />

                    {/* <label>Time </label> */}
                    <input
                      type="text"
                      class="input-time"
                      placeholder="Enter time"
                      value={this.state.time}
                      onChange={this.onChangeTime}
                    />
                  </div>
                </div>
                {/* <div class="appointment-date-input">
                  <input type="date" class="form-control" placeholder="" />
                </div> */}

                <button
                  type="submit"
                  id="apnt_sub"
                  class="btn btn-primary"
                  value="Post"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
