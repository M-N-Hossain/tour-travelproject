import React from "react";

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import contactImg from "../assets/2.jpg";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="heroMid"
        heroImg={contactImg}
        title="Contact"
        btnClass="hide"
      />
    </>
  );
}
