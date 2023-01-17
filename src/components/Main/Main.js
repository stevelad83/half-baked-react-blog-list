import React from 'react';
import { useBlogs } from '../../hooks/useBlogs.js';
import BlogCard from '../BlogCard/BlogCard.js';

//use custom hook, map through blog list and render Blogcard component for each
export default function Main() {
  const blogs = useBlogs();
  console.log('blogs', blogs);
  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </main>
  );
}
