import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import AppCTA from "./AppCTA";

const Landing = () => {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at top , rgb(172, 194, 216) 10%, rgb(181, 165, 227) 40%, rgb(212, 188, 188) 100%)",
        }}
      >
        <Hero />
        <HowItWorks />
        <Features />

        <AppCTA />
      </div>
       
    </div>
  );
};

export default Landing;
