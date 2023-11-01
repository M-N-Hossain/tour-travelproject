import React from "react";

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import aboutImg from "../assets/night.jpg";

export default function About() {
  return (
    <>
      <Navbar />
      <Hero cName="heroMid" heroImg={aboutImg} title="About" btnClass="hide" />
    </>
  );
}
