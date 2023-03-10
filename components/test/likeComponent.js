import React from 'react';
import styles from "../../styles/test/heartToggle.module.scss";

const HeartToggle = () => {
  return (
    <div className={styles.toggle1}>
    <div className={styles.toggle}>
      <input type="checkbox" id={styles["heart-check"]} />

      <label htmlFor={styles["heart-check"]} className={styles.heart}>
        <svg viewBox="0 0 24 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path id={styles.initial} d="M11.8189091,20.3167303 C17.6981818,16.5505143 20.6378182,12.5122542 20.6378182,8.20195014 C20.6378182,5.99719437 18.8550242,4 16.3283829,4 C13.777264,4 12.5417153,6.29330284 11.8189091,6.29330284 C11.0961029,6.29330284 10.1317157,4 7.30943526,4 C4.90236126,4 3,5.64715533 3,8.20195014 C3,12.5122346 5.93963637,16.5504946 11.8189091,20.3167303 Z"></path>
          <path id={styles.stroke} fill="none" d="M11.8189091,20.3167303 C17.6981818,16.5505143 20.6378182,12.5122542 20.6378182,8.20195014 C20.6378182,5.99719437 18.8550242,4 16.3283829,4 C13.4628072,4 10.284995,6.64162063 10.284995,8.70392731 C10.284995,10.0731789 10.8851209,10.9874447 11.8189091,10.9874447 C12.7526973,10.9874447 13.3528232,10.0731789 13.3528232,8.70392731 C13.3528232,6.64162063 10.1317157,4 7.30943526,4 C4.90236126,4 3,5.64715533 3,8.20195014 C3,12.5122346 5.93963637,16.5504946 11.8189091,20.3167303 Z"></path>
        </svg>
      </label>
    </div>
    </div>
  );
};

export default HeartToggle;
