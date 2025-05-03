import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">About CureShare</h1>
      
      <p className="text-lg text-gray-700 mb-6 text-center">
        CureShare is a collaborative platform designed to connect verified doctors and enable real-world case sharing. 
        By creating a professional network of healthcare experts, CureShare empowers doctors to learn, post, and discuss 
        complex clinical cases for better decision-making and continuous learning.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To bridge the gap between textbook learning and real clinical experience by giving doctors a safe space 
            to share and collaborate on real-world medical cases.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Why CureShare?</h2>
          <p className="text-gray-600">
            Doctors often work in silos. CureShare brings them together, allowing verified users to discuss rare conditions, 
            comment on cases, and expand their clinical knowledge in a secure digital environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
