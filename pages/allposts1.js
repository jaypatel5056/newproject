import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";
import RingLoader from "react-spinners/RingLoader";
import Allposts from "../components/blogsection/allPosts";
import Navbar1 from "../components/blogsection/navbarComponent";
// import Navbar2 from "../components/navbar4"

const Posts = ({ initialPosts, totalPostsLength }) => {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loadedPosts, setLoadedPosts] = useState(0);
  const [loading, setLoading] = useState(false);
  const l1 = useRef(0);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (
      initialPosts &&
      initialPosts.length > 0 &&
      Array.isArray(initialPosts)
    ) {
      setPosts(initialPosts);
      console.log(initialPosts);
      console.log("length1");
      console.log(loadedPosts);
    }
  }, [initialPosts]);

  useEffect(() => {}, [posts]);

  useEffect(() => {
    const loadMorePosts = async () => {
      try {
        setLoading(true);
        console.log("insdei");
        console.log(totalPostsLength);
        console.log(loadedPosts);
        const response = await axios.get(
          `/api/fetchposts?loadedPosts=${loadedPosts}`
        );
        // const response1 = await axios.get(
        //   `/api/fetchposts?loadedPosts=${l1.current}`
        // );
        console.log(posts);
        console.log("res data");
        console.log(response.data);
        // setPosts((...posts)=>[...posts, ...response.data]);
        let posts1 = [...posts, ...response.data];
        console.log(posts1);
        setPosts(posts1);
        console.log("after scene");
        let prevPosts = totalPosts + response.data.length;
        setLoadedPosts(prevPosts);
        // setLoadedPosts(
        //   (prevLoadedPosts) => prevLoadedPosts + response.data.length
        // );
        l1.current += response.data.length;
        console.log("checking ref");
        console.log(l1.current);
        console.log(response.data.length);
        console.log(loadedPosts + response.data.length);
        console.log(loadedPosts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    // const handleScroll = () => {
    //   const {scrollTop, clientHeight, scrollHeight } = document.documentElement;
    //   console.log('jjel')
    //   console.log(totalPostsLength)
    //   // console.log(loadedPosts);
    //   // console.log(totalPosts);
    //   console.log(loadedPosts < totalPostsLength)
    //   console.log(scrollTop + clientHeight >= scrollHeight);
    //   if (scrollTop +  clientHeight >= scrollHeight && loadedPosts < totalPostsLength) {
    //     console.log("hello");
    //     loadMorePosts();
    //     setLoad(true);
    //   }
    // };

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      console.log(loadedPosts);

      console.log(totalPostsLength);
      // console.log(scrollTop + clientHeight)
      // console.log(scrollHeight)
      console.log(loadedPosts < totalPostsLength);
      console.log(clientHeight - scrollTop <= 100);
      if (clientHeight - scrollTop <= 100 && posts.length < totalPostsLength) {
        console.log("hello");
        loadMorePosts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadedPosts]);

  // const handleScroll = () => {
  //   const {scrollTop, clientHeight, scrollHeight } = document.documentElement;
  //   // console.log(loadedPosts);
  //   // console.log(totalPosts);
  //   if (scrollTop + clientHeight >= scrollHeight && ) {
  //     console.log("hello");
  //     loadMorePosts();
  //     setLoad(true);
  //   }
  // };

  // useEffect(() => {
  //   // setTotalPosts(initialPosts.length);
  //   // setLoadedPosts(initialP osts.length);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [initialPosts]);

  return (
    <div className={`mb-50`}>
      <div>{totalPostsLength}</div>
      <Navbar1 />
      {posts && posts.length > 0 ? (
        posts.map((post) => <Allposts key={post.id} post={post} />)
      ) : (
        <div>NO data found</div>
      )}
      {/* {loadedPosts <= totalPosts && <p>Loading...</p>} */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading && (
          <PropagateLoader
            size={15}
            loading={loading}
            color="#805aed"
            className="mt-20"
          />
        )}
      </div>
    </div>
  );
};

export default Posts;

export async function getServerSideProps() {
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

    const response1 = await axios.get(
      `https://testapivai.000webhostapp.com/wp-json/wp/v2/posts?per_page=100`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3ODM0MzYzNiwiZXhwIjoxODM2MDIzNjM2fQ.5f6q0jPv6NlGYoxlwuM-GOS-mS1A8AQ3OjIuHMMZ9fE`,
        },
      }
    );
    const totalPostsLength = response1.data.length;
    console.log("addad");
    console.log(totalPostsLength);
    return {
      props: { initialPosts, totalPostsLength },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { initialPosts: [] },
    };
  }
}
