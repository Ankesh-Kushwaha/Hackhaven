import React from 'react';

const DoctorsList = () => {
  const doctors = ['Dr. Smith', 'Dr. Alice', 'Dr. Nikhil'];
  return (
    <div className="bg-gray-200 p-4 shadow rounded-lg">
      <h3 className="font-semibold mb-2">Doctors to Follow</h3>
      <ul>
        {doctors.map((doc, i) => (
          <li key={i} className="flex justify-between mb-2">
            <span>{doc}</span>
            <button className="text-blue-600">Follow</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsList;