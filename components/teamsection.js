import React from 'react'
import styles from "./teamsection.module.scss"
import { FaFacebookF ,FaInstagram } from 'react-icons/Fa';
import { BsTwitter } from 'react-icons/Bs';

const Meet = () => {
  return (
    <div className={styles.hello1}>
    <div className={styles.hello}>
      <div className={styles.first}>
<h2 class={styles.h2}>Meet The Team</h2>
<p class={styles.p2}>Image by <a href="https://freepik.com" class={styles.a1}>Freepik</a></p>
    </div>
    <div className={styles.squaresection}>
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



    </div>
    </div>
    </div>
  )
}

export default Meet