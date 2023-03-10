import React, { useState } from 'react';
import { FaThumbsUp, FaRegThumbsUp } from 'react-icons/fa';
import styles from "../../styles/test/like2.module.scss"

import { useEffect } from 'react';

// import './LikeButton.css';

const LikeButton = () => {
  const [isLoggedIn1,setIsLoggedIn1]=useState(false);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('username');
    console.log(isLoggedIn)
    if (isLoggedIn) {
     setIsLoggedIn1(true);
    } else {
      setIsLoggedIn1(false);
    }
  }, []);
  // console.log('he');
  // console.log(isLoggedIn1);
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLikeClick = () => {
    if(isLoggedIn1){
  
    if (!liked) {
      setLiked(true);
      setCount(count + 1);
    } else {
      setLiked(false);
      setCount(count - 1);
    }
  }
  else{
    alert("Only logged in users can like the post! Please login to continue");
  }
};

  return (
    <div className={styles.home1}>
    <button className={styles.like__btn} onClick={handleLikeClick}>
      <span id="icon">{liked ? <FaThumbsUp /> : <FaRegThumbsUp />}</span>
      <span id="count">{count}</span> Like
    </button>
    </div>
  );
};

export default LikeButton;
