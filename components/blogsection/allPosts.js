import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import styles from "../../styles/allPosts.module.scss";
// import styles from   
import { AiOutlineUser, AiFillWechat } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar1 from "./navbarComponent";

const allposts = ({ post }) => {
  const regex = /<img.+?src="(.+?)".*?>/i;
  const urlmatch = post.content.rendered.match(regex);
  const imageUrl = urlmatch ? urlmatch[1] : null;
  const [categoryName, setCategoryName] = useState("");

  console.log("url");
  console.log(imageUrl);
  console.log("match");
  console.log(urlmatch);

  useEffect(() => {
    async function getCategoryName() {
      // console.log('0 s');
      console.log(post.categories[0]);
      const categoryData = await axios.get(
        `/api/category/name/${post.categories[0]}`
      );
      console.log("iiii");
      console.log(categoryData);
      console.log("name");
      console.log(categoryData.data.name);
      setCategoryName(categoryData.data.name);
    }
    getCategoryName();
  }, [post.categories]);

  return (
    <div>
      <Row className={`p-0  ${styles.three}`}>
        <Col xs={12} md={6} className={` ${styles.firstsection}`}>
          {/* <div className={styles.firstsection}> */}
          <Link href={`blogs/${post.id}`} className={styles.a1}>
            <img src={imageUrl} alt=""></img>
          </Link>
        </Col>
        {/* <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-11.jpg"
                    alt=""
                  ></img> */}
        <Col xs={12} md={6} className={` ${styles.firstsection}`}>
          <div className={styles.content1}>
            <p className={styles.p1}> {categoryName}</p>
            <Link href={`blogs/${post.id}`} className={styles.a1}>
              {post.title.rendered && post.title.rendered}
            </Link>
            {/* <a
                      href="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-11.jpg"
                      target="_self"
                      className={styles.a1}
                    >
                      Dell XPS 13 2021: The best Windows laptop now with OLED{" "}
                    </a> */}
            <p>
              Cursus iaculis etiam in In nullam donec sem sed consequat
              scelerisque nibh amet, massa egestas risus, gravida vel amet,
              imperdiet …
            </p>
            <div className={styles.details}>
              <div className={styles.details1}>
                <div className={styles.icons}>
                  <AiOutlineUser />
                </div>
                <a
                  href="https://websitedemos.net/tech-news-04/author/akbarh/"
                  title="Posts by akbarh"
                  rel="author"
                >
                  akbarh
                </a>
              </div>
              <div className={styles.details1}>
                <div className={styles.icons}>
                  <SlCalender />
                </div>
                <p>July 7, 2021</p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Col>
      </Row>
    </div>
  );
};

export default allposts;

export async function getStaticProps(context) {
  const { params } = context;
  try {
    console.log("blogss");
    console.log(params.blog4);
    const response = await axios.get(
      `http://localhost/wordpress/wp-json/wp/v2/posts`
    );
    const post = response.data;
    console.log("hixyk");
    console.log(post);
    return {
      props: { post },
    };
  } catch (error) {
    console.error(error);
    console.log("hixyk");
    return {
      props: { post: {} },
    };
  }
}
