import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Menu, X } from "lucide-react";
 
import { Link } from "react-router-dom";
 


const About = () => {

const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };  
  return (
    <div>
     <header
      className="flex justify-between items-center px-6 py-4 bg-[#f4f1f7] relative z-50 h-20"
      style={{
        background:
          "radial-gradient(ellipse at top, rgb(221, 229, 237) 10%, rgb(229, 225, 241) 40%, rgb(227, 213, 213) 100%)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
        <span className="ml-2 text-xl font-bold text-blue-600"></span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 items-center">
        <Link
          to="/HomePage"
          className="px-4 py-2 text-600 rounded-full hover:bg-blue-50 transition"
        >
          Home
        </Link>
        <a href="#features" className="px-4 py-2 text-600 rounded-full hover:text-blue-600 transition">
          Features
        </a>
         
        <Link to="/contact" className="px-4 py-2 text-600 rounded-full hover:text-blue-600 transition">
          Contact
        </Link>
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white md:hidden transition-all shadow-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link to="/HomePage" onClick={handleLinkClick} className="hover:text-blue-600">
              Home
            </Link>
            <a href="#features" onClick={handleLinkClick} className="hover:text-blue-600">
              Features
            </a>
             
            <Link to="/contact" onClick={handleLinkClick} className="hover:text-blue-600">
              Contact
            </Link>
             
             
          </div>
        </div>
      )}
    </header>
      <div
      className="min-h-screen px-4 py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 "
      style={{
          background:
            "radial-gradient(ellipse at top , rgb(172, 194, 216) 10%, rgb(181, 165, 227) 40%, rgb(212, 188, 188) 100%)",
        }}
    >
   
     
      
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
    </div>
    
  );
};

export default About;
