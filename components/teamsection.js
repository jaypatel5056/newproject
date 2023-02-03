import React from 'react'
import styles from "../styles/TeamSection.module.scss";
  import { FaFacebookF ,FaInstagram } from 'react-icons/Fa';
import { BsTwitter } from 'react-icons/Bs';
import { motion, variants } from "framer-motion"

const Meet = () => {
  return (
    <div 
    initial={{x:-1000,opacity:0}}
    animate={{x: 0,opacity:1}}
    transition={{duration: 2,delay:2}}
    
    className={styles.hello1}>
    <motion.div 
    initial={{x:-100}}
    whileInView={{x: 0}}
    viewport={{ once: true, amount: 0.9 }}
    transition={{duration: 0.1,delay:0.1}}className={styles.hello}>
      <div className={styles.first}>
<h2 class={styles.h2}>Meet The Team</h2>
<p class={styles.p2}>Image by <a href="https://freepik.com" class={styles.a1}>Freepik</a></p>
    </div>
    
    <motion.div 
     initial={{x:0,y: 600,opacity:0}}
     animate={{x:0,y: 0,opacity: 1}}
     whileInView={{duration: 1,delay:1}}
     viewport={{ once: true, amount: 0.9 }}
    className={styles.squaresection}>
      <div className={styles.square}>
        {/* <div className={styles.content}> */}
        <div className={styles.image1}></div>
        <h3 className={styles.h3}>mary Brown</h3>
        <p className={styles.p1}>creative leader</p>
        <p className={styles.p2}>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
        <div className={styles.hello2}>
        <div><FaFacebookF/></div>
        <div><BsTwitter/></div>
        <div><FaInstagram/></div>
        </div>
  
        
      {/* </div> */}
      </div>
      <div className={styles.square}>
           {/* <div className={styles.content}> */}
           <div className={styles.image2}></div>
        <h3 className={styles.h3}>ANN RICHMOND</h3>
        <p className={styles.p1}>creative leader</p>
        <p className={styles.p2}>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
        <div className={styles.hello2}>
        <div><FaFacebookF/></div>
        <div><BsTwitter/></div>
        <div><FaInstagram/></div>
        </div>
  
        
      {/* </div> */}

      </div>
      <div className={styles.square}>
   {/* <div className={styles.content}> */}
   <div className={styles.image3}></div>
        <h3 className={styles.h3}>BOB GREENFIELD</h3>
        <p className={styles.p1}>programming guru</p>
        <p className={styles.p2}>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
        <div className={styles.hello2}>
        <div><FaFacebookF/></div>
        <div><BsTwitter/></div>
        <div><FaInstagram/></div>
        </div>
  
        
      {/* </div> */}



      

      </div>



    </motion.div>
    </motion.div>
    </div>
  )
}

export default Meet