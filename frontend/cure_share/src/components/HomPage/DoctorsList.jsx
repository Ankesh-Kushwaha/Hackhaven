import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  
  const doctorId = localStorage.getItem('id');

  const fetchAllProfile = async () => {
    try {
      const res = await axios.get('', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })
      
      setDoctors(res.data.allProfile);
      toast.success(res.message)
    }
    catch (err) {
      toast.error(err.message);
    }
  }
  

  const doctor = ['Dr. Smith', 'Dr. Alice', 'Dr. Nikhil'];
  return (
    <div className="bg-gray-200 p-4 shadow rounded-lg">
      <h3 className="font-semibold mb-2">Doctors to Follow</h3>
      <ul>
        {doctor.map((doc, i) => (
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