
import React, { useState, } from 'react';
import { useEffect } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
// import styles from "../styles/singlepost.module.scss"

const Post = ({post}) => {
    const regex = /<img.+?src="(.+?)".*?>/i;
    const urlmatch = post.content.rendered.match(regex);
    const imageUrl = urlmatch ? urlmatch[1] : null;

  return (
    <div>
        <Col sm={6} className={` ${styles.section1}`}>
{/* <div className={styles.section1}> */}
  
  <div className={styles.epimg1}>
    <img
      src={imageUrl}
      alt=""
    ></img>
  </div>
  <div className={styles.desc}>
    <Link href="/blogs/10">
      {" "}
      {post.title.rendered}
    </Link>

    <div className={styles.label1}>EDITORS PICK</div>
  </div>
{/* </div> */}
</Col>


    </div>
  )
}

export default Post

