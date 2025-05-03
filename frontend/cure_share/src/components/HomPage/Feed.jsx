import React from 'react';
import PostCard from './PostCard';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'

const Feed = () => {
  const [cases, setCases] = useState([]);

  const getAlPost = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const res = await axios.get("http://localhost:3000/api/v1/post/getall", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCases(res.data.cases);
      toast.success(res.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getAlPost();
    console.log(cases);
  }, []);

  useEffect(() => {
    console.log("Updated cases:", cases); // Logs the state whenever it changes
  }, [cases]); // Runs every time 'cases' state changes


  return (
    <div className="max-w-5xl w-md cursor-pointer flex flex-col justify-center mx-auto px-4 space-y-6">
      {cases.map((post, idx) => (
        <div
          key={idx}
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Feed;