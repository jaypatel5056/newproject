import React from 'react'
import styles from "../styles/Header.module.scss"
import { GiHamburgerMenu } from 'react-icons/Gi';
import { motion } from "framer-motion"
const Header = () => {
  return (
    <>
    <div className={styles.navbar}>
      <div className={styles.navbarheading}>
      <img src="https://capp.nicepage.com/1a3b34123e5a23fa2ec02642c3f27a25764372fe/images/default-logo.png" alt="log-img" />
       </div>
       <div className={styles.navbaricon}>
       <GiHamburgerMenu/>
      </div> 
      </div>

      <div className={styles.section1}>
      <div className={styles.section1place} id="section1place">
      <motion.div 
    //    initial={{x: -200,}}
    //    animate={{x: 0,}}
    //    transition={{duration: 1.5}}
      
      
      className={styles.rectangle} id="rectangle">  
        <motion.h1
        initial={{y: -200, scale:0.5}}
        animate={{y: 0, opacity:[0,0.25,0.50,0.75,1],scale:1}}
        transition={{duration: 1.5}}
        className={styles.p1} id="p1">What We Believe</motion.h1>
        <p className={styles.p2}>Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla. </p>
        <p class={styles.p3}>Image from <a href="https://freepik.com/photos/backround" class={styles.a1}>Freepik</a>
            </p>
        <div className={styles.buttons12} >
        <a href="#">READ MORE</a>
        </div>
      </motion.div>
    </div>
  </div>
  </>
  )
}

export default Header
    