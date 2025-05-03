import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      {post.image && (
        <img src={post.image} alt="post" className="w-full rounded mb-2" />
      )}
      <p className="text-sm text-gray-700">{post.body}</p>
      <div className="flex gap-4 mt-4 text-sm text-gray-500">
        <button>👍 Like</button>
        <button>💬 Comment</button>
      </div>
    </div>
  );
};

export default PostCard;