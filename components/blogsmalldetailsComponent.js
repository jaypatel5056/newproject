import React from 'react'
import styles from "../styles/blogsmalldetails.module.scss"

import { SlCalender } from "react-icons/Sl";
import { AiOutlineUser, AiFillWechat } from "react-icons/Ai";

const blogsmalldetailsComponent = () => {
  return (
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
  )
}

export default blogsmalldetailsComponent