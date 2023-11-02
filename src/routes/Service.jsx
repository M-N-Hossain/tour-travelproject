import React from "react";

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import aboutImg from "../assets/night.jpg";
import Footer from "../components/footer/Footer";
import Trip from "../components/trip/Trip";

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
      <Trip />
      <Footer />
    </>
  );
}
