import React from 'react';
import { getBlogs } from '../../services/blogs.js';
import { BlogCard } from '../BlogCard/BlogCard.js';

//use custom hook, map through blog list and render Blogcard component for each
export default function Main() {
  const blogs = getBlogs();

  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </main>
  );
}
