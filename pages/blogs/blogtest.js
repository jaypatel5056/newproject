import axios from "axios";
// import styles from "../../styles/Macos.module.scss"
// import {React,useState,useEffect} from 'react'
// import Navbar from "../../components/NavbarComponent"
// import styles from "../../styles/Macos.module.scss"
import styles from "../../styles/blogg.module.scss"
import { useRouter, } from 'next/router'
// import Footer from "../../components/FooterComponent"
// import { useRouter } from 'next/router'
// import axios, {isCancel, AxiosError} from 'axios';
// import { BsArrowLeft,BsArrowRight } from 'react-icons/Bs'
// import Link from "next/link"
import React, { useState, } from 'react';
import { useEffect } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import { AiOutlineUser, AiFillWechat } from "react-icons/Ai";
import { SlCalender } from "react-icons/Sl";
import { FiMail } from "react-icons/Fi";
import { BsArrowRight, BsTwitter, BsYoutube } from "react-icons/Bs";
import { GrFacebookOption } from "react-icons/Gr";

import Navbar from "../../components/NavbarComponent"
import LikeButton from "../../components/like2"
import Share from "../../components/share"
import singlePost from "../../components/1"


const Posts = ({ post,categoryPosts}) => {
    const router=useRouter();
    const [isLoggedIn1,setIsLoggedIn1]=useState(false);
  const value=router.query.slug  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('username');
    if (isLoggedIn) {
     setIsLoggedIn1(true);
    } else {
      setIsLoggedIn1(false);
    }
  }, []);

  const postcomment = () => {
    if(isLoggedIn1){
  }
  else{
    alert("Only logged in users can like the post! Please login to continue");
  }
};

  
  return (
    // <div>
    //   {/* <h1>Posts</h1> */}
    //   {/* {posts.map((post) => ( */}
    //     <div key={posts.id}>
    //         <h2>{posts.id}</h2>
    //       <h2>{posts.title.rendered}</h2>
    //       <div dangerouslySetInnerHTML={{ __html: posts.content.rendered }} />
    //     </div>
    //   {/* ))} */}
    // </div>
    <>
    <Navbar/>
    {/* <LikeButton/> */}
    {/* <Share/> */}
    
    <div className={styles.first}>
        {/* <p>hi</p>
       <h1>{post.id}</h1> */}
       <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> 
       </div>
       <div class="container mt-5 wp-60">
    <div class="d-flex justify-content-center row p-0">
        <div class="col-md-8 p-0">
            <div class="d-flex flex-column comment-section">
                <div class="bg-white p-2">
                    <div class="d-flex flex-row user-info"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="50" alt=""/>
                        <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">Marry Andrews</span><span class="date text-black-50">Shared publicly - Jan 2020</span></div>
                    </div>
                    <div class="mt-2">
                        <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div class="bg-white">
                    <div class="d-flex flex-row fs-12">
                        {/* <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div> */}

                        <LikeButton/> 
                        {/* <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1"></span></div> */}
                        <div className="ml-20 mr-20 ">
                            <Share/>
                            </div>
                        {/* <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div> */}
                    </div>
                </div>
                <div class="bg-light p-2 ">
                    <div class="d-flex flex-row align-items-start"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" alt=""/><textarea class="form-control ml-1 shadow-none textarea"></textarea></div>
                    <div class="mt-20 mb-20 text-right">
                      <button class="btn btn-primary btn-sm shadow-none" type="button" onClick={postcomment}>Post comment
                      </button>
                      {/* <button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button> */}
                      </div>
                </div>
            </div>
            <h3 className="mt-30 "> Read more</h3>
            <Row className={` mt-10 ${styles.editorspick}`}>
            {categoryPosts.map((post) => (
        <singlePost key={post.id} post={post} />
      ))}
            {/* <div className={styles.editorspick}> */}
            <Col sm={6} className={` ${styles.section1}`}>
              {/* <div className={styles.section1}> */}
                
                <div className={styles.epimg1}>
                  <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-02.jpg"
                    alt=""
                  ></img>
                </div>
                <div className={styles.desc}>
                  <Link href="/blogs/10">
                    {" "}
                    For Families of Teens at Microsoft Surface
                  </Link>

                  <div className={styles.label1}>EDITORS PICK</div>
                </div>
              {/* </div> */}
              </Col>

              <Col sm={6} className={` ${styles.section1}`}>
              {/* <div className={styles.section1}> */}
                <div className={styles.epimg1}>
                  <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-10.jpg"
                    alt=""
                  ></img>
                </div>
                <div className={styles.desc}>
                  <Link href="/blogs/whynetflixsharesaredown10">
                    {" "}
                    Why Netflix shares are down 10%{" "}
                  </Link>

                  {/* <a href="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-10.jpg" target="_self">
                        Why Netflix shares are down 10% </a> */}
                </div>
                <div className={styles.label2}>EDITORS PICK</div>
              {/* </div> */}
              </Col>
              
              <Col sm={6} className={` ${styles.section1}`}>

              {/* <div className={styles.section1}> */}
                <div className={styles.epimg1}>
                  <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-21.jpg"
                    alt=""
                  ></img>
                </div>
                <div className={styles.desc}>
                  <Link href="/blogs/12">
                    {" "}
                    6 Bots That Deliver Science and Serendipity on Twitter{" "}
                  </Link>
                  {/* <a
                      href="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-21.jpg"
                      target="_self"
                    >
                      6 Bots That Deliver Science and Serendipity on Twitter
                    </a> */}
                </div>
                <div className={styles.label3}>APPS</div>
              {/* </div> */}
             
              </Col>
            {/* </div> */}
            </Row>





        </div>
    </div>
  
</div>
     
       </>
  );
};

export default Posts;

// export async function getStaticProps() {
//   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3Nzc1ODI1NSwiZXhwIjoxODM1NDM4MjU1fQ.kiT3VZAx2yNUg6k10lW-Ez77RFnI4KxKa6Ajb3mSkds';
//   try {
//     const response = await axios.get('http://localhost/wordpress/wp-json/wp/v2/posts/12', {
//       headers:{  
//         Authorization: `Bearer ${token}`
//       }
//     });
//     const posts = response;
//     // console.log("hixyz");
//     // console.log(posts);
//     return {
//       props: { posts }
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: { posts: [] }
//     };
//   }
// }

export async function getStaticPaths(){
  return{
    paths:[
      {
        params:{blog4: '1'},
      },
      {
        params:{blog4: '10'},
      },
      {
        params:{blog4: '8'},
      },
      {
        params:{blog4: '12'},
      },
      {
        params:{blog4: '5'},
      },

    ],
    fallback:false,
  }
}
export async function getStaticProps(context) {
  const {params }=context
    try {
      console.log('blogss');
      console.log(params.blog4);
      const response = await axios.get(`http://localhost:3000/api/${params.blog4}`);
      const post = response.data;
      const id=post.categories[0]
      const categoryData=await fetch(`api/category/${id}`)
      const categoryPosts=categoryData.data;
      console.log("hixyk");
      console.log(post);
      return {
        props: { post ,categoryPosts}
      };
    } catch (error) {
      console.error(error); 
      console.log("hixyk");
      return {
        props: { post: {} ,}
      };
    }
  }

