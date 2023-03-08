import axios from "axios";
// import styles from "../../styles/Macos.module.scss"
// import {React,useState,useEffect} from 'react'
// import Navbar from "../../components/NavbarComponent"
// import styles from "../../styles/Macos.module.scss"
import styles from "../../styles/blogg.module.scss"
import { useRouter } from 'next/router'
// import Footer from "../../components/FooterComponent"
// import { useRouter } from 'next/router'
// import axios, {isCancel, AxiosError} from 'axios';
// import Link from "next/link"
import Navbar from "../../components/NavbarComponent"
import LikeButton from "../../components/like2"
import Share from "../../components/share"
import React, { useState, } from 'react';
import { useEffect } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import SinglePost from "../../components/1"
import Navbar1 from "../../components/navbar4"
// import styles from "../../styles/blogg.module.scss"



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
    <Navbar1/>
    {/* <LikeButton/> */}
    {/* <Share/> */}
    
    <div className={styles.first}>
        {/* <p>hi</p>
       <h1>{post.id}</h1> */}
       <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> 
       </div>
       <div class="container mt-5 wp-60 wp-sm-90">
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
            {categoryPosts.map((post1) => (             
        <SinglePost key={post1.id} post={post1} postcheck={post.id}/>
      ))}
            {/* <div className={styles.editorspick}> */}
         
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
      {
        params:{blog4: '14'},
      },

    ],
    fallback:false,
  }
}
// export async function getStaticProps(context) {
     
//   const {params }=context
//     try {
//       console.log('blogss');
//       console.log(params.blog4);
//       const response = await axios.get(`http://localhost:3000/api/${params.blog4}`);
//       const post = response.data;
//       console.log("hixyk");
//       console.log(post);
//       return {
//         props: { post }
//       };
//     } catch (error) {
//       console.error(error); 
//       console.log("hixyk");
//       return {
//         props: { post: {} }
//       };
//     }
//   }
  export async function getStaticProps(context) {
    const {params }=context
      try {
        console.log('blogss');
        console.log(params.blog4);
        const response = await axios.get(`http://localhost:3000/api/${params.blog4}`);
        const post = response.data;
        const id=post.categories[0]
        console.log('nppp')
        const categoryData=await axios.get(`http://localhost:3000/api/category/${id}`);
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
  