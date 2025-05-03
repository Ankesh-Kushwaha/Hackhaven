import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <span className="ml-2 text-xl font-bold text-blue-600"></span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 items-center">
        <Link
          to="/HomePage"
          className="px-4 py-2 text-blue-600 rounded-full hover:bg-blue-50 transition"
        >
          Home
        </Link>
        <a href="#features" className="hover:text-blue-600 transition">
          Features
        </a>
        <Link to="/about" className="hover:text-blue-600 transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-600 transition">
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
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden transition-all">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link to="/HomePage" onClick={handleLinkClick} className="hover:text-blue-600">
              Home
            </Link>
            <a href="#features" onClick={handleLinkClick} className="hover:text-blue-600">
              Features
            </a>
            <Link to="/about" onClick={handleLinkClick} className="hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" onClick={handleLinkClick} className="hover:text-blue-600">
              Contact
            </Link>
            <Link
              to="/login"
              onClick={handleLinkClick}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full w-4/5 text-center"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={handleLinkClick}
              className="px-4 py-2 bg-blue-600 text-white rounded-full w-4/5 text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

