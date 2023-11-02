import React from "react";

import "./tripStyles.css";
import InfoTrip from "./InfoTrip";
import Trip1 from "../../assets/5.jpg";
import Trip2 from "../../assets/8.jpg";
import Trip3 from "../../assets/6.jpg";

export default function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ea nulla
        maxime quaerat praesentium dolor in quis voluptatem beatae numquam.
      </p>
      <div className="tripCards">
        <InfoTrip
          img={Trip1}
          heading="Trip in Venice"
          text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ea nulla
        maxime quaerat praesentium dolor in quis voluptatem beatae numquam."
        />
        <InfoTrip
          img={Trip2}
          heading="Trip in Malasia"
          text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ea nulla
        maxime quaerat praesentium dolor in quis voluptatem beatae numquam."
        />
        <InfoTrip
          img={Trip3}
          heading="Trip in France"
          text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ea nulla
        maxime quaerat praesentium dolor in quis voluptatem beatae numquam."
        />
      </div>
    </div>
  );
}
