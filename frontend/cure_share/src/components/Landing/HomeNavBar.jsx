import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const HomeNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <span className="ml-2 text-xl font-bold text-blue-600"></span>
      </div>

      {/* Global Search Bar */}
      <div className="hidden md:flex items-center flex-grow px-4">
        <input
          type="text"
          placeholder="Search for cases, doctors..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Create Case Button */}
      <div className="hidden md:flex space-x-4">
        <Link
          to="/create-case"
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Create Case
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
            {/* Global Search Bar for Mobile */}
            <input
              type="text"
              placeholder="Search for cases, doctors..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-4/5 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Create Case Button for Mobile */}
            <Link
              to="/create-case"
              className="px-4 py-2 bg-blue-600 text-white rounded-full w-4/5 text-center"
            >
              Create Case
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default HomeNavBar;
