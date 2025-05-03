import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import AppCTA from "./AppCTA";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <HowItWorks/>
      <Features/>
      <AppCTA/>
      <Footer/>

      {/* Additional sections like HowItWorks, Features, etc. will go below */}
      {/* Let me know if you'd like me to componentize those as well */}
    </div>
  );
};

export default Landing;
