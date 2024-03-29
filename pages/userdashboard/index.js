import React from 'react'
// import styles from "../styles/dashboard.module.scss"
import styles from "../../styles/page/dashboard.module.scss"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import {FaTasks} from "react-icons/fa"
import {FiMail} from "react-icons/fi"
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
// import First from "../components/dashboradfirst"
import Left1 from "../../components/blogsection/sideBarMenuComponent"
// import Left2 from "../../components/test/leftTest"
import SidebarMenu from '../../components/blogsection/leftMenuComponent';
import New from "../../components/test/new"
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { withAuth } from '@/auth/auth1';

const userdashboard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className={styles.wrap}>
    {/* <New/> */}
    <div className={`w-280 ${styles.section1}`}>

    <Left1/>
    {/* <Left2/> */}
    </div>
    {/* <SidebarMenu/> */}

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
        
            {/* <Nav.Link href="login/signup">Signup</Nav.Link> */}

            <Nav.Link href="login/signout" >Signout</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
    </div>
        <h1 className={styles.h1}>Dashboard</h1>
    </div>
    </div>
    </>
  )
}

export default withAuth(userdashboard);