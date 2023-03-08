import React from "react";
import SmallDetails from "../components/blogsmalldetailsComponent";
import styles from "../styles/gadgetsoftware.module.scss";
import { BsArrowRight, BsTwitter, BsYoutube } from "react-icons/bs";
import Link from 'next/link'

const TechnologyComponent = () => {
  return (
    <>
      <div className={styles.twosection}>
        <div className={styles.hello}>
          <div className={styles.header}>
            <div>
              <h3 className={styles.h3}>Gadgets</h3>
            </div>
            <div className={styles.right}>
              {" "}
              <h5 class={styles.h5}>More In Gadgets</h5>
              <BsArrowRight />
            </div>
          </div>

          <div className={styles.capacitysection}>
            <div className={styles.section1place}>
              <div className={styles.square}>
                <a
                  href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/"
                  target="_self"
                >
                  <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-05.jpg"
                    alt="image1"
                  />
                </a>
                {/* <img src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-27.jpg" alt="image2"/> */}
                <h3 className={styles.squareh3}>
                  <Link
                    href="blogs/how-a-gadget-drives-human-creativity"
                    target="_self"
                  >
                    How a Gadget Drives Human Creativity
                  </Link>
                </h3>
                <SmallDetails />
                <p className={styles.squarep}>
                  Cursus iaculis etiam in In nullam donec sem sed consequat
                  scelerisque nibh amet, massa egestas risus, gravida vel amet,
                  imperdiet volutpat rutrum sociis quis velit, commodo enim
                  aliquet. …
                </p>
              </div>

              <div className={styles.squaresection}>
                <div className={styles.square}>
                  <a
                    href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/"
                    target="_self"
                  >
                    <img
                      src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-13.jpg"
                      alt="image1"
                    />
                  </a>

                  <h3 className={styles.squareh3}>
                    <a
                      href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/"
                      target="_self"
                    >
                      An IoT Failure Worst Nightmare

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
                      src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-15.jpg"
                      alt="image1"
                    />
                  </a>
                  {/* <img src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-27.jpg" alt="image2"/> */}
                  <h3 className={styles.squareh3}>
                    <a
                      href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/"
                      target="_self"
                    >
                      Dogs Do Their Duty for Science
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
            {/* <div className={styles.divider}></div> */}
          </div>
        </div>

        {/* <div></div> */}
        <div className={styles.hello}>
          <div className={styles.header}>
            <div>
              <h3 className={styles.h3}>Software</h3>
            </div>
            <div className={styles.right}>
              {" "}
              <h5 class={styles.h5}>More In Software</h5>
              <BsArrowRight />
            </div>
          </div>

          <div className={styles.capacitysection}>
            <div className={styles.section1place}>
              <div className={styles.square}>
                <a
                  href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/"
                  target="_self"
                >
                  <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-08.jpg"
                    alt="image1"
                  />
                </a>
                {/* <img src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-27.jpg" alt="image2"/> */}
                <h3 className={styles.squareh3}>
                  <a
                    href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/"
                    target="_self"
                  >
                  Scientists Fear Climate Data Gap as Trump Aims at Satellites
                  </a>
                </h3>
                <SmallDetails />
                <p className={styles.squarep}>
                  Cursus iaculis etiam in In nullam donec sem sed consequat
                  scelerisque nibh amet, massa egestas risus, gravida vel amet,
                  imperdiet volutpat rutrum sociis quis velit, commodo enim
                  aliquet. …
                </p>
              </div>

              <div className={styles.squaresection}>
                <div className={styles.square}>
                  <a
                    href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/"
                    target="_self"
                  >
                    <img
                      src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-26.jpg"
                      alt="image1"
                    />
                  </a>

                  <h3 className={styles.squareh3}>
                    <a
                      href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/"
                      target="_self"
                    >
                      Life on CAD: Get to Know the Shortcut
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
                      src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-27.jpg"
                      alt="image1"
                    />
                  </a>
                  {/* <img src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-27.jpg" alt="image2"/> */}
                  <h3 className={styles.squareh3}>
                    <a
                      href="https://websitedemos.net/tech-news-04/a-lesson-from-the-henrietta-lacks-story-science-needs-your-cells/"
                      target="_self"
                    >
                      Why You Shouldn’t Walk on Escalators
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
            {/* <div className={styles.divider}></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyComponent;
