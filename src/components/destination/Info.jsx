import React from "react";

import "./destinationStyles.css";

export default function Info({ cName, heading, text, image1, image2 }) {
  return (
    <div className={cName}>
      <div className="descText">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="descImg">
        <img src={image1} alt="description image" />
        <img src={image2} alt="description image" />
      </div>
    </div>
  );
}
