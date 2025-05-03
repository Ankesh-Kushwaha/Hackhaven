import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

const Signup = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const navigate = useNavigate();

  const countries = ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'];

  const indiaStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
    'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
    'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh'
  ];

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setStates(country === 'India' ? indiaStates : []);
    setSelectedState("");
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        background:
          'radial-gradient(circle at top left,rgb(195, 209, 224) 0%,rgb(201, 190, 237) 40%,rgb(196, 159, 199) 100%)'
      }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-100 via-white to-purple-50 px-4"
    >
      <div className="w-full max-w-lg bg-[#FAF9F6] p-8 rounded-2xl shadow-xl border border-purple-100">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </div>

        <h2 className="text-2xl font-semibold text-center text-purple-700 mb-4">
          Doctor Registration - Cure Share
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full h-9 p-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-9 p-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-9 p-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="w-full h-9 p-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Select License Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>

          <select
            value={selectedState}
            onChange={handleStateChange}
            disabled={!states.length}
            className="w-full h-9 p-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">
              {states.length ? "Select License State" : "No states available"}
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <textarea
            rows="3"
            placeholder="Brief Bio (Specialization, Experience, etc.)"
            className="w-full p-1.5 h-[75px] border border-gray-300 rounded-md resize-none text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md text-sm hover:bg-purple-700 transition-colors duration-200"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <span
            onClick={handleLoginRedirect}
            className="text-purple-600 font-medium cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
