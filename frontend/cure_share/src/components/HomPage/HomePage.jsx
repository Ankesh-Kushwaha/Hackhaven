import React from "react";

import Navbar from "../Landing/Navbar";
import SidebarProfile from "./SidebarProfile";
import Feed from "./Feed";
import FilterTags from "./FilterTags";
import DoctorsList from "./DoctorsList";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 py-6 gap-6">
        <SidebarProfile />
        <Feed />
        <div className="hidden lg:block space-y-6">
          <FilterTags />
          <DoctorsList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
