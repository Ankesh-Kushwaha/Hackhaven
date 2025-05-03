import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Landing/Navbar";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
const Post = () => {
  const [votes, setVotes] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    "🧑 Great explanation of complex topics!",
    "👩‍⚕️ Loved the case study part.",
    "👨‍⚕️ More about diagnosis would help.",
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const commentsRef = useRef(null);

  const handleUpvote = () => setVotes(votes + 1);
  const handleDownvote = () => setVotes(votes - 1);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, `🗨️ ${commentText.trim()}`]);
      setCommentText("");
    }
  };

  useEffect(() => {
    if (showComments && commentsRef.current) {
      commentsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showComments]);

  return (
    <>
      <header
        className="flex justify-between items-center px-6 py-4 bg-[#f4f1f7] relative z-50 h-20"
        style={{
          background:
            "radial-gradient(ellipse at top, rgb(221, 229, 237) 10%, rgb(229, 225, 241) 40%, rgb(227, 213, 213) 100%)",
        }}
      >
        {/* Logo */}
        <Link to={"/"}>
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
          <span className="ml-2 text-xl font-bold text-blue-600"></span>
        </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            to="/HomePage"
            className="px-4 py-2 text-600 rounded-full hover:bg-blue-50 transition"
          >
            Home
          </Link>
          <a
            href="#features"
            className="px-4 py-2 text-600 rounded-full hover:text-blue-600 transition"
          >
            Features
          </a>
          <Link
            to="/about"
            className="px-4 py-2 text-600 rounded-full hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 text-600 rounded-full hover:text-blue-600 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4"></div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white md:hidden transition-all shadow-md">
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link
                to="/HomePage"
                onClick={handleLinkClick}
                className="hover:text-blue-600"
              >
                Home
              </Link>
              <a
                href="#features"
                onClick={handleLinkClick}
                className="hover:text-blue-600"
              >
                Features
              </a>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="hover:text-blue-600"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="hover:text-blue-600"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* All the post sections start from here */}
      <div
        className="min-h-screen px-4 py-10 bg-gray-200"
        style={{
          background:
            "radial-gradient(circle, rgb(172, 194, 216) 10%, rgb(181, 165, 227) 40%, rgb(212, 188, 188) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 transition duration-300">
          <h1 className="text-2xl font-bold text-purple-700 mb-2">
            Understanding Autoimmune Gut Disorders
          </h1>
          <p className="text-gray-500 text-sm mb-4">
            By Dr. Smith • April 30, 2025
          </p>

          <img
            src="https://imgs.search.brave.com/SwNS1npnTd0RJtqd0lf_hya5M8VsUA2-gYkdniv901Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZWpvdXJuYWwub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzAyL0luQ29tbXVu/aXR5LVJlYWRpbmct/R3JvdXBzLU1hcF9G/ZWItMjAyNS5qcGc"
            className="w-full h-96 object-cover rounded-md"
            alt="post"
          />

          <p className="text-gray-800 leading-relaxed">
            This blog explores various autoimmune disorders like IBD and Celiac
            disease. It discusses common symptoms, diagnostic approaches, and
            case studies with real patient experiences. We aim to raise
            awareness and share valuable insights for both patients and
            healthcare professionals.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={handleUpvote}
              className="px-4 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              👍 Upvote
            </button>
            <button
              onClick={handleDownvote}
              className="px-4 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              👎 Downvote
            </button>
            <span className="text-gray-700 font-medium">Votes: {votes}</span>
            <button
              onClick={toggleComments}
              className="ml-auto px-4 py-1 text-sm bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              💬 {showComments ? "Hide Comments" : "Show Comments"}
            </button>
          </div>

          {showComments && (
            <div className="mt-6 border-t pt-4" ref={commentsRef}>
              <h2 className="text-lg font-semibold text-purple-700 mb-3">
                Comments
              </h2>

              <ul className="text-sm space-y-2 text-gray-700 mb-4">
                {comments.map((comment, idx) => (
                  <li key={idx}>{comment}</li>
                ))}
              </ul>

              <form
                onSubmit={handleCommentSubmit}
                className="flex flex-col gap-3"
              >
                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <button
                  type="submit"
                  className="self-start px-4 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition text-sm"
                >
                  Post Comment
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Post;
