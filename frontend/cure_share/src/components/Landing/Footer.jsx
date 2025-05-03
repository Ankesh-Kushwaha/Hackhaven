import React from 'react';
//import logo from '../../images/logo.png'; // Update this path if needed

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 md:px-20 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Copyright */}
        <div className="flex items-center gap-2">
          {/* <img src={logo} alt="Cure Share Logo" className="h-6 md:h-8" /> */}
          <span className="text-gray-500 text-sm">© Cure Share | All Rights Reserved</span>
        </div>

        {/* Links */}
        <div className="space-x-4 text-sm text-gray-500">
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
