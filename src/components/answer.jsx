import React, { Component } from "react";
import NavBar from "./navbar";
import axios from "axios";
import "./answer-style.css";

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionObj: {},
    };
  }
  componentDidMount() {
    let id = this.props.location.state;
    // console.log(typeof id);
    // console.log(id.id);
    let ID = id.id;
    axios
      .get("https://csci5709projectdemo.herokuapp.com/questions/" + ID)
      .then((response) => {
        this.setState({ questionObj: response.data });
      });
  }
  render() {
    console.log(this.state.questionObj);
    return (
      <div>
        <NavBar />
        <div>
          <div class="answer-forum">
            <div class="form-group">
              <h5>{this.state.questionObj.question}</h5>

              <p>{this.state.questionObj.description}</p>
            </div>
            <div class="form-group">
              <h5>Answer</h5>
              <p></p>
            </div>
            <div class="write-answer">
              <input
                type="text"
                class="fullname-input"
                id="fullname"
                placeholder="Write answer"
              />
            </div>
            <div class="answer-button">
              <button type="submit" class="btn btn-primary">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Answer;
