import React, { useState } from "react";

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
      image
    };

    console.log("Post submitted:", postData);
    // Submit to backend or state management
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h1 className="text-2xl font-bold mb-6 text-purple-700">Create Medical Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-md"
        />
        <input
          type="text"
          placeholder="Posted by (Doctor's Name)"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-3 border rounded-md"
        />
        <input
          type="text"
          placeholder="Specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="w-full p-3 border rounded-md"
        />
        <input
          type="text"
          placeholder="Tags (use space between hashtags, e.g. #IBD #Celiac)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full p-3 border rounded-md"
        />
        <textarea
          rows="6"
          placeholder="Case details, symptoms, test results, etc."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 border rounded-md resize-none"
        ></textarea>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block mt-2"
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
          className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
