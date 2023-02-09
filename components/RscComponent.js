import React from 'react'
import styles from "../styles/Rsc.module.scss";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { HiOutlineArrowNarrowRight } from 'react-icons/Hi';
import { motion, variants } from "framer-motion"
import { fas } from '@fortawesome/free-solid-svg-icons';

const cardVariants= {
  offscreen: {
    y: -200, opacity: 0
  },
  onscreen: {
    y: 0, opacity: 1,
    transition: {
      duration: 1.5,
      delay: 1
    }
  }
};
const RSC = () => {
  return (
    <div className={styles.rsc}> 
     <motion.div 
     initial={{y: 350,opacity: 0}}
     whileInView={{y: 0,opacity: 1}}
     transition={{duration: 1,opacity: 1}}
     viewport={{ once: true, amount: 0.3}}  
     className={styles.square1}>
     <motion.h2
     variants={cardVariants}
     initial="offscreen"
     whileInView="onscreen"
     viewport={{ once: false, amount: 0.5 }}
    // animate= {{y: 0, opacity: 1}}
    // transition ={{duration: 1.5}}
     class={styles.h2}>Research</motion.h2>
     <motion.p 
     initial={{opacity:0 }}
     whileInView={{rotate: [45,0],opacity:1}}
     transition={{duration: 1,delay:1}}
     viewport={{ once: true, amount: 0.2}}  
     
     
     
     class= {styles.p1}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</motion.p>
     <motion.div 
     initial={{x: -50}}
     whileInView={{x: 0}}
     transition={{duration: 0.5}}  
     viewport={{ once: true, amount: 0.2}}  
      className={styles.icon}>  
      <HiOutlineArrowNarrowRight  size={70}  color="white"/>
      </motion.div> 
      </motion.div>       
      <motion.div 
      className={styles.square}>
     <motion.h2 
     variants={cardVariants}
     initial="offscreen"
     whileInView="onscreen"
      viewport={{ once: false, amount: 0.5 }}
      transition={{delay: 2}}
    //  variants={cardVariants}
    //  initial={{
    //   y: -200, opacity: 0
    // }}
    //  whileInView={{y: 0, opacity: 1,
    //  transition: {
    //    duration: 1.5,
    //    delay: 2
    //  }}}
       class={styles.h2}> Strategy </motion.h2>
        <motion.p 
         initial={{opacity:0 }}
         whileInView={{rotate: [45,0],opacity:1}}
         transition={{duration: 1,delay:1}}
          viewport={{ once: true, amount: 0.5}} 
        class= {styles.p1}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </motion.p>
       
     {/* <p class= {styles.p1}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
      <motion.div 
      initial={{x: -50,opacity:0}}
      whileInView={{x: 0,opacity: 1}}
      transition={{duration: 0.5,delay: 1}}  
       viewport={{ once: false, amount: 0.2}}  
      className={styles.icon}>  
      <HiOutlineArrowNarrowRight size={70}  color="#5576fb"/>
      </motion.div>

      </motion.div>   
      <div className={styles.square}>
     <motion.h2 variants={cardVariants}
     initial="offscreen"
     whileInView="onscreen"
     transition={{delay: 2}}
      viewport={{ once: true, amount: 0.01 }} class={styles.h2}>Consulting</motion.h2>
     <motion.p 
      initial={{opacity:0 }}
      whileInView={{rotate: [45,0],opacity:1}}
      transition={{duration: 1,delay:1}}
       viewport={{ once: true, amount: 0.2}} 
     class= {styles.p1}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</motion.p>
      <motion.div 
      initial={{x: -50,opacity:0}}
      whileInView={{x: 0,opacity:1}}
      transition={{duration: 0.5,delay: 2}}  
      viewport={{ once: true, amount: 0.1}}  
      className={styles.icon}>  
      <HiOutlineArrowNarrowRight size={70}  color="#5576fb"/>
      </motion.div>
      
      </div>    
     <div className={styles.strategy}></div>
     <div className={styles.consulting}></div>
        
        </div>
  )
}

export default RSC