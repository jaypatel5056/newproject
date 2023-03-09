import React from 'react'
import styles from "../styles/dashboardfirst.module.scss"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import {FaTasks} from "react-icons/fa"
import {FiMail} from "react-icons/fi"
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
const dashboradfirst = () => {
  return (
    <div className={styles.first}>
      
    <div className={styles.navbar}>
<Navbar bg="light" variant="light">
  <Container className='justify-content-end'>
    {/* <Navbar.Brand>
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
    </Navbar.Brand> */}
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <div className={styles.section2}>
      <Nav>
        <Nav.Link href="#home" className={styles.hello}>
        <AiOutlineBell/>
        </Nav.Link>
        <Nav.Link href="#features"><FaTasks/></Nav.Link>
        <Nav.Link href="#pricing"><FiMail/></Nav.Link>
        <Nav.Link href="login/login">
        {/* <Link */}
        {/* href="blogs/broke-a-glass-someday-you-might-3-d-print-a-newone" */}
        {/* className={styles.link1} */}
      {/* // ></Link> */}
      <AiOutlineUser/></Nav.Link>
    
        <Nav.Link href="login/signup">Signup</Nav.Link>

        <Nav.Link href="login/signout" >Signout</Nav.Link>
      </Nav>
    </div>
  </Container>
</Navbar>
</div>
    <h1 className={styles.h1}>Dashboard</h1>



</div>
  )
}

export default dashboradfirst