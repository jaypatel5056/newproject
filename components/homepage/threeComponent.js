import React from 'react'
import styles from "../../styles/homepage/three.module.scss";

import { motion, variants } from "framer-motion"

const Three = () => {
  return (
    
    <div className={styles.starting}>
      {/* <div className={styles.binding}> */}
      <div className={styles.firstsection}>
   <div className={styles.secondsection}>
       <motion.div 
        // initial={{x: 0,}}
        // whileInView={{x: 0,}}
        // transition={{duration: 1}}
        // viewport={{ once: true, amount: 0.2}}
       className={styles.sections}>
       < motion.div 
       initial={{y: 200,opacity:0}}
       whileInView={{y: 0,opacity:1}}
       transition={{duration: 1,delay:0.5}}
       viewport={{ once: true, amount: 0.2}}  
       
       className={styles.section}>
         <div className={styles.style}>
         <div><h2 class={styles.h2}>01</h2></div>
         <div><h5 class={styles.h5}>Develop​ment</h5></div>
         </div>
         <p class={styles.p1}> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
       </motion.div>
       <motion.div 
        initial={{y: 200,opacity:0}}
        whileInView={{y: 0,opacity:1}}
        transition={{duration: 1,delay:0.5}}
        viewport={{ once: true, amount: 0.2}}
       className={styles.section}>


       <div className={styles.style}>
         <div><h2 class={styles.h2}>02</h2></div>
         <div><h5 class={styles.h5}>Consulting</h5></div>
         </div>
         <p class={styles.p1}> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>        
       </motion.div>
       <motion.div 
        initial={{y: 200,opacity:0}}
        whileInView={{y: 0,opacity:1}}
        transition={{duration: 1,delay:0.5}}
        viewport={{ once: true, amount: 0.2}}  
       className={styles.section}>
       <div className={styles.style}>
         <div><h2 class={styles.h2}>03</h2></div>
         <div><h5 class={styles.h5}>New material</h5></div>
         </div>
         <p class={styles.p1}> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>        
       </motion.div>
       </motion.div>
    </div>
    </div>
    </div>
    // </div>
  )
}

export default Three