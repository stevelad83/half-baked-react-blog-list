import React, { useState, useEffect } from 'react';
import { getBlogs } from '../services/blogs.js';

export default function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getBlogs();
      setBlogs(resp);
    };
    fetchData();
  }, []);

  return blogs;
}
