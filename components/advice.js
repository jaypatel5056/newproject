import React from "react";
import styles from "../styles/Advice.module.scss";
import { motion, variants } from "framer-motion"
const Advice = () => {
  return (
    <>
      <div className={styles.home}>
      <div className={styles.colour1}></div>
      <div className={styles.colour2}></div>
      
        <div className={styles.section1}>
          <motion.div initial={{x: -50,scale:0.5}}
           whileInView={{x: 0,opacity:[0,25,50,100],scale:1}}
           transition={{duration: 1}}
          viewport={{ once: true, amount: 0.2}}   
          className={styles.image}></motion.div>
          <motion.div 
          initial={{x: 50,scale:0.5}}
          whileInView={{x: 0,opacity:[0,25,50,100],scale:1}}
          transition={{duration: 1}}
          viewport={{ once: true, amount: 0.2}}  
          className={styles.rectangle1}>

          <h2 className={styles.h2}> Quick, practical management advice to help you do your job better. </h2>
          <p className={styles.p1}>Image from <a href="https://www.freepik.com/photos/business" class={styles.a1}>Freepik</a>
          </p>
          <div className={styles.buttons1}>
            <div>
        <a href="#">READ MORE</a></div>
        </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Advice;
