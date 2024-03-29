
import React from 'react'
import styles from "../../styles/blog/navbar4.module.scss"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";    
import { GiHamburgerMenu } from 'react-icons/gi';

const navbar4 = () => {
    const [isLoggedIn1,setIsLoggedIn1]=useState(false);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('username');
    if (isLoggedIn) {
     setIsLoggedIn1(true);
    } else {
      setIsLoggedIn1(false);
    }
  }, []);

  return (
    <div className={styles.navbar}>
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand className={`mr-auto ${styles.navbarimage}`}>
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggler}>
        <GiHamburgerMenu />
      </Navbar.Toggle>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        {/* <div className={styles.section2}> */}
        <Navbar.Collapse id="basic-navbar-nav w-100">
          <Nav className={`ml-auto ${styles.linkssection}`}>
            {/* <Nav.Link href="#home" className={` nav-link ${styles.text}`}>TECHNOLOGY</Nav.Link> */}
            {/* <Nav.Link href="/blogs" className={`nav-link ${styles.text}`}>Home</Nav.Link> */}
            <Link href="/blogs" className={` ${styles.text}`}>Home</Link>

            {/* </Nav.Link> */}
            <Link href="/allposts1" className={styles.text}>Features</Link>
            
            {/* <Nav.Link href="#features" className={styles.text}>Features</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            {/* <Nav.Link href="/allposts1" className={styles.text}> */}
            <Link href="/allposts1" className={styles.text}>All Posts</Link>

              {/* </Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
           { !isLoggedIn1 && 
          //  <Nav.Link href="login/login" className={styles.text}>
          <Link 
            href="/login"
           className={styles.text}
           >Login</Link> 
          /* Signin</Nav.Link> */
          }
          { !isLoggedIn1 &&
            // <Nav.Link  className={styles.text}>
              <Link href="/signup" className={styles.text}>Signup</Link>
            // </Nav.Link>
            }
             { isLoggedIn1 &&
             <Link href="/login/signout" className={styles.text}>
              {/* <Nav.Link className={styles.text}>Signout</Nav.Link> */}
              Signout
             </Link>
              }
            {
              isLoggedIn1 &&
              
              <Link href="/userdashboard" className={styles.text}>User Dashboard</Link>
              //   //  isLoggedIn1 &&
          //   {/* //  <Nav.Link href="/userdashboard" className={styles.text}> */}
          //   {/* <Link */}
          //   {/* href="blogs/broke-a-glass-someday-you-might-3-d-print-a-newone" */}
          //   {/* className={styles.link1} */}
          // {/* // ></Link> */}
          // User Dashboard</Nav.Link>
            }
          </Nav>
          </Navbar.Collapse>
        {/* </div> */}
      </Container>
    </Navbar>
    </div>
  )
}

export default navbar4
