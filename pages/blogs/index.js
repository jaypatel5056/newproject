import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import GadgetComponent from "../components/blogsection/gadgetComponent";
import styles from "../../styles/blogs.module.scss";
import { useState } from "react";
import PodcastImageComponent from "@/components/blogsection/podcastImageComponent";
import Technology from "../components/blogsection/technologyComponent";
import Rsc from "../../components/test/RscComponent";
import Last from "../components/blogsection/lastComponent";
import GadgetSoftware from "../components/blogsection/gadgetSoftwareComponent";
// impoGadgetComponent
import GamesComponent from "../components/blogsection/gamesComponent";
import FAQ from "../components/blogsection/faqComponent";
import { useEffect } from "react";
import Navbar1 from "../../components/blogsection/navbarComponent";
import New from "../components/blogsection/blogsFirstComponent";

// Last;
import Top from "../../components/test/topComponent";
function BLogs() {
  const [id, setId] = useState();
  const [isLoggedIn1, setIsLoggedIn1] = useState(false);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("username");
    if (isLoggedIn) {
      setIsLoggedIn1(true);
    } else {
      setIsLoggedIn1(false);
    }
  }, []);
  console.log("home");
  console.log(isLoggedIn1);

  //  const handleCLick=async ()=>{
  //   setId(1)
  //      const res=await fetch(`api/users/${id}`)
  //      const data=await res.json();

  //  }
  return (
    <>
      {/* <Navbar1/> */}
      <div className={styles.hello1}>
        <div className={styles.hello2}></div>
        <div className={styles.first}>
          {/* <div className={styles.navbar}>
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand>
                <Link href="/">
                  <img
                    width=""
                    height="40"
                    src="https://www.vaimanagement.co/images/logo/vai-h-b.svg"
                    class={styles.logo}
                    alt="Tech News"
                    decoding="async"
                  />
                </Link>
              </Navbar.Brand>
              {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          {/* <div className={styles.section2}>
                <Nav className="me-auto">
                  <Nav.Link href="#home" className={styles.hello}>
                    Home
                  </Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                 { !isLoggedIn1 && <Nav.Link href="login/login">
                  {/* <Link */}
          {/* href="blogs/broke-a-glass-someday-you-might-3-d-print-a-newone" */}
          {/* className={styles.link1} */}
          {/* // ></Link> */}
          {/* Signin</Nav.Link>}
                { !isLoggedIn1 &&
                  <Nav.Link href="login/signup">Signup</Nav.Link>}
                   { isLoggedIn1 &&
                  <Nav.Link href="login/signout">Signout</Nav.Link>}
                </Nav>
              </div>
            </Container> */}
          {/* </Navbar> */}
          {/* </div> */}
          {/* <Top/> */}
          {/* <div className={styles.twosections}>
          <div className={styles.secondsection}>
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
          </div>
        </div> */}
          <Navbar1 />
          <New />

          <PodcastImageComponent />
          <GadgetComponent />
          <Technology />
          <GadgetSoftware />
          <img
            src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-wide-promo-banner-placeholder.jpg"
            alt=""
            className={styles.lastimg}
          />
          <GamesComponent />
          <Last />
          <FAQ />
        </div>
      </div>
    </>
  );
}

export default BLogs;
