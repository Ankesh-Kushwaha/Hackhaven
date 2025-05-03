import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white mb-5  flex flex-col justify-center shadow p-5 rounded-lg text-center">
      <div>
        <h3 className="text-lg font-semibold  mb-2 font-serif text-slate-800">
          {post.title}
        </h3>
      </div>

      <div className="w-full max-w-2xl mx-auto bg-gray-100 overflow-hidden rounded">
        {post.image && (
          <img
            src={post.image}
            alt="post"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="flex justify-center items-center text-center px-4">
        <p className="text-base max-w-xl text-gray-800 leading-relaxed">
          {post.body}
        </p>
      </div>

      <div className="flex justify-center mt-4">
        <div className="flex gap-6 text-sm text-gray-600 items-center">
          <button className="flex items-center gap-1">
            👍 Like <span className="font-medium text-gray-800">(10)</span>
          </button>
          <button className="flex items-center gap-1">
            💬 Comment <span className="font-medium text-gray-800">(0)</span>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default PostCard;