import React from "react";
import { useNavigate ,Link} from "react-router-dom";

const SidebarProfile = () => {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate("/create-post");
  };

  return (
    <div className="w-full md:w-64 bg-white shadow rounded-lg p-4">
      <div className="flex flex-col items-center text-center">
        <img
          src="https://via.placeholder.com/100"
          alt="profile"
          className="rounded-full w-24 h-24 mb-2"
        />
        <h2 className="text-lg font-semibold">Dr. John Doe</h2>
        <p className="text-sm text-gray-500">@johndoe</p>
        <Link to={"/create-post"}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handleCreatePost}
        >
          Create Post
        </Link>
      </div>
    </div>
  );
};

export default SidebarProfile;
