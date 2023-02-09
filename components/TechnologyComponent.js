import React from 'react'
import SmallDetails from "../components/blogsmalldetailsComponent"
import styles from "../styles/Technology.module.scss"
import { AiOutlineUser, AiFillWechat } from "react-icons/Ai";
import { BsArrowRight, BsTwitter, BsYoutube } from "react-icons/Bs";
import Link from "next/link"


const TechnologyComponent = () => {
  return (
    <>
     <div className={styles.header}>
    <div>
      <h3 className={styles.h3}>Technology</h3>
    </div>
    <div className={styles.right}>
      {" "}
      <h5 class={styles.h5}>More In Technology</h5>
      <BsArrowRight />
    </div>
  </div>
    <div className={styles.capacitysection}>
       <div className={styles.section1place}>
 <div className={styles.squaresection}>
<div className={styles.square}>
  
<a href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/" target="_self">
  <img src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-26.jpg" alt="image1"/>
</a>
  <h3 className={styles.squareh3}><Link href="blogs/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells" target="_self"
  >A Lesson From the Henrietta Lacks Story Science Needs Your Cells </Link></h3>
<SmallDetails/>
  <p className={styles.squarep}>Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh …</p>
</div>
<div className={styles.square}>
<a href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/" target="_self">
  <img src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-27.jpg" alt="image1"/>
</a>
  {/* <img src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-27.jpg" alt="image2"/> */}
  <h3 className={styles.squareh3}>
  <Link href="blogs/what-moves-gravel-size-gypsum-crystals-around-the-desert" 
  >
  What Moves Gravel-Size Gypsum Crystals Around the Desert?</Link>
 </h3>
 <SmallDetails/>
  <p className={styles.squarep}>Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh …</p>
</div>
<div className={styles.square}>
    
 <a href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/" target="_self">
  <img src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-28.jpg" alt="image1"/>
</a>

  <h3 className={styles.squareh3}><Link href="blogs/scientists-feeling-under-siege-march-against-trump-policies" target="_self">
  Scientists, Feeling Under Siege, March Against Trump Policies
 </Link></h3>
 <SmallDetails/>
  <p className={styles.squarep}>Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh …
   </p>
  </div>
</div>
</div>
<div className={styles.divider}></div>
</div>
</>
  )
}

export default TechnologyComponent