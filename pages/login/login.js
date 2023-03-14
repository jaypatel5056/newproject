import React from 'react'
import styles from "../../styles/login.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Nav1 from "../../components/blogsection/navbarComponent"
// import New from "@/components/blogs-firstcomponent";

import New from "@/components/blogsection/signinComponent";
const login = () => {
  return (
    <>
    <div className='wp-100'>
      <Nav1/>
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
              <div className={styles.section2}>
                <Nav className="me-auto">
                  <Nav.Link href="/blogs" className={styles.hello}>
                    Home
                  </Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <Nav.Link href="/login/signup">Signup</Nav.Link>
                </Nav>
              </div>
            </Container>
          </Navbar>
        </div> */}
    <New/>
    </div>
    {/* <div>login</div> */}
    </>
  )
}

export default login