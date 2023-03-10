import React, { useState, useEffect } from "react";
import axios from "axios";
import Allposts from "../components/blogsection/allPosts";
import Navbar1 from "@/components/blogsection/navbarComponent";
// import Navbar2 from "../components/navbar4"

const Posts = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [totalPosts, setTotalPosts] = useState(initialPosts.length);
  const [loadedPosts, setLoadedPosts] = useState(initialPosts.length);

  const loadMorePosts = async () => {
    try {
      console.log("insdei");
      console.log(loadedPosts);
      const response = await axios.get(
        `/api/fetchposts?loadedPosts=${loadedPosts}`
      );
      console.log("res data");
      console.log(response.data);
      setPosts([...posts, ...response.data]);
      console.log("after scene");
      setLoadedPosts(loadedPosts + response.data.length);
      console.log(response.data.length);
      console.log(loadedPosts + response.data.length);
      console.log(loadedPosts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    console.log(loadedPosts);

    console.log(totalPosts);
    if (scrollTop + clientHeight >= scrollHeight && loadedPosts <= totalPosts) {
      console.log("hello");
      loadMorePosts();
    }
  };

  useEffect(() => {
    setTotalPosts(initialPosts.length);
    setLoadedPosts(initialPosts.length);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialPosts]);

  return (
    <div>
      <Navbar1 />
      {posts.map((post) => (
        <Allposts key={post.id} post={post} />
      ))}
      {loadedPosts < totalPosts && <p>Loading...</p>}
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  try {
    // const response = await axios.get('http://localhost:3000/api/allposts');
    // const initialPosts = response.data;
    // return {
    //   props: { initialPosts },
    // }
    const response = await axios.get(
      `https://testapivai.000webhostapp.com/wp-json/wp/v2/posts?per_page=3`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3ODM0MzYzNiwiZXhwIjoxODM2MDIzNjM2fQ.5f6q0jPv6NlGYoxlwuM-GOS-mS1A8AQ3OjIuHMMZ9fE`,
        },
      }
    );
    const initialPosts = response.data;
    return {
      props: { initialPosts },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { initialPosts: [] },
    };
  }
}
