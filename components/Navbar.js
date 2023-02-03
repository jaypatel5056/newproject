import React from 'react'
import styles from '../styles/Navbar.module.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Navbar1 = () => {
  return (
    <div className={styles.navbar}>
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand>
      <img width="168" height="40" src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/site-logo.svg" class={styles.logo} alt="Tech News" decoding="async"/>
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
  )
}

export default Navbar1