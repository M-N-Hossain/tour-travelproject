import React from "react";

import Mountain1 from "../../assets/1.jpg";
import Mountain2 from "../../assets/2.jpg";
import Mountain3 from "../../assets/3.jpg";
import Mountain4 from "../../assets/4.jpg";
import "./destinationStyles.css";
import Info from "./Info";

export default function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot within a time frame.</p>
      <Info
        cName="firstDesc"
        heading="Taal Volcano, Batangas"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            eum ut enim accusantium sequi quos tempora quidem laboriosam!
            Commodi veritatis odio consequuntur eaque accusamus odit placeat
            voluptas, dolorum suscipit vero. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Placeat temporibus error commodi
            dolores libero aspernatur."
        image1={Mountain1}
        image2={Mountain2}
      />
      <Info
        cName="firstDescReverse"
        heading="Taal Volcano, Batangas"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            eum ut enim accusantium sequi quos tempora quidem laboriosam!
            Commodi veritatis odio consequuntur eaque accusamus odit placeat
            voluptas, dolorum suscipit vero. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Placeat temporibus error commodi
            dolores libero aspernatur."
        image1={Mountain3}
        image2={Mountain4}
      />
    </div>
  );
}
