import React from 'react'
import styles from "../../styles/header1.module.scss"
import { motion } from "framer-motion"
const Header = () => {
  return (
    <>
    {/* <div className={styles.navbar}>
      <div className={styles.navbarheading}>
        <Link href="/">
      <img src="/unnamed.jpg" alt="log-img" /></Link> */}
      {/* <img src="https://capp.nicepage.com/1a3b34123e5a23fa2ec02642c3f27a25764372fe/images/default-logo.png" alt="log-img" /> */}
       {/* </div>
       <div className={styles.links}>
         <ul id="ast-hf-menu-1" class="" >
             <li id="menu-item-859" class=""><a href="https://websitedemos.net/tech-news-04/category/technology/" class="menu-link">Technology</a></li>
             <li id="menu-item-861" class=""><a href="https://websitedemos.net/tech-news-04/category/software/" class="menu-link">Software</a></li>
             <li id="menu-item-862" class=""><a href="https://websitedemos.net/tech-news-04/category/apps/" class="menu-link">Apps</a></li>
             <li id="menu-item-863" class=""><a href="https://websitedemos.net/tech-news-04/category/games/" class="menu-link">Games</a></li>
             <li id="menu-item-864" class=""><a href="https://websitedemos.net/tech-news-04/podcasts/" class="menu-link">Podcasts</a></li>
             <li id="menu-item-860" class=""><a href="https://websitedemos.net/tech-news-04/category/gadget/" class="menu-link">Gadget</a></li>
           </ul>


       </div>
       <div className={styles.rightside}>

       <ul id="ast-hf-menu-1" class="" >
             <li id="menu-item-859" class={styles.button}><a href="https://websitedemos.net/tech-news-04/category/technology/" class={styles.button}>Subscribe</a></li>
             <li id="menu-item-861" class=""><a href="https://websitedemos.net/tech-news-04/category/software/" class="menu-link">Signin</a></li>
        </ul>

       <div className={styles.navbaricon}>
       <GiHamburgerMenu/>
      </div> 
      </div>
      </div> */}

      <div className={styles.section1}>
      <div className={styles.section1place} id="section1place">
      <motion.div 
       initial={{x: -400,}}
       animate={{x: 0,}}
       transition={{duration: 1}}
      
      
      className={styles.rectangle} id="rectangle">  
        <motion.h1
        initial={{y: -200, scale:0.5}}
        animate={{y: 0, opacity:[0,0.25,0.50,0.75,1],scale:1}}
        transition={{duration: 1.5,delay: 1}}
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
    