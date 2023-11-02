import React from "react";

export default function InfoTrip({ img, heading, text }) {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={img} alt="tripImg" />
      </div>
      <h4>{heading}</h4>
      <p>{text}</p>
    </div>
  );
}
