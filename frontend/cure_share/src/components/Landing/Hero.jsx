import React from "react";
import doctorNetwork from "../../images/doc-png.png"; // Ensure correct path

const Hero = () => {
  return (
    <section className="text-center py-20 px-4 relative overflow-hidden">
      {/* Custom vibration animation */}
      <style>
        {`
          @keyframes vibrate {
            0% { transform: translateX(0); }
            25% { transform: translateX(-2px); }
            50% { transform: translateX(2px); }
            75% { transform: translateX(-2px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>

      {/* Animated Heading */}
      <h1
        className="text-3xl md:text-5xl font-extrabold mb-8 leading-snug text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 hover:scale-105 transition duration-300"
        style={{ animation: "vibrate 0.4s ease-in-out infinite" }}
      >
        Cure Share – empowering doctors
        <br className="hidden md:inline" />
        through real world learning*
      </h1>

      {/* Hero Image */}
      <img
        src={doctorNetwork}
        alt="Doctor Network"
        className="mx-auto w-4/5 max-w-3xl"
      />
    </section>
  );
};

export default Hero;
