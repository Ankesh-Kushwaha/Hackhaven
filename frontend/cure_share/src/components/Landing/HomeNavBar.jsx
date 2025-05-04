import React, { useEffect, useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import axios from 'axios'
import toast from 'react-toastify'

const HomeNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleSearchChange = async (e) => {
    setSearchQuery(e.target.value);

    try {
      const res = await axios.post(
        `http://localhost:3000/api/v1/post/globalsearch?q=${e.target.value}`, // Updated to pass the search term directly here
        {}, // Empty object for the body if you're not sending any data
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // Handle success (for example, log the response)
      console.log(res.data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
     handleSearchChange()
  }, [searchQuery])
  
  const handleLogout = () => {
    // 🔐 Add actual logout logic (e.g. clear tokens)
    localStorage.removeItem("token");
    navigate("/login"); // Or wherever your login page is
  };

  return (
    <header
      className="flex justify-between items-center px-6 py-4 bg-[#f4f1f7] relative z-50 h-20"
      style={{
        background:
          "radial-gradient(ellipse at top, rgb(221, 229, 237) 10%, rgb(229, 225, 241) 40%, rgb(227, 213, 213) 100%)",
      }}
    >
      {/* Logo */}
      <Link to={"/homepage"}>
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
          <span className="ml-2 text-xl font-bold text-blue-600"></span>
        </div>
      </Link>

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

      {/* Right Buttons (Desktop) */}
      <div className="hidden md:flex space-x-4 items-center">
        <Link
          to="/create-case"
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Create Case
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
        >
          <LogOut className="w-4 h-4 mr-1" />
          Logout
        </button>
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
            <input
              type="text"
              placeholder="Search for cases, doctors..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-4/5 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Link
              to="/create-case"
              className="px-4 py-2 bg-blue-600 text-white rounded-full w-4/5 text-center"
              onClick={handleLinkClick}
            >
              Create Case
            </Link>
            <button
              onClick={() => {
                handleLogout();
                handleLinkClick();
              }}
              className="flex items-center justify-center gap-1 px-4 py-2 bg-red-500 text-white rounded-full w-4/5 hover:bg-red-600 transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HomeNavBar;
