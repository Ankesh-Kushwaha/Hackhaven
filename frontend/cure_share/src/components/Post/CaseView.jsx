import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import HomeNavBar from "../Landing/HomeNavBar";
import {toast} from 'react-toastify'

const CaseView = () => {
  const [singleCase, setSinglecase] = useState({});
  const postId = useParams('id');
  const token = localStorage.getItem("token");


  const fetchSingleCase = async () => {
    const res = await axios.get(`http://localhost:3000/api/v1/post/${postId.id}`, {
      headers: {
        Authorization:`Bearer ${token}` ,
      },
    });
    setSinglecase(res.data.case);
  }

 const handleUpvotes = async () => {
   try {
     const res = await axios.post(
       `http://localhost:3000/api/v1/post/upvote/${postId.id}`,
       {}, // No body content, so use an empty object
       {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       }
     );
     toast.success(res.data.message);
   } catch (err) {
     toast.error(err.response?.data?.message || err.message);
   }
 };

  
  const handleDownvotes = async() => {
     try {
       const res = await axios.post(
         `http://localhost:3000/api/v1/post/downvote/${postId.id}`,
         {}, // No body content, so use an empty object
         {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         }
       );
       toast.success(res.data.message);
     } catch (err) {
       toast.error(err.response?.data?.message || err.message);
     }
  }

  useEffect(() => {
    fetchSingleCase();
  },[])

  if (!singleCase) return <div>No case data found.</div>;

  const {
    title,
    description,
    specialties,
    diseaseTags,
    generalTags,
    patientAge,
    patientGender,
    caseFiles,
    upvotes,
    views,
    status,
    createdAt,
  } = singleCase;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <HomeNavBar />
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8 border border-gray-200">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          Published on {formatDate(createdAt)}
        </p>

        {/* Image */}
        {caseFiles?.length > 0 && caseFiles[0].url && (
          <img
            src={caseFiles[0].url}
            alt="Case Visual"
            className="w-full max-h-[400px] object-cover rounded mb-6"
          />
        )}

        {/* Description */}
        <p className="text-gray-700 leading-relaxed text-lg mb-6 whitespace-pre-wrap">
          {description}
        </p>

        {/* Patient Info */}
        <div className="text-sm text-gray-600 mb-6">
          <p>
            👤 <strong>Gender:</strong> {patientGender}
          </p>
          <p>
            🎂 <strong>Age:</strong> {patientAge}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {specialties?.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
          {diseaseTags?.map((tag, i) => (
            <span
              key={i}
              className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
          {generalTags?.map((tag, i) => (
            <span
              key={i}
              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta Info */}
        <div className="text-sm text-gray-500 border-t pt-4 flex justify-between">
          <p>
            Status: <strong>{status}</strong>
          </p>
          <button onClick={handleUpvotes}>
            <p>
              👁 {views} views | 👍 {upvotes} upvotes
            </p>
          </button>
          <button onClick={handleDownvotes}>
            <p>
               👎 {upvotes} downvotes
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseView;
