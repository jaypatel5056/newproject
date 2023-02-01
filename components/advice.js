import React from "react";
import styles from "./advice.module.scss";
const Advice = () => {
  return (
    <>
      <div className={styles.home}>
      <div className={styles.colour1}></div>
      <div className={styles.colour2}></div>
      
        <div className={styles.section1}>
          <div className={styles.image}></div>
          <div className={styles.rectangle1}>

          <h2 class={styles.h2}> Quick, practical management advice to help you do your job better. </h2>
          <p class={styles.p1}>Image from <a href="https://www.freepik.com/photos/business" class={styles.a1}>Freepik</a>
          </p>
          <div className={styles.buttons1}>
            <div>
        <a href="#">READ MORE</a></div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advice;
