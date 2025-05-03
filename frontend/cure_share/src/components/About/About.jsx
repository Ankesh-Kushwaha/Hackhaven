import React from "react";
import logo from "../../images/logo.png";

const About = () => {
  return (
    
    <div
      className="min-h-screen px-4 py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 "
      style={{
        background:
          "radial-gradient(circle at top left, #c0e0ff 0%, #d9ccff 40%, #ffffff 100%)",
      }}
    >
    <div className="flex items-center absolute top-6 left-6">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
        <span className="ml-2 text-xl font-bold text-blue-600"></span>
      </div>
      
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-4xl font-extrabold text-purple-700 mb-6">
          About CureShare
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          CureShare is a collaborative platform that connects verified doctors
          to share real-world clinical cases. It enables continuous learning and
          improves decision-making by fostering discussion among healthcare
          professionals.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-purple-100 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold text-purple-600 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To bridge the gap between textbook knowledge and practical
              experience by providing a secure space for healthcare
              professionals to share and collaborate on real-world cases.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-purple-100 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold text-purple-600 mb-3">
              Why CureShare?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Doctors often work in isolation. CureShare offers a secure,
              verified network for discussing rare cases, learning from peers,
              and expanding clinical knowledge collaboratively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
