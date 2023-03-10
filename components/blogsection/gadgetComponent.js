import React from "react";
import styles from "../../styles/gadget.module.scss";
import Link from "next/link";
import { BsArrowRight, BsTwitter, BsYoutube } from "react-icons/bs";

const GadgetComponent = () => {
  return (
    <>
      <div className={styles.header}>
        <div>
          <h3 className={styles.h3}>Must Read</h3>
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
              <Link href="/blogs/spend-a-dollar-on-upcoming-iphone-13-and-how-to-save-more">
                {" "}
                Spend a Dollar on Upcoming iPhone 13, and How to Save More{" "}
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
              Cursus iaculis etiam in In nullam donec sem sed consequat
              scelerisque nibh amet, massa egestas risus.
            </p>
            {/* <div className={styles.buttons12} >
               <a href="#">READ MORE</a> </div> */}
          </div>
        </div>

        <div className={styles.blog2}>
          <div className={styles.rectangle} id="rectangle">
            <h5 className={styles.p1} id="p1">
              MUST READ
            </h5>
            <h3 class={styles.p2}>
              <Link href="/blogs/no-longer-a-dream-silicon-valley-takes-on-the-flying-car">
                {" "}
                No Longer a Dream: Silicon Valley Takes On the Flying Car{" "}
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
              Cursus iaculis etiam in In nullam donec sem sed consequat
              scelerisque nibh amet, massa egestas risus, gravida vel amet,
              imperdiet …
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
