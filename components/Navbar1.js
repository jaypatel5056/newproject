import React from 'react'
import styles from '../styles/Navbar1.module.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar1 = () => {
  return (
    <div className={styles.navbar}>
    <Navbar bg="light" variant="light" expand="lg">
      <Container className="my-0 ">
      <Navbar.Brand href='/blogs' className="">
      <img width="200" height="200" src="/unnamed.jpg" className={` ${styles.logo}`} alt="Tech News" decoding="async"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggler}>
        <GiHamburgerMenu />
      </Navbar.Toggle>

      {/* <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">   
      <GiHamburgerMenu/> 
        </button> */}
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Navbar.Collapse id="basic-navbar-nav w-100">
        <Nav className={`mr-auto mt-10 ${styles.nav1}`}>
          <Nav.Link href="#home" className={` nav-link ${styles.text}`}>TECHNOLOGY</Nav.Link>
          <Nav.Link href="#link" className={` nav-link ${styles.text}`}>SOFTWARE</Nav.Link>
          <Nav.Link href="#link" className={` nav-link ${styles.text}`}>GAMES</Nav.Link>
          <Nav.Link href="#link" className={` nav-link ${styles.text}`}>PODCASTS</Nav.Link>
          <Nav.Link href="#link" className={` nav-link ${styles.text}`}>APPS</Nav.Link>
          <Nav.Link href="#link" className={` nav-link ${styles.text}`}>GADGET</Nav.Link>
        </Nav>
        <Nav className={` d-flex justify-content-around m-0 ml-20 ${styles.nav}`}>
        <Nav.Link href="#link" className={` nav-link mr-auto ${styles.text1}`}>Subscribe</Nav.Link>
        <Nav.Link href="#link" className={` nav-link ml -auto ${styles.text1}`}>Signin</Nav.Link>
          </Nav>
      </Navbar.Collapse>

          {/* <Nav className="collapse navbar-collapse" id="navbarSupportedContent1">
            
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          <a className={` nav-link ${styles.text}`} href="#">TECHNOLOGY</a>
        </li>
        <li class="nav-item">
          <a className={`nav-link ${styles.text}`}  href="#">SOFTWARE</a>
        </li>
        <li class="nav-item">
          <a className={` nav-link ${styles.text}`}  href="#">APPS</a>
        </li>
        <li class="nav-item">
          <a className={` nav-link ${styles.text}`}  href="#">GAMES</a>
        </li>
        <li class="nav-item">
          <a className={` nav-link ${styles.text}`}  href="#">PODCASTS
          </a>
        </li>
        <li class="nav-item">
          <a className={` nav-link ${styles.text}`} href="#">GADGET</a>
        </li>
      </ul>

          </Nav> */}
      </Container>
    </Navbar>
  </div>
  )
}

export default Navbar1