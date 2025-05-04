import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import {toast} from 'react-toastify'

const SidebarProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});

  const handleCreatePost = () => {
    navigate("/create-post");
  };
  

  const handleProfile = React.useCallback(async () => {
    try {
      const userId = localStorage.getItem("id");
      const res = await axios.get(
        `http://localhost:3000/api/v1/doctor/profile/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setProfile(res.data.doctorProfile);
      toast.success(res.message);
    }
    catch (err) {
      toast.error(err.message);
    }
  });

  useEffect(() => {
    handleProfile();
  }, [handleProfile]);



  return (
    <div className="w-full h-full md:w-64 shadow rounded-lg p-4 bg-gray-100">
      <div className="flex flex-col items-center text-center">
        <img
          src="https://imgs.search.brave.com/lu5Qr2afNGPu4ByrBboz1O0d1TwwcbTGuqKPdiInVvs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/NTQ2MjczMi9waG90/by9oZWFkc2hvdC1z/dHVkaW8tcG9ydHJh/aXQtb2YtYS13b21h/bi1pbi1wcm9maWxl/LWxvb2tpbmctYXQt/dGhlLWNhbWVyYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VDBSLXBBbUpKcEVy/V2M4aEUwalNKbm1w/dFVGUTVNdnRQWDdO/UEpKbG45cz0"
          alt="profile"
          className="rounded-full object-cover w-24 h-24 mb-3"
        />
        <h2 className="text-lg font-semibold">{profile.fullName}</h2>
        <p className="text-sm text-gray-500 mb-1">{profile.email}</p>
        <p className="text-sm text-gray-600 font-medium">Senior Cardiologist</p>
        <p className="text-sm text-gray-500 italic mb-2">
          Specialties: Cardiology, Internal Medicine
        </p>

        <p className="text-sm text-gray-700 mb-4">{profile.bio}</p>

        <div className="flex justify-between flex-col w-full px-4 mb-4">
          <div className="text-center">
            <p className="text-base font-bold text-gray-800">500</p>
            <p className="text-xs text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-base font-bold text-gray-800">
              {profile.reputationPoints}
            </p>
            <p className="text-xs text-gray-500">Points</p>
          </div>
          <div className="text-center">
            <p className="text-base font-bold text-gray-800">
              {profile.licenseCountry}
            </p>
            <p className="text-xs text-gray-500">Country</p>
          </div>
          <div className="text-center">
            <p className="text-base font-bold text-gray-800">5</p>
            <p className="text-xs text-gray-500">Posts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
