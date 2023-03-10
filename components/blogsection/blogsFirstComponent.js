import React from "react";
import styles from "../../styles/blogsFirst.module.scss";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import { AiOutlineUser, AiFillWechat } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { FiMail } from "react-icons/fi";
import { BsArrowRight, BsTwitter, BsYoutube } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";

const blogs1 = () => {
  return (
    //    <Container>
    //     Rows, content, etc
    //    </Container>
    <>
    <div className={styles.main1}>
      <Container fluid className="wp-100 }">
        <Row className={` `}>
          <Col sm={9} className={` ${styles.firstsection}`}>
            <div className={styles.blog1}>
              
              <div className={styles.rectangle} id="rectangle">
                <h5 className={styles.p1} id="p1">
                  SOFTWARE
                </h5>
                <h3 class={styles.p2}>
                  <Link href="/blogs/5">
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
          </Col>
          <Col sm={3}  className={`  ${styles.secondsection}`}>
            <div className={styles.image}></div>{" "}
            <div className={styles.text}>
              <div className={styles.text1}>
                <h2 className={styles.h2}>APPS</h2>
                <Link
                  href="blogs/8"
                  className={styles.link1}
                >
                  Broke a Glass? Someday You Might 3-D-Print a New One{" "}
                </Link>
              </div>
              <div className={styles.text1}>
                <h2 className={styles.h2}>GAMES</h2>
                <Link
                  href="blogs/27"
                  className={styles.link1}
                >
                  This Is a Giant Shipworm. You May Wish It Had Stayed In Its
                  Tube.
                </Link>
              </div>
              <div className={styles.text1}>
                <h2 className={styles.h2}>EDITORS PICK</h2>
                <Link
                  href="/blogs/10"
                  className={styles.link1}
                >
                  For Families of Teens at Microsoft Surface{" "}
                </Link>
              </div>
              <div className={styles.text1}>
                <h2 className={styles.h2}>EDITORS PICK</h2>
                <Link href="/blogs/29" className={styles.link1}>
                  Why Netflix shares are down 10%{" "}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row className={`  ${styles}`}>
          <Col sm={9} className={` mt-40 ${styles.firstsection}`}>
          <div class="mt-40 d-flex justify-content-between align-items-center blogs-first_header__NqUIR">
            <div className="d-flex justify-content-center align-items-center "><h5 class="mt-0 elementor-heading-title elementor-size-default">
              Editor’s Pick
            </h5></div>
            <div class="d-flex justify-content-between g-5 g-sm-10 m-20 blogs-first_right__MSlQJ"> 
            <h5 class="blogs-first_h5__dw5P6">View All</h5>
            <div class="d-flex align-items-center justify-content-center fs-50">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
              </div>
              </div>
              </div>
            {/* <h5 class="elementor-heading-title elementor-size-default">
              Editor’s Pick
            </h5> */}
            <Row className={` mt-10 ${styles.editorspick}`}>
            {/* <div className={styles.editorspick}> */}
            <Col sm={4} className={` ${styles.section1}`}>
              {/* <div className={styles.section1}> */}
                
                <div className={styles.epimg1}>
                  <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-02.jpg"
                    alt=""
                  ></img>
                </div>
                <div className={styles.desc}>
                  <Link href="/blogs/10">
                    {" "}
                    For Families of Teens at Microsoft Surface
                  </Link>

                  <div className={styles.label1}>EDITORS PICK</div>
                </div>
              {/* </div> */}
              </Col>

              <Col sm={4} className={` ${styles.section1}`}>
              {/* <div className={styles.section1}> */}
                <div className={styles.epimg1}>
                  <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-10.jpg"
                    alt=""
                  ></img>
                </div>
                <div className={styles.desc}>
                  <Link href="/blogs/29">
                    {" "}
                    Why Netflix shares are down 10%{" "}
                  </Link>

                  {/* <a href="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-10.jpg" target="_self">
                        Why Netflix shares are down 10% </a> */}
                </div>
                <div className={styles.label2}>EDITORS PICK</div>
              {/* </div> */}
              </Col>
              
              <Col sm={4} className={` ${styles.section1}`}>

              {/* <div className={styles.section1}> */}
                <div className={styles.epimg1}>
                  <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-21.jpg"
                    alt=""
                  ></img>
                </div>
                <div className={styles.desc}>
                  <Link href="/blogs/12">
                    {" "}
                    6 Bots That Deliver Science and Serendipity on Twitter{" "}
                  </Link>
                  {/* <a
                      href="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-21.jpg"
                      target="_self"
                    >
                      6 Bots That Deliver Science and Serendipity on Twitter
                    </a> */}
                </div>
                <div className={styles.label3}>APPS</div>
              {/* </div> */}
             
              </Col>
            {/* </div> */}
            </Row>
          </Col>
          <Col sm={3} className={`pl-0 ml-0 ${styles.secondsection}`}>
            <div className={`pl-0 ${styles.newsletter}`}>
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
          </Col>
        </Row>
        <Row className={`${styles}`}>
          <Col sm={9} className={` ${styles.firstsection}`}>
            <div className={styles.divider}></div>
            <div className={styles.techreviews}>
              
              <div className={`d-flex justify-content-between align-items-center ${styles.header}`}>
                <div>
                  <h3 className={styles.h3}>Tech Reviews</h3>
                </div>
                <div className={`d-flex justify-content-between g-5 g-sm-10 ${styles.right}`}>
                  {" "}
                  <h5 class={styles.h5}>More in Tech Reviews</h5>
                  <div className="d-flex align-items-center justify-content-center fs-50">
                  <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <Container className={` m-0 p-0  ${styles.threesection}`}>
           
            {/* <div className={styles.threesection}> */}
            <Row className={` m-0 p-0  ${styles.firstsection}`}>
            <Col sm={6} className={` ${styles.firstsection}`}> 
              {/* <div className={styles.firstsection}> */}
                <Link
                  href="blogs/33"
                  className={styles.a1}
                >
                  <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-03.jpg"
                    alt=""
                  ></img>
                </Link>
                </Col>
                {/* <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-03.jpg"
                    alt=""
                  ></img> */}
                  <Col sm={6} className={` ${styles.firstsection}`}>

                <div className={styles.content1}>
                  <p className={styles.p1}> TECH REVIEWS </p>

                  <Link
                    href="blogs/33"
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
                </Col>
              {/* </div> */}
              
              </Row>

              <Row className={` m-0 p-0  ${styles.firstsection}`}>
              <Col sm={6} className={` ${styles.firstsection}`}>
              {/* <div className={styles.firstsection}> */}
                <Link
                  href="blogs/35"
                  className={styles.a1}
                >
                  <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-11-768x499.jpg"
                    alt=""
                  ></img>
                </Link>
                </Col>
                {/* <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-11.jpg"
                    alt=""
                  ></img> */}
                  <Col sm={6} className={` ${styles.firstsection}`}>
                <div className={styles.content1}>
                  <p className={styles.p1}> TECH REVIEWS </p>
                  <Link
                    // href="blogs/dell-xps-13-2021-the-best-windows-laptop-now-with-oled"
                    href="blogs/35"
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
              {/* </div> */}
              </Col>
              </Row>
              <Row className={` m-0 p-0  ${styles.firstsection}`}>
              <Col sm={6} className={`  ${styles.firstsection}`}>
              {/* <div className={styles.firstsection}> */}
                <Link
                  href="blogs/14"
                  className={styles.a1}
                >
                  <img
                    src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-22.jpg"
                    alt=""
                  ></img>
                </Link>
                </Col>
                <Col sm={6} className={`  ${styles.firstsection}`}>
                <div className={` d-flex flex-column ${styles.content1}`}>
                  <p className={styles.p1}> TECH REVIEWS </p>
                  <Link
                    href="blogs/14"
                    className={`wp-100 ${styles.a1}`}
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
                </Col>
              {/* </div> */}
              {/* </Col> */}
              </Row>
            {/* </div> */}
            </Container>
          </Col>
          <Col sm={3} className={` ${styles.secondsection}`}>
            <div className={styles.imgsection}>
              <img
                src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-promo-potrait-banner-img.jpg"
                alt=""
              />
            </div>
            <div className={styles.divider}></div>
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
                    <p class={styles.follow}>2M+ Followers </p>
                  </div>
                </div>

                <div className={styles.socials1}>
                  <div className={styles.socials2}>
                    <div className={styles.svg2}>
                      <BsTwitter />
                    </div>
                    <div className={styles.socialscontent}>
                      <h5>@techwirenews </h5>
                      <p class={styles.follow}>1.4M+ Followers </p>
                    </div>
                  </div>

                  <div className={styles.socials1}>
                    <div className={styles.socials2}>
                      <div className={styles.svg3}>
                        <BsYoutube />
                      </div>
                      <div className={styles.socialscontent}>
                          <h5>TechWire </h5>
                        <p class={styles.follow}>4M+ Subscribers </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};

export default blogs1;
