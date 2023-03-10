import React from "react";
import styles from "../../styles/games.module.scss";
import styles from "../../styles/"
import Link from "next/link";
import { BsArrowRight, BsTwitter, BsYoutube } from "react-icons/bs";

const GadgetComponent = () => {
  return (
    <>
    <div className={styles.header}>
    <div>
      <h3 className={styles.h3}>Games</h3>
    </div>
    <div className={styles.right}>
      {" "}
      <h5 class={styles.h5}>View All</h5>
      <BsArrowRight />
    </div>
  </div>
    <div className={styles.twosides}>
      <div className={styles.blog1}>
        <div className={styles.rectangle} id="rectangle">
          <h5 className={styles.p1} id="p1">
            GADGET
          </h5>
          <h3 class={styles.p2}>
            <Link href="/blogs/runningmacosandwindows10onthesamecomputer">
              {" "}
              After Badger Buries Entire Cow Carcass, Scientists Go to the Tape{" "}
            </Link>
            {/* <a href="https://websitedemos.net/tech-news-04/running-macos-and-windows-10-on-the-same-computer/" target="_self">
                Running macOS and Windows 10 on the Same Computer </a> */}
          </h3>
          {/* <div className={styles.details}>
            <div className={styles.details1}>
              <div className={styles.icons}>
                <AiOutlineUser />
              </div>
              <a
                href="https://websitedemos.net/tech-news-04/author/akbarh/"
                title="Posts by akbarh"
                rel="author"
              >
                akbarh
              </a>
            </div>
            <div className={styles.details1}>
              <div className={styles.icons}>
                <SlCalender />
              </div>
              <p>July 7, 2021</p>
            </div>
            <div className={styles.details1}>
              <div className={styles.icons}>
                <AiFillWechat />
              </div>
              <p>No Comments</p>
            </div>
          </div> */}
          <p class={styles.p3}>
          Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …


          </p>
          {/* <div className={styles.buttons12} >
               <a href="#">READ MORE</a> </div> */}
        </div>
      </div>

        <div className={styles.blog2}>
          <div className={styles.rectangle} id="rectangle1">
          <h5 className={styles.p1} id="p1">
           MUST READ
          </h5>
          <h3 class={styles.p2}>
            <Link href="/blogs/runningmacosandwindows10onthesamecomputer">
              {" "}
              A Genetic Oddity May Give Octopuses and Squids Their Smarts{" "}
            </Link>
            {/* <a href="https://websitedemos.net/tech-news-04/running-macos-and-windows-10-on-the-same-computer/" target="_self">
                Running macOS and Windows 10 on the Same Computer </a> */}
          </h3>
          {/* <div className={styles.details}>
            <div className={styles.details1}>
              <div className={styles.icons}>
                <AiOutlineUser />
              </div>
              <a
                href="https://websitedemos.net/tech-news-04/author/akbarh/"
                title="Posts by akbarh"
                rel="author"
              >
                akbarh
              </a>
            </div>
            <div className={styles.details1}>
              <div className={styles.icons}>
                <SlCalender />
              </div>
              <p>July 7, 2021</p>
            </div>
            <div className={styles.details1}>
              <div className={styles.icons}>
                <AiFillWechat />
              </div>
              <p>No Comments</p>
            </div> */}
          {/* </div> */}
          <p class={styles.p3}>
          Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …


          </p>
          {/* <div className={styles.buttons12} >
               <a href="#">READ MORE</a> </div> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default GadgetComponent;
