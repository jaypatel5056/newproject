import React from "react";
import styles from "../../styles/advice.module.scss";
import { motion, variants } from "framer-motion";
import {useState} from "react";
import {useEffect} from "react";
function getWindowDimensions() {
if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width, 
      height 
    };
   
  }
  // code that uses the window object
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    getWindowDimensions
  });

  useEffect(() => {
    function handleResize() {
      if (typeof window !== 'undefined') {
        setWindowDimensions(getWindowDimensions);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[]);
  // console.log("Width:", windowDimensions.width, "Height:", windowDimensions.height);
  return windowDimensions;
} 



const Advice = () => {

  const { height, width } = useWindowDimensions();

  return (
    <>
      <div className={styles.home}>
      <div className={styles.colour1}></div>
      <div className={styles.colour2}></div>
      
        <div className={styles.section1}>
         { width> 1282 && <motion.div initial={{x: -450,scale:0.5}}
           whileInView={{x: 0,opacity:[0,25,50,100],scale:1}}
           transition={{duration: 1}}
          viewport={{ once: true, amount: 0.2}}   
          className={styles.image}></motion.div>}

           {width< 500 && <motion.div initial={{x: -50,scale:0.5}}
           whileInView={{x: 0,opacity:[0,25,50,100],scale:1}}
           transition={{duration: 1}}
          viewport={{ once: true, amount: 0.2}}   
          className={styles.image}></motion.div>}
           {width>500  && width < 1281 && <motion.div initial={{x: -200,scale:0.5}}
           whileInView={{x: 0,opacity:[0,25,50,100],scale:1}}
           transition={{duration: 1}}
          viewport={{ once: true, amount: 0.2}}   
          className={styles.image}></motion.div>}

      { width> 900 && <motion.div 
          initial={{x: 450,scale:0.5}}
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
          </motion.div>}
          

         {width <500 &&  <motion.div 
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
          </motion.div>}

          {width >500 && width< 900 && <motion.div 
          initial={{x: 250,scale:0.5}}
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
          </motion.div>}
        </div>
      </div>
    </>
  );
};

export default Advice;
