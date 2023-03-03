import React, { useEffect, useState } from 'react';
import axios from '../../lib/api';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost/wordpress/wp-json/mo/v1/a');
        setPosts(response.data);
        console.log("hello");
        console.log("hi");
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {/* {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
        </div>
      ))} */}
    </div>
  );
};

export default BlogPosts;
