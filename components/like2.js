import React, { useState } from 'react';
import { FaThumbsUp, FaRegThumbsUp } from 'react-icons/fa';
import styles from "../styles/like2.module.scss"

// import './LikeButton.css';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLikeClick = () => {
    if (!liked) {
      setLiked(true);
      setCount(count + 1);
    } else {
      setLiked(false);
      setCount(count - 1);
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
