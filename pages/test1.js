import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogPost() {
  const [post, setPost] = useState(null);
  const blogId = '12';

  useEffect(() => {
    axios.get(`api/12`)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }, [blogId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     hi
    </div>
  );
}

export default BlogPost;
