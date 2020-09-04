import React, { Component } from "react";
import Card from "./aboutCardUI";
import img1 from "./aboutImages/question.jpg";
import img2 from "./aboutImages/onlineconsultancydoctor.jpg";
import img3 from "./aboutImages/payment.jpeg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc={img1} title="Forum" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img2} title="Online Consultancy" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img3} title="Payment" />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
