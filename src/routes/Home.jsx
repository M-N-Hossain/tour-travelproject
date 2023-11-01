import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";

import '../components/hero/heroStyles.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/reserve/91JuTaUSKaMh2yjB1C4A_IMG_9284.jpg?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey Your Story"
        text="Choose your favorite destination"
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
    </>
  );
}
