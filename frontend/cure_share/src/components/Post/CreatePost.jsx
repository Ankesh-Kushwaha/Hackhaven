import React, { useState } from "react";
import logo from "../../images/logo.png";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title,
      author,
      specialty,
      tags: tags.split(" ").filter(Boolean),
      content,
      image,
    };

    console.log("Post submitted:", postData);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{
        background:
          "radial-gradient(ellipse at top , rgb(172, 194, 216) 10%, rgb(181, 165, 227) 40%, rgb(212, 188, 188) 100%)",
      }}
    >
     

      <div className="max-w-4xl mx-auto mt-12 p-6 bg-purple-100 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-center">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
      </div>
        <h1 className="text-xl font-semibold mb-4 text-purple-500">
          Create Medical Post
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3 text-sm">
          <input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <input
            type="text"
            placeholder="Posted by (Doctor's Name)"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <input
            type="text"
            placeholder="Specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <input
            type="text"
            placeholder="Tags (e.g. #IBD #Celiac)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <textarea
            rows="6"
            placeholder="Case details, symptoms, test results, etc."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-300"
          ></textarea>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block text-sm mt-1"
          />

          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-4 w-full h-auto rounded-md border"
            />
          )}

          <button
            type="submit"
            className="bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition text-sm"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
