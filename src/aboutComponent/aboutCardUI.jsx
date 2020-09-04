import React from "react";

import "./aboutCard-style.css";

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title text-dark">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
          repudiandae dolore minima possimus, doloribus laboriosam ipsam
          similique magni, suscipit numquam temporibus perspiciatis molestiae
          magnam ipsa iure aliquid error architecto sequi.
        </p>
      </div>
    </div>
  );
};
export default Card;
