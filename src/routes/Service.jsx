import React from "react";

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import aboutImg from "../assets/night.jpg";

export default function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="heroMid"
        heroImg={aboutImg}
        title="Service"
        btnClass="hide"
      />
    </>
  );
}
