import React from "react";
import styles from "../../styles/test/topComponent.module.scss";
import Link from "next/link";
import { AiOutlineUser, AiFillWechat } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { BsArrowRight, BsTwitter, BsYoutube } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";

const topComponent = () => {
  return (
    <div>
      {" "}
      <div className={styles.twosections}>
        <div className={styles.firstsection}>
          <div className={styles.first}>
            <div className={styles.blog1}>
              <div className={styles.rectangle} id="rectangle">
                <h5 className={styles.p1} id="p1">
                  SOFTWARE
                </h5>
                <h3 class={styles.p2}>
                  <Link href="/blogs/runningmacosandwindows10onthesamecomputer">
                    {" "}
                    Running macOS and Windows 10 on the Same Computer{" "}
                  </Link>
                  {/* <a href="https://websitedemos.net/tech-news-04/running-macos-and-windows-10-on-the-same-computer/" target="_self">
          Running macOS and Windows 10 on the Same Computer </a> */}
                </h3>
                <div className={styles.details}>
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
                </div>
                <p class={styles.p3}>
                  Cursus iaculis etiam in In nullam donec sem sed consequat
                  scelerisque nibh amet, massa egestas risus, gravida vel amet,
                  imperdiet
                </p>
                {/* <div className={styles.buttons12} >
           <a href="#">READ MORE</a> </div> */}
              </div>
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.image}></div>
            <div className={styles.text}>
              <div className={styles.text1}>
                <h2 className={styles.h2}>APPS</h2>
                <Link
                  href="blogs/broke-a-glass-someday-you-might-3-d-print-a-newone"
                  className={styles.link1}
                >
                  Broke a Glass? Someday You Might 3-D-Print a New One{" "}
                </Link>
              </div>
              <div className={styles.text1}>
                <h2 className={styles.h2}>GAMES</h2>
                <Link
                  href="blogs/this-is-a-giant-shipworm-you-may-wish-it-had-stayed-in-its-tube"
                  className={styles.link1}
                >
                  This Is a Giant Shipworm. You May Wish It Had Stayed In Its
                  Tube.
                </Link>
              </div>
              <div className={styles.text1}>
                <h2 className={styles.h2}>EDITORS PICK</h2>
                <Link
                  href="blogs/for-families-of-teens-at-microsoft-surface"
                  className={styles.link1}
                >
                  For Families of Teens at Microsoft Surface{" "}
                </Link>
              </div>
              <div className={styles.text1}>
                <h2 className={styles.h2}>EDITORS PICK</h2>
                <Link href="/api/hello" className={styles.link1}>
                  Why Netflix shares are down 10%{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.firstsection}>
          <div className={styles.first}>
            <h5 class="elementor-heading-title elementor-size-default">
              Editor’s Pick
            </h5>
            <div className={styles.editorspick}>
              <div className={styles.section1}>
                <div className={styles.epimg1}>
                  <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-02.jpg"
                    alt=""
                  ></img>
                </div>
                <div className={styles.desc}>
                  <Link href="/blogs/forfamiliesofteensatmicrosoftsurface">
                    {" "}
                    Running macOS and Windows 10 on the Same Computer{" "}
                  </Link>

                  <div className={styles.label1}>EDITORS PICK</div>
                </div>
              </div>
              <div className={styles.section1}>
                <div className={styles.epimg1}>
                  <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-10.jpg"
                    alt=""
                  ></img>
                </div>
                <div className={styles.desc}>
                  <Link href="/blogs/whynetflixsharesaredown10">
                    {" "}
                    Why Netflix shares are down 10%{" "}
                  </Link>

                  {/* <a href="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-10.jpg" target="_self">
                Why Netflix shares are down 10% </a> */}
                </div>
                <div className={styles.label2}>EDITORS PICK</div>
              </div>

              <div className={styles.section1}>
                <div className={styles.epimg1}>
                  <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-21.jpg"
                    alt=""
                  ></img>
                </div>
                <div className={styles.desc}>
                  <Link href="/blogs/6botsthatdeliverscienceandserendipityontwitter">
                    {" "}
                    6 Bots That Deliver Science and Serendipity on Twitter{" "}
                  </Link>
                  <a
                    href="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-21.jpg"
                    target="_self"
                  >
                    6 Bots That Deliver Science and Serendipity on Twitter
                  </a>
                </div>
                <div className={styles.label3}>APPS</div>
              </div>
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.newsletter}>
              <div className={styles.mailcover}>
                <FiMail />
              </div>
              <div className={styles.content}>
                <h4>Subscribe to Our Newsletter </h4>
                <p>gravida aliquet vulputate faucibus tristique odio. </p>
                <input
                  type="email"
                  placeholder="Email address"
                  required=""
                ></input>
                <div className={styles.buttons1}>
                  <div>
                    <a href="#">Subscribe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.firstsection}>
          <div className={styles.first}>
            <div className={styles.techreviews}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.h3}>Tech Reviews</h3>
                </div>
                <div className={styles.right}>
                  {" "}
                  <h5 class={styles.h5}>More in Tech Reviews</h5>
                  <BsArrowRight />
                </div>
              </div>
            </div>
            <div className={styles.threesection}>
              <div className={styles.firstsection}>
                <img
                  src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-03.jpg"
                  alt=""
                ></img>

                <div className={styles.content1}>
                  <p className={styles.p1}> GADGET</p>

                  <Link
                    href="blogs/ipad-pro-m1-chip-bringing-the-macbook-pro-power"
                    className={styles.a1}
                  >
                    iPad Pro M1 Chip: Bringing The MacBook Pro Power{" "}
                  </Link>

                  {/* <a
              href="https://websitedemos.net/tech-news-04/ipad-pro-m1-chip-bringing-the-macbook-pro-power/"
              target="_self"
              className={styles.a1}
            >
              iPad Pro M1 Chip: Bringing The MacBook Pro Power{" "}
            </a> */}
                  <p>
                    Cursus iaculis etiam in In nullam donec sem sed consequat
                    scelerisque nibh amet, massa egestas risus, gravida vel
                    amet, imperdiet …
                  </p>
                  <div className={styles.details}>
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
                  </div>
                </div>
              </div>

              <div className={styles.firstsection}>
                <img
                  src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-11.jpg"
                  alt=""
                ></img>

                <div className={styles.content1}>
                  <p className={styles.p1}> GADGET</p>
                  <Link
                    href="blogs/dell-xps-13-2021-the-best-windows-laptop-now-with-oled"
                    className={styles.a1}
                  >
                    Dell XPS 13 2021: The best Windows laptop now with OLED{" "}
                  </Link>
                  {/* <a
              href="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-11.jpg"
              target="_self"
              className={styles.a1}
            >
              Dell XPS 13 2021: The best Windows laptop now with OLED{" "}
            </a> */}
                  <p>
                    Cursus iaculis etiam in In nullam donec sem sed consequat
                    scelerisque nibh amet, massa egestas risus, gravida vel
                    amet, imperdiet …
                  </p>
                  <div className={styles.details}>
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
                  </div>
                </div>
              </div>
              <div className={styles.firstsection}>
                <Link
                  href="blogs/watching-their-dust-photographing-players-in-pollination"
                  className={styles.a1}
                >
                  <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-22.jpg"
                    alt=""
                  ></img>
                </Link>

                <div className={styles.content1}>
                  <p className={styles.p1}> GADGET</p>
                  <Link
                    href="blogs/watching-their-dust-photographing-players-in-pollination"
                    className={styles.a1}
                  >
                    Watching Their Dust: Photographing Players in Pollination
                  </Link>
                  {/* <a
              href="https://websitedemos.net/tech-news-04/ipad-pro-m1-chip-bringing-the-macbook-pro-power/"
              target="_self"
              className={styles.a1}
            >
              Watching Their Dust: Photographing Players in Pollination{" "}
            </a> */}
                  <p>
                    Cursus iaculis etiam in In nullam donec sem sed consequat
                    scelerisque nibh amet, massa egestas risus, gravida vel
                    amet, imperdiet …
                  </p>
                  <div className={styles.details}>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.newsletter}>
            <div className={styles.mailcover}>
              <FiMail />
            </div>
            <div className={styles.content}>
              <h4>Subscribe to Our Newsletter </h4>
              <p>gravida aliquet vulputate faucibus tristique odio. </p>
              <input
                type="email"
                placeholder="Email address"
                required=""
              ></input>
              <div className={styles.buttons1}>
                <div>
                  <a href="#">Subscribe</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.secondsection}>
          <div className={styles.image}></div>
          <div className={styles.text}>
            <div className={styles.text1}>
              <h2 className={styles.h2}>APPS</h2>
              <Link
                href="blogs/broke-a-glass-someday-you-might-3-d-print-a-newone"
                className={styles.link1}
              >
                Broke a Glass? Someday You Might 3-D-Print a New One{" "}
              </Link>
            </div>
            <div className={styles.text1}>
              <h2 className={styles.h2}>GAMES</h2>
              <Link
                href="blogs/this-is-a-giant-shipworm-you-may-wish-it-had-stayed-in-its-tube"
                className={styles.link1}
              >
                This Is a Giant Shipworm. You May Wish It Had Stayed In Its
                Tube.
              </Link>
            </div>
            <div className={styles.text1}>
              <h2 className={styles.h2}>EDITORS PICK</h2>
              <Link
                href="blogs/for-families-of-teens-at-microsoft-surface"
                className={styles.link1}
              >
                For Families of Teens at Microsoft Surface{" "}
              </Link>
            </div>
            <div className={styles.text1}>
              <h2 className={styles.h2}>EDITORS PICK</h2>
              <Link href="/api/hello" className={styles.link1}>
                Why Netflix shares are down 10%{" "}
              </Link>
            </div>
          </div>
          <div className={styles.newsletter}>
            <div className={styles.mailcover}>
              <FiMail />
            </div>
            <div className={styles.content}>
              <h4>Subscribe to Our Newsletter </h4>
              <p>gravida aliquet vulputate faucibus tristique odio. </p>
              <input
                type="email"
                placeholder="Email address"
                required=""
              ></input>
              <div className={styles.buttons1}>
                <div>
                  <a href="#">Subscribe</a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.imgsection}>
            <img
              src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-promo-potrait-banner-img.jpg"
              alt=""
            />
          </div>
          <div className={styles.socials}>
            <h5 class="elementor-heading-title elementor-size-default">
              Stay Connected
            </h5>
            <div className={styles.socials1}>
              <div className={styles.socials2}>
                <div className={styles.svg1}>
                  <GrFacebookOption />
                </div>
                <div className={styles.socialscontent}>
                  <h5>TechWire News </h5>
                  <p class="elementor-icon-box-description">2M+ Followers </p>
                </div>
              </div>

              <div className={styles.socials1}>
                <div className={styles.socials2}>
                  <div className={styles.svg2}>
                    <BsTwitter />
                  </div>
                  <div className={styles.socialscontent}>
                    <h5>@techwirenews </h5>
                    <p class="elementor-icon-box-description">
                      1.4M+ Followers{" "}
                    </p>
                  </div>
                </div>

                <div className={styles.socials1}>
                  <div className={styles.socials2}>
                    <div className={styles.svg3}>
                      <BsYoutube />
                    </div>
                    <div className={styles.socialscontent}>
                      <h5>TechWire </h5>
                      <p class="elementor-icon-box-description">
                        4M+ Subscribers{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default topComponent;
