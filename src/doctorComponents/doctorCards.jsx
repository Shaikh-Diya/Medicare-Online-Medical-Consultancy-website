import React, { Component } from "react";
import Card from "./doctorCardUI";
import "../forumComponents/card-style.css";
import img1 from "./doctorImages/doctor1.jpeg";
import img2 from "./doctorImages/doctor2.jpeg";
import img3 from "./doctorImages/doctor3.jpeg";
import img4 from "./doctorImages/doctor4.jpeg";
import img5 from "./doctorImages/doctor5.jpeg";
import img6 from "./doctorImages/doctor6.jpeg";

class Cards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card
        imgsrc={img1}
        title={this.props.doctorname}
        experience={this.props.experience}
        doctorId={this.props.doctorId}
      />
    );
  }
}

export default Cards;
