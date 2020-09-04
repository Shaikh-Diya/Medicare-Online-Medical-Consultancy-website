import React from "react";

const Card = (props) => {
  return (
    <div class="card bg-dark text-white">
      <img class="card-img" src={props.imgsrc} alt="Card image" />
      <div class="card-img-overlay">
        <h5 class="card-title">{props.title}</h5>
      </div>
    </div>
  );
};
export default Card;
