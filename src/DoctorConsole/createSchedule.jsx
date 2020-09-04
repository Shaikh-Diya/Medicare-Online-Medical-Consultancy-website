import React, { Component } from "react";
import axios from "axios";

class CreateSchedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monday1: "",
      monday2: "",
      monday3: "",
      monday4: "",

      tuesday1: "",
      tuesday2: "",
      tuesday3: "",
      tuesday4: "",

      wednesday1: "",
      wednesday2: "",
      wednesday3: "",
      wednesday4: "",

      thursday1: "",
      thursday2: "",
      thursday3: "",
      thursday4: "",

      friday1: "",
      friday2: "",
      friday3: "",
      friday4: "",

      saturday1: "",
      saturday2: "",
      saturday3: "",
      saturday4: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeMonday1 = this.onChangeMonday1.bind(this);
    this.onChangeMonday2 = this.onChangeMonday2.bind(this);
    this.onChangeMonday3 = this.onChangeMonday3.bind(this);
    this.onChangeMonday4 = this.onChangeMonday4.bind(this);

    this.onChangeTuesday1 = this.onChangeTuesday1.bind(this);
    this.onChangeTuesday2 = this.onChangeTuesday2.bind(this);
    this.onChangeTuesday3 = this.onChangeTuesday3.bind(this);
    this.onChangeTuesday4 = this.onChangeTuesday4.bind(this);

    this.onChangeWednesday1 = this.onChangeWednesday1.bind(this);
    this.onChangeWednesday2 = this.onChangeWednesday2.bind(this);
    this.onChangeWednesday3 = this.onChangeWednesday3.bind(this);
    this.onChangeWednesday4 = this.onChangeWednesday4.bind(this);

    this.onChangeThursday1 = this.onChangeThursday1.bind(this);
    this.onChangeThursday2 = this.onChangeThursday2.bind(this);
    this.onChangeThursday3 = this.onChangeThursday3.bind(this);
    this.onChangeThursday4 = this.onChangeThursday4.bind(this);

    this.onChangeFriday1 = this.onChangeFriday1.bind(this);
    this.onChangeFriday2 = this.onChangeFriday2.bind(this);
    this.onChangeFriday3 = this.onChangeFriday3.bind(this);
    this.onChangeFriday4 = this.onChangeFriday4.bind(this);

    this.onChangeSaturday1 = this.onChangeSaturday1.bind(this);
    this.onChangeSaturday2 = this.onChangeSaturday2.bind(this);
    this.onChangeSaturday3 = this.onChangeSaturday3.bind(this);
    this.onChangeSaturday4 = this.onChangeSaturday4.bind(this);
  }
  onChangeMonday1(e) {
    this.setState({
      monday1: e.target.value,
    });
  }
  onChangeMonday2(e) {
    this.setState({
      monday2: e.target.value,
    });
  }
  onChangeMonday3(e) {
    this.setState({
      monday3: e.target.value,
    });
  }
  onChangeMonday4(e) {
    this.setState({
      monday4: e.target.value,
    });
  }
  onChangeTuesday1(e) {
    this.setState({
      tuesday1: e.target.value,
    });
  }
  onChangeTuesday2(e) {
    this.setState({
      tuesday2: e.target.value,
    });
  }
  onChangeTuesday3(e) {
    this.setState({
      tuesday3: e.target.value,
    });
  }
  onChangeTuesday4(e) {
    this.setState({
      tuesday4: e.target.value,
    });
  }
  onChangeWednesday1(e) {
    this.setState({
      wednesday1: e.target.value,
    });
  }
  onChangeWednesday2(e) {
    this.setState({
      wednesday2: e.target.value,
    });
  }
  onChangeWednesday3(e) {
    this.setState({
      wednesday3: e.target.value,
    });
  }
  onChangeWednesday4(e) {
    this.setState({
      wednesday4: e.target.value,
    });
  }
  onChangeThursday1(e) {
    this.setState({
      thursday1: e.target.value,
    });
  }
  onChangeThursday2(e) {
    this.setState({
      thursday2: e.target.value,
    });
  }
  onChangeThursday3(e) {
    this.setState({
      thursday3: e.target.value,
    });
  }
  onChangeThursday4(e) {
    this.setState({
      thursday4: e.target.value,
    });
  }
  onChangeFriday1(e) {
    this.setState({
      friday1: e.target.value,
    });
  }
  onChangeFriday2(e) {
    this.setState({
      friday2: e.target.value,
    });
  }
  onChangeFriday3(e) {
    this.setState({
      friday3: e.target.value,
    });
  }
  onChangeFriday4(e) {
    this.setState({
      friday4: e.target.value,
    });
  }
  onChangeSaturday1(e) {
    this.setState({
      saturday1: e.target.value,
    });
  }
  onChangeSaturday2(e) {
    this.setState({
      saturday2: e.target.value,
    });
  }
  onChangeSaturday3(e) {
    this.setState({
      saturday3: e.target.value,
    });
  }
  onChangeSaturday4(e) {
    this.setState({
      saturday4: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    debugger;
    const scheduleContent = {
      monday1: this.state.monday1,
      monday2: this.state.monday2,
      monday3: this.state.monday3,
      monday4: this.state.monday4,

      tuesday1: this.state.tuesday1,
      tuesday2: this.state.tuesday2,
      tuesday3: this.state.tuesday3,
      tuesday4: this.state.tuesday4,

      wednesday1: this.state.wednesday1,
      wednesday2: this.state.wednesday2,
      wednesday3: this.state.wednesday3,
      wednesday4: this.state.wednesday4,

      thursday1: this.state.thursday1,
      thursday2: this.state.thursday2,
      thursday3: this.state.thursday3,
      thursday4: this.state.thursday4,

      friday1: this.state.friday1,
      friday2: this.state.friday2,
      friday3: this.state.friday3,
      friday4: this.state.friday4,

      saturday1: this.state.saturday1,
      saturday2: this.state.saturday2,
      saturday3: this.state.saturday3,
      saturday4: this.state.saturday4,
    };
    console.log(scheduleContent);

    axios
      .post(
        "https://csci5709projectdemo.herokuapp.com/schedule/addSchedule",
        scheduleContent
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }
  render() {
    return (
      <div>
        <div class="edit-profile">
          <h3 class="edit-profile-title">Create Schedule</h3>
        </div>
        <div class="edit-form">
          <form onSubmit={this.onSubmit}>
            <div class="location-div">
              <div class="row">
                <div class="country-form">
                  <div class="form-group">
                    <label for="country-label">Monday </label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="Enter time"
                      value={this.state.monday1}
                      onChange={this.onChangeMonday1}
                    />
                  </div>
                </div>

                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="Enter time"
                      value={this.state.monday2}
                      onChange={this.onChangeMonday2}
                    />
                  </div>
                </div>
                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="Enter time"
                      value={this.state.monday3}
                      onChange={this.onChangeMonday3}
                    />
                  </div>
                </div>
                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="Enter time"
                      value={this.state.monday4}
                      onChange={this.onChangeMonday4}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="location-div">
              <div class="row">
                <div class="country-form">
                  <div class="form-group">
                    <label for="country-label">Tuesday</label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="Enter time"
                      value={this.state.tuesday1}
                      onChange={this.onChangeTuesday1}
                    />
                  </div>
                </div>

                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="Enter time"
                      value={this.state.tuesday2}
                      onChange={this.onChangeTuesday2}
                    />
                  </div>
                </div>
                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="enter time"
                      value={this.state.tuesday3}
                      onChange={this.onChangeTuesday3}
                    />
                  </div>
                </div>
                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="enter time"
                      value={this.state.tuesday4}
                      onChange={this.onChangeTuesday4}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="location-div">
              <div class="row">
                <div class="country-form">
                  <div class="form-group">
                    <label for="country-label">Wednesday</label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="Enter time"
                      value={this.state.wednesday1}
                      onChange={this.onChangeWednesday1}
                    />
                  </div>
                </div>

                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="enter time"
                      value={this.state.wednesday2}
                      onChange={this.onChangeWednesday2}
                    />
                  </div>
                </div>
                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="enter time"
                      value={this.state.wednesday3}
                      onChange={this.onChangeWednesday3}
                    />
                  </div>
                </div>
                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="enter time"
                      value={this.state.wednesday4}
                      onChange={this.onChangeWednesday4}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="location-div">
              <div class="row">
                <div class="country-form">
                  <div class="form-group">
                    <label for="country-label">Thursday</label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="Enter time"
                      value={this.state.thursday1}
                      onChange={this.onChangeThursday1}
                    />
                  </div>
                </div>

                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="Enter time"
                      value={this.state.thursday2}
                      onChange={this.onChangeThursday2}
                    />
                  </div>
                </div>
                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="Enter time"
                      value={this.state.thursday3}
                      onChange={this.onChangeThursday3}
                    />
                  </div>
                </div>
                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="Enter time"
                      value={this.state.thursday4}
                      onChange={this.onChangeThursday4}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="location-div">
              <div class="row">
                <div class="country-form">
                  <div class="form-group">
                    <label for="country-label">Friday</label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="Enter time"
                      value={this.state.friday1}
                      onChange={this.onChangeFriday1}
                    />
                  </div>
                </div>

                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="enter time"
                      value={this.state.friday2}
                      onChange={this.onChangeFriday2}
                    />
                  </div>
                </div>
                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="enter time"
                      value={this.state.friday3}
                      onChange={this.onChangeFriday3}
                    />
                  </div>
                </div>
                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="enter time"
                      value={this.state.friday4}
                      onChange={this.onChangeFriday4}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="location-div">
              <div class="row">
                <div class="country-form">
                  <div class="form-group">
                    <label for="country-label">Saturday</label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="Enter time"
                      value={this.state.saturday1}
                      onChange={this.onChangeSaturday1}
                    />
                  </div>
                </div>

                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="enter time"
                      value={this.state.saturday2}
                      onChange={this.onChangeSaturday2}
                    />
                  </div>
                </div>
                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="enter time"
                      value={this.state.saturday3}
                      onChange={this.onChangeSaturday3}
                    />
                  </div>
                </div>
                <div class="timezone-form">
                  <div class="form-group">
                    <label for="time-zone-label"></label>
                    <input
                      type="text"
                      class="time-zone-input"
                      id="time-zone"
                      placeholder="enter time"
                      value={this.state.saturday4}
                      onChange={this.onChangeSaturday4}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" value="Post" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateSchedule;
