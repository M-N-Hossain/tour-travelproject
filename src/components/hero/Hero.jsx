import React from "react";

import "./heroStyles.css";

export default function Hero(props) {
  return (
    <div className={props.cName}>
      <img
        src={props.heroImg}
        alt="Hero Image"
      />
      <div className="heroText">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.btnText}</a>
      </div>
    </div>
  );
}
