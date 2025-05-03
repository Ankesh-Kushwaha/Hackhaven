import React from "react";
import SidebarProfile from "./SidebarProfile";
import Feed from "./Feed";
import FilterTags from "./FilterTags";
import DoctorsList from "./DoctorsList";
import HomeNavBar from "../Landing/HomeNavBar";


const HomePage = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse at top , rgb(172, 194, 216) 10%, rgb(181, 165, 227) 40%, rgb(212, 188, 188) 100%)",
      }}
    >
      <div className="min-h-screen">
        <HomeNavBar />
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-1 py-6 gap-2 h-auto">
          <SidebarProfile />
          <Feed />
          <div className="hidden lg:block space-y-6">
            <FilterTags />
            <DoctorsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
