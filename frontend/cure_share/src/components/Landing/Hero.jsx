 
import React from 'react';
import doctorNetwork from '../../images/doc-png.png'; // Replace with actual image path

const Hero = () => {
  return (
    <section
      className="text-center py-20 px-4"
      style={{
        background:
          'radial-gradient(circle at top left, #c0e0ff 0%, #d9ccff 40%, #ffffff 100%)'
      }}
    >
      <h1 className="text-3xl md:text-5xl font-semibold mb-8 leading-snug">
        Cure Share – empowering doctors<br className="hidden md:inline" /> through real world learning*
      </h1>
      <img
        src={doctorNetwork}
        alt="Doctor Network"
        className=" mx-auto w-4/5 max-w-3xl border-none shadow-none outline-none" // Removed border and shadow classes
      />
    </section>
  );
};

export default Hero;
