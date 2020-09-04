import React, { Component } from "react";
import "./createReview-style.css";
import axios from "axios";
import PatientNavBar from "./patientNavbar";

class CreateReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctorname: "",
      doctoremail: "",
      review: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeDoctorName = this.onChangeDoctorName.bind(this);
    this.onChangeDoctorEmail = this.onChangeDoctorEmail.bind(this);
    this.onChangeReview = this.onChangeReview.bind(this);
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
  onChangeReview(e) {
    this.setState({
      review: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    debugger;
    const reviewContent = {
      doctorname: this.state.doctorname,
      doctoremail: this.state.doctoremail,
      review: this.state.review,
    };
    console.log(reviewContent);

    axios
      .post(
        "https://csci5709projectdemo.herokuapp.com/review/addReview",
        reviewContent
      )
      .then((res) => console.log(res.data));

    window.location = "/patientProfile";
  }
  render() {
    return (
      <div>
        <PatientNavBar />
        <div className="create-review-body">
          <h3 className="create-review-title text-center">Review</h3>
          <div className="form-create-review-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="input-fullname">Doctor Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputfullname"
                    placeholder="Full Name"
                    value={this.state.doctorname}
                    onChange={this.onChangeDoctorName}
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="input-question">Doctor Email</label>
                <br />
                <input
                  type="email"
                  class="form-control"
                  id="inputfullname"
                  placeholder="Email"
                  value={this.state.doctoremail}
                  onChange={this.onChangeDoctorEmail}
                />
              </div>

              <div class="form-group">
                <label for="input-question">Write review</label>
                <br />
                <textarea
                  class="form-control"
                  id="questioncontent"
                  rows="2"
                  placeholder=" Review "
                  value={this.state.review}
                  onChange={this.onChangeReview}
                ></textarea>
              </div>

              <button
                type="submit"
                className="ask-question-button"
                value="Post"
                // onClick={() => {
                //   var inputfullname = document.getElementById("inputfullname")
                //     .value;
                //   var questioncontent = document.getElementById(
                //     "questioncontent"
                //   ).value;
                //   var descriptioncontent = document.getElementById(
                //     "descriptioncontent"
                //   ).value;
                //   var inputCity = document.getElementById("inputCity").value;
                //   var inputState = document.getElementById("inputState").value;

                //   if (
                //     inputfullname == "" ||
                //     questioncontent == "" ||
                //     descriptioncontent == "" ||
                //     inputCity == "" ||
                //     inputState == ""
                //   ) {
                //     alert("Please Fill up all the fields");
                //   } else {
                //     alert("Congrats");
                //   }
                // }}
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateReview;
