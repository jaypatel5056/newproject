import React from "react";
import SmallDetails from "./blogSmallDetailsComponent";
import styles from "@/styles/blog/last11.module.scss";
import { AiOutlineUser, AiFillWechat } from "react-icons/ai";
import { BsArrowRight, BsTwitter, BsYoutube } from "react-icons/bs";

const TechnologyComponent = () => {
  return (
    <>
      <div className={styles.header}>
        <div>
          <h3 className={styles.h3}>Apps</h3>
        </div>
        <div className={styles.right}>
          {" "}
          <h5 class={styles.h5}>More in Apps</h5>
          <BsArrowRight />
        </div>
      </div>
      <div className={styles.capacitysection}>
        <div className={styles.section1place}>
          <div className={styles.squaresection}>
            <div className={styles.square}>
              <a
                href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/"
                target="_self"
              >
                <img
                  src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-07.jpg"
                  alt="image1"
                />
              </a>

              <h3 className={styles.squareh3}>
                <a
                  href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/"
                  target="_self"
                >
                  Antarctic Ice Reveals Earth’s Accelerating Plant Growth
                </a>
              </h3>
              <SmallDetails />
              <p className={styles.squarep}>
                Cursus iaculis etiam in In nullam donec sem sed consequat
                scelerisque nibh …
              </p>
            </div>
            <div className={styles.square}>
              <a
                href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/"
                target="_self"
              >
                <img
                  src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-17.jpg"
                  alt="image1"
                />
              </a>
              {/* <img src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-27.jpg" alt="image2"/> */}
              <h3 className={styles.squareh3}>
                <a
                  href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/"
                  target="_self"
                >
                  Photos of Jupiter From NASA Spacecraft, Both Near and Far
                </a>
              </h3>
              <SmallDetails />
              <p className={styles.squarep}>
                Cursus iaculis etiam in In nullam donec sem sed consequat
                scelerisque nibh …
              </p>
            </div>
            <div className={styles.square}>
              <a
                href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/"
                target="_self"
              >
                <img
                  src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-18.jpg"
                  alt="image1"
                />
              </a>

              <h3 className={styles.squareh3}>
                <a
                  href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/"
                  target="_self"
                >
                  Hans Dehmelt, Nobel Laureate for Isolating Electrons, Dies at
                  94
                </a>
              </h3>
              <SmallDetails />
              <p className={styles.squarep}>
                Cursus iaculis etiam in In nullam donec sem sed consequat
                scelerisque nibh …
              </p>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
      </div>
    </>
  );
};

export default TechnologyComponent;
