import React from 'react'
import styles from "../../styles/TeamSection.module.scss";
import { useState,useEffect } from 'react';
  import { FaFacebookF ,FaInstagram } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { motion, variants } from "framer-motion"
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
  

const Meet = () => {

  const { height, width } = useWindowDimensions();
  return (
    <div 
    initial={{x:-1000,opacity:0}}
    animate={{x: 0,opacity:1}}
    transition={{duration: 2,delay:2}}
    
    className={styles.hello1}>
    {width > 1000 && <motion.div 
    initial={{x:-600,opacity:0}}
    whileInView={{x: 0,opacity: 1}}
    viewport={{ once: true  ,amount:0.3}}
    transition={{duration: 0.7,delay:0.1}}
    className={styles.hello}>

      <div className={styles.first}>
<h2 class={styles.h2}>Meet The Team</h2>
<p class={styles.p2}>Image by <a href="https://freepik.com" class={styles.a1}>Freepik</a></p>
    </div>
    
    <motion.div 
     initial={{x:0,y: 300,opacity:0}}
     whileInView={{x:0,y: 0,delay: 5,opacity: 1,}}
     transition={{duration: 1,delay:0.2}} 
     viewport={{ once: false}}
      className={styles.squaresection}>
      <div className={styles.square}>
        {/* <div className={styles.content}> */}
        <motion.div 
         initial={{opacity: 1,scale: 0.5,y:100}}
         whileInView={{scale: 1,y:0}}
         transition={{duration: 1.5}} 
         viewport={{ once: false, amount: 0.5}} 
        className={styles.image1}></motion.div>
        <motion.div
        initial={{y: 200}}
        whileInView={{y:0}}
        viewport={{ once: false,}} 
        transition={{duration:1}}
        >
        <h3 className={styles.h3}>mary Brown</h3>
        <p className={styles.p1}>creative leader</p>
        <p className={styles.p2}>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
        <div className={styles.hello2}>
        <div><FaFacebookF/></div>
        <div><BsTwitter/></div>
        <div><FaInstagram/></div>
        </div>
        </motion.div>
  
        
      {/* </div> */}
      </div>
      <div className={styles.square}>
           {/* <div className={styles.content}> */}
           <motion.div 
           initial={{opacity: 1,scale: 0.5,y:80}}
           whileInView={{scale: 1,y:0}}
           transition={{duration: 1.5}} 
           viewport={{ once: false, amount: 0.5}} 
           className={styles.image2}></motion.div>
           {/* <div className={styles.image1}>
            Test div
           </div> */}
         <motion.div
        initial={{y: 200}}
        whileInView={{y:0}}
        viewport={{ once: false,}} 
        transition={{duration:1}}
        >
        <h3 className={styles.h3}>ANN RICHMOND</h3>
        <p className={styles.p1}>creative leader</p>
        <p className={styles.p2}>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
        <div className={styles.hello2}>
        <div><FaFacebookF/></div>
        <div><BsTwitter/></div>
        <div><FaInstagram/></div>
        </div>
        </motion.div>
  
        
      {/* </div> */}

      </div>
      <div className={styles.square}>
   {/* <div className={styles.content}> */}
   <motion.div 
           initial={{opacity: 1,scale: 0.5,y:80}}
           whileInView={{scale: 1,y:0}}
           transition={{duration: 1.5}} 
           viewport={{ once: false, amount: 0.5}} 
           className={styles.image3}></motion.div>
   {/* <div className={styles.image3}></div> */}
   <motion.div
        initial={{y: 200}}
        whileInView={{y:0}}
        viewport={{ once: false,}} 
        transition={{duration:1}}
        >
        <h3 className={styles.h3}>BOB GREENFIELD</h3>
        <p className={styles.p1}>programming guru</p>
        <p className={styles.p2}>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
        <div className={styles.hello2}>
        <div><FaFacebookF/></div>
        <div><BsTwitter/></div>
        <div><FaInstagram/></div>
        </div>
        </motion.div>
  
        
      {/* </div> */}



      

      </div>



    </motion.div>
    </motion.div>}
    {width < 1000 && <motion.div 
    initial={{x:-100,opacity:0}}
    whileInView={{x: 0,opacity: 1}}
    viewport={{ once: true  ,amount:0.3}}
    transition={{duration: 0.7,delay:0.1}}
    className={styles.hello}>

      <div className={styles.first}>
<h2 class={styles.h2}>Meet The Team</h2>
<p class={styles.p2}>Image by <a href="https://freepik.com" class={styles.a1}>Freepik</a></p>
    </div>
    
    <motion.div 
     initial={{x:0,y: 300,opacity:0}}
     whileInView={{x:0,y: 0,delay: 5,opacity: 1,}}
     transition={{duration: 1,delay:0.2}} 
     viewport={{ once: false}}
      className={styles.squaresection}>
      <div className={styles.square}>
        {/* <div className={styles.content}> */}
        <motion.div 
         initial={{opacity: 1,scale: 0.5,y:100}}
         whileInView={{scale: 1,y:0}}
         transition={{duration: 1.5}} 
         viewport={{ once: false, amount: 0.5}} 
        className={styles.image1}></motion.div>
        <motion.div
        initial={{y: 200}}
        whileInView={{y:0}}
        viewport={{ once: false,}} 
        transition={{duration:1}}
        >
        <h3 className={styles.h3}>mary Brown</h3>
        <p className={styles.p1}>creative leader</p>
        <p className={styles.p2}>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
        <div className={styles.hello2}>
        <div><FaFacebookF/></div>
        <div><BsTwitter/></div>
        <div><FaInstagram/></div>
        </div>
        </motion.div>
  
        
      {/* </div> */}
      </div>
      <div className={styles.square}>
           {/* <div className={styles.content}> */}
           <motion.div 
           initial={{opacity: 1,scale: 0.5,y:80}}
           whileInView={{scale: 1,y:0}}
           transition={{duration: 1.5}} 
           viewport={{ once: false, amount: 0.5}} 
           className={styles.image2}></motion.div>
           {/* <div className={styles.image1}>
            Test div
           </div> */}
         <motion.div
        initial={{y: 200}}
        whileInView={{y:0}}
        viewport={{ once: false,}} 
        transition={{duration:1}}
        >
        <h3 className={styles.h3}>ANN RICHMOND</h3>
        <p className={styles.p1}>creative leader</p>
        <p className={styles.p2}>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
        <div className={styles.hello2}>
        <div><FaFacebookF/></div>
        <div><BsTwitter/></div>
        <div><FaInstagram/></div>
        </div>
        </motion.div>
  
        
      {/* </div> */}

      </div>
      <div className={styles.square}>
   {/* <div className={styles.content}> */}
   <motion.div 
         initial={{opacity: 1,scale: 0.5,y:100}}
         whileInView={{scale: 1,y:0}}
         transition={{duration: 1.5}} 
         viewport={{ once: false, amount: 0.5}} 
        className={styles.image1}></motion.div>
        <motion.div
        initial={{y: 200}}
        whileInView={{y:0}}
        viewport={{ once: false,}} 
        transition={{duration:1}}
        >
   <div className={styles.image3}></div>
        <h3 className={styles.h3}>BOB GREENFIELD</h3>
        <p className={styles.p1}>programming guru</p>
        <p className={styles.p2}>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
        <div className={styles.hello2}>
        <div><FaFacebookF/></div>
        <div><BsTwitter/></div>
        <div><FaInstagram/></div>
        </div>

        </motion.div>
  
        
      {/* </div> */}



      

      </div>



    </motion.div>
    </motion.div>}
    </div>
  )
}

export default Meet