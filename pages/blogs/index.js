import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../../styles/Blogs.module.scss"
import { AiOutlineUser,AiFillWechat } from 'react-icons/Ai';
import { SlCalender } from 'react-icons/Sl';
import Link from 'next/link'


function BLogs() {
  return (
    <>
    <div className={styles.first}>
    <div className={styles.navbar}>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand>
        <img width="" height="40" src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/site-logo.svg" class={styles.logo} alt="Tech News" decoding="async"/>
        </Navbar.Brand>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="#home" className={styles.hello}>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    <div className={styles.twosections}>
        <div className={styles.firstsection}>  
        <div className={styles.blog1}>
        <div  className={styles.rectangle} id="rectangle">  
        <h5 className={styles.p1} id="p1">SOFTWARE</h5>
        <h3 class={styles.p2}>
          <Link href="/blogs/runningmacosandwindows10onthesamecomputer"> Running macOS and Windows 10 on the Same Computer</Link>
        {/* <a href="https://websitedemos.net/tech-news-04/running-macos-and-windows-10-on-the-same-computer/" target="_self">
        Running macOS and Windows 10 on the Same Computer </a> */}
        </h3>
    <div className={styles.details}>
    <div className={styles.details1}>
    <div className={styles.icons}><AiOutlineUser/></div>
    <a href="https://websitedemos.net/tech-news-04/author/akbarh/" title="Posts by akbarh" rel="author">akbarh</a>
    </div>
    <div className={styles.details1}>
    <div className={styles.icons}><SlCalender/></div>
      <p>July 7, 2021</p>
    </div>
    <div className={styles.details1}>
     <div className={styles.icons}><AiFillWechat/></div>
    <p>No Comments</p>
    </div>
    
</div>
        <p class={styles.p3}>Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet</p>
        {/* <div className={styles.buttons12} >
        <a href="#">READ MORE</a> </div> */}
         </div>
        </div>
<div className={styles.editorspick}> 
 <div className={styles.section1}> 

 <div className={styles.epimg1}> 
 <img src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-02.jpg" alt=""></img>
 </div>
 <div className={styles.desc}> 
 <a href="https://websitedemos.net/tech-news-04/for-families-of-teens-at-microsoft-surface/" target="_self">
For Families of Teens at Microsoft Surface </a>
<div className={styles.label1}>
 EDITORS PICK
 </div>
 </div>
 </div>  
 <div className={styles.section1}>
 <div className={styles.epimg1}> 
 <img src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-10.jpg" alt=""></img>
 </div>
 <div className={styles.desc}> 
 <a href="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-10.jpg" target="_self">
 Why Netflix shares are down 10% </a>
 </div>
 <div className={styles.label1}>
 EDITORS PICK
 </div> 
 </div>

 <div className={styles.section1}> 
 <div className={styles.epimg1}> 
 <img src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-21.jpg" alt=""></img>
 </div>
 <div className={styles.desc}> 
 <a href="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-21.jpg" target="_self">6 Bots That Deliver Science and Serendipity on Twitter
 </a>
 </div>
 <div className={styles.label1}>
 APPS
 </div>
 </div>
</div>
        </div>
        <div className={styles.secondsection}> 
        <div className={styles.image}></div>
        <div className={styles.text}> 
        <div className={styles.text1}>
         <h2 className={styles.h2}>APPS</h2>
        <Link href="/api/hello" className={styles.link1}>Broke a Glass? Someday You Might 3-D-Print a New One </Link>
        </div>
        <div className={styles.text1}>
         <h2 className={styles.h2}>GAMES</h2>
        <Link href="/api/hello" className={styles.link1}>This Is a Giant Shipworm. You May Wish It Had Stayed In Its Tube.</Link>
        </div>
        <div className={styles.text1}>
         <h2 className={styles.h2}>EDITORS PICK</h2>
        <Link href="blogs/running-macos-and-windows-10-on-the-same-computer" className={styles.link1}>For Families of Teens at Microsoft Surface </Link>
        </div>
        <div className={styles.text1}>
         <h2 className={styles.h2}>EDITORS PICK</h2>
        <Link href="/api/hello" className={styles.link1}>Why Netflix shares are down 10% </Link>
        </div>
        </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default BLogs;