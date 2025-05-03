 

// import React, { useState } from "react";

// const Signup = () => {
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [states, setStates] = useState([]);
//   const [selectedState, setSelectedState] = useState("");

//   const countries = ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'];

//   const indiaStates = [
//     'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
//     'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
//     'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
//     'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
//     'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
//     'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh'
//   ];

//   const handleCountryChange = (e) => {
//     const country = e.target.value;
//     setSelectedCountry(country);
//     if (country === 'India') {
//       setStates(indiaStates);
//     } else {
//       setStates([]);
//     }
//     setSelectedState("");
//   };

//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
//   };

//   return (
//     <div
//     style={{
//         background:
//           'radial-gradient(circle at top left,rgb(178, 198, 218) 0%,rgb(182, 173, 212) 40%,rgb(182, 134, 185) 100%)'
//       }}
//      className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-100 via-white to-purple-50 px-4">
//       <div className="w-full max-w-lg bg-white p-10 rounded-2xl shadow-xl border border-purple-100">
//         <h2 className="text-3xl font-semibold text-center text-purple-700 mb-8">
//           Doctor Registration - Cure Share
//         </h2>
//         <form className="space-y-5">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//           />

//           {/* Country Dropdown */}
//           <select
//             value={selectedCountry}
//             onChange={handleCountryChange}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//           >
//             <option value="">Select License Country</option>
//             {countries.map((country) => (
//               <option key={country} value={country}>
//                 {country}
//               </option>
//             ))}
//           </select>

//           {/* State Dropdown */}
//           <select
//             value={selectedState}
//             onChange={handleStateChange}
//             disabled={!states.length}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//           >
//             <option value="">
//               {states.length ? "Select License State" : "No states available"}
//             </option>
//             {states.map((state) => (
//               <option key={state} value={state}>
//                 {state}
//               </option>
//             ))}
//           </select>

//           <textarea
//             rows="4"
//             placeholder="Brief Bio (Specialization, Experience, etc.)"
//             className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
//           ></textarea>

//           <button
//             type="submit"
//             className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors duration-200"
//           >
//             Create Account
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";

const Signup = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");

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
    if (country === 'India') {
      setStates(indiaStates);
    } else {
      setStates([]);
    }
    setSelectedState("");
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div
      style={{
        background:
          'radial-gradient(circle at top left,rgb(178, 198, 218) 0%,rgb(182, 173, 212) 40%,rgb(182, 134, 185) 100%)'
      }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-100 via-white to-purple-50 px-4"
    >
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl border border-purple-100">
        <h2 className="text-3xl font-semibold text-center text-purple-700 mb-6">
          Doctor Registration - Cure Share
        </h2>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Country Dropdown */}
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Select License Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>

          {/* State Dropdown */}
          <select
            value={selectedState}
            onChange={handleStateChange}
            disabled={!states.length}
            className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
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
            className="w-full p-2.5 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2.5 rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
