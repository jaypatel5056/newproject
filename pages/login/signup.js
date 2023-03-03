import React from 'react'
import styles from "../../styles/login.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
// import New from "@/components/blogs-firstcomponent";

import New from "@/components/signup1";
const signup = () => {
  return (
    <>
    <div className='wp-100'>
    <div className={styles.navbar}>
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
              <div className={styles.section2}>
                <Nav className="me-auto">
                  <Nav.Link href="#home" className={styles.hello}>
                    Home
                  </Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <Nav.Link href="login">
                  {/* <Link */}
                  {/* href="blogs/broke-a-glass-someday-you-might-3-d-print-a-newone" */}
                  {/* className={styles.link1} */}
                {/* // ></Link> */}
                Signin</Nav.Link>
                  {/* <Nav.Link href="#signup">Signup</Nav.Link> */}
                </Nav>
              </div>
            </Container>
          </Navbar>
        </div>
    <New/>
    </div>
    {/* <div>login</div> */}
    </>
  )
}

export default signup