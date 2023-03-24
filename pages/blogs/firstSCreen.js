import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import GadgetComponent from "../../components/blogsection/gadgetComponent";
import styles from "../../styles/page/blogs.module.scss";
import PodcastImageComponent from "../../components/blogsection/podcastImageComponent";
import Technology from "../../components/blogsection/technologyComponent";
import Last from "../../components/blogsection/lastComponent";
import GadgetSoftware from "../../components/blogsection/gadgetSoftwareComponent";
import GamesComponent from "../../components/blogsection/gamesComponent";
import FAQ from "../../components/blogsection/faqComponent";
import { useEffect } from "react";
import Navbar1 from "../../components/blogsection/navbarComponent";
import New from "../../components/blogsection/blogsFirstSection2";

// Last;
import Top from "../../components/test/topComponent";
function BLogs() {
  return (
    <>
      {/* <Navbar1/> */}
      <div className={styles.hello1}>
        <div className={styles.hello2}></div>
        <div className={styles.first}>
          <Navbar1 />
          <New />

          <PodcastImageComponent />
          <GadgetComponent />
          <Technology />
          <GadgetSoftware />
          <img
            src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-wide-promo-banner-placeholder.jpg"
            alt=""
            className={styles.lastimg}
          />
          <GamesComponent />
          <Last />
          <FAQ />
        </div>
      </div>
    </>
  );
}

export default BLogs;

export async function getServerSideProps() {
  try {
    // const response = await axios.get('http://localhost:3000/api/allposts');
    // const initialPosts = response.data;
    // return {
    //   props: { initialPosts },
    // }
          // const response=await axios.get(
          //     '/api/category/all'       
          //   );
            const response1 = await axios.get(
              `https://testapivai.000webhostapp.com/wp-json/wp/v2/categories`,
              {
                headers: {
                  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3ODM0MzYzNiwiZXhwIjoxODM2MDIzNjM2fQ.5f6q0jPv6NlGYoxlwuM-GOS-mS1A8AQ3OjIuHMMZ9fE`,
                },
              }
            );
            const array=response1.data;
    
              console.log('category.id');
              console.log(category.id);
              const postsResponse = await axios.get(`https://testapivai.000webhostapp.com/wp-json/wp/v2/posts?categories=${array.id}`,
              {
                headers: {
                  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3ODM0MzYzNiwiZXhwIjoxODM2MDIzNjM2fQ.5f6q0jPv6NlGYoxlwuM-GOS-mS1A8AQ3OjIuHMMZ9fE`,
                },
              }
            );
              setCategoryArray(categoryPosts);
              setPosts(categoryPosts.map(category => category.posts))
              return{
                props:{
                  category:category,
                  posts:postsResponse.data
                }
              }
  } catch (error) {
    console.error(error);
    return {
      props: { initialPosts: [] },
    };
  }
}
