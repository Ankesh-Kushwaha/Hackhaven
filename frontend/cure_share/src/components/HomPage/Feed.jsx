import React from 'react';
import PostCard from './PostCard';

const Feed = () => {
  const posts = [
    {
      title: 'Abdominal Chest Pain in a 25-Year-Old Female',
      body: 'Need help identifying the diagnosis...',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Fever and Headache in a Child',
      body: 'Case update on fever with rash...',
      image: '',
    },
  ];

  return (
    <div className="flex-1 space-y-4">
      {posts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </div>
  );
};

export default Feed;