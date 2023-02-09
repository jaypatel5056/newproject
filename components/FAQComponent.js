import React, { use, useEffect, useState } from 'react'
import styles from '../styles/FAQ.module.scss'
 import { IoIosArrowDropdown } from 'react-icons/Io';
 import {Accordion , Row, Col} from 'react-bootstrap';
 import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);
import { motion } from "framer-motion"

import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { GiVikingLonghouse } from 'react-icons/Gi';
 
const FAQ = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");
  const[inputData,setInputData]=useState({})
  // useEffect(()=>{
  //   console.log('hello');
  //  console.log(name)
  // },[inputData])
  
  
  const[globalToggle,setglobalToggle]=useState(false);
    const [toggle1,setToggle1]=useState(false);
    const [data,setData]=useState({})
    const handletoggle1=()=>{
        setToggle1(!toggle1)
        setglobalToggle(!globalToggle);
        setHighlighted(!highlighted);
       
    }
    const [toggle2,setToggle2]=useState(false);
    const handletoggle2=()=>{
        setToggle2(!toggle2)
        setglobalToggle(!globalToggle)
    }
    const [toggle3,setToggle3]=useState(false);
    const handletoggle3=()=>{
        setToggle3(!toggle3)
        setglobalToggle(!globalToggle)
    }
    const [highlighted, setHighlighted] = useState(false);
  
    const handleToggletext=()=>{
  setHighlighted(!highlighted);
}
    const handleSubmit=async (e)=>{
      e.preventDefault();
      setInputData({name:name,email,message})
     
    
     if(inputData){
      console.log("from ")
      console.log(inputData)
       console.log(new1)
       console.log(new2)
      const response=await fetch('/api/message',{
        method: 'POST',  
        body: JSON.stringify({name,email,message})

      })
    }

    }
  return (
    <div className={styles.first}>
    <div className={styles.second}> 
    <div className={styles.formsection}>
        <div className={styles.h21}>
        <h2 > Get in tou​ch!</h2>
    </div>
        <div className={styles.form}>
         <form onSubmit={handleSubmit}>
         <input type="text" className={styles.name} onChange={(e)=>{setName(e.target.value);console.log(name)}} placeholder="Enter your Name" id="name-2ee9" name="name" value={name}  required=""/>
         <input type="text" className={styles.email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter a valid email address " id="name-2ee9" name="name" value={email} required=""/>
         <input type="text" className={styles.message} onChange={(e)=>{setMessage(e?.target?.value);console.log(message)}} placeholder="Enter your message" id="name-2ee9" name="name" value={message} required=""/>
         <button className={styles.button}>SUBMIT</button>
       </form>
        </div>
    </div>
    <div className={styles.faq}>
    <h2 className={styles.h3}>Frequently asked Questions</h2>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Phasellus sed efficitur dolor?</Accordion.Header>
        <Accordion.Body>
        Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Quisque fringilla sit amet dolor?</Accordion.Header>
        <Accordion.Body>
        Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Aliquam et sem odio?</Accordion.Header>
        <Accordion.Body>
        Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    {/* <div className={styles.question}> 
    <div className={styles.question1} onClick={handletoggle1}>       
    <div><span className={`${styles.text} ${highlighted ? styles.texthighlighted : ""}`}>Phasellus sed efficitur dolor?</span></div>
    <div className={styles.image1}><img src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/e51bce325d125d4fb05d78b4/271210.png" className={styles.image1} alt="" /></div>
    </div>
    { toggle1 && globalToggle && <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>}
    </div> */}
    {/* <div className={styles.question}> 
    <div className={styles.question1} onClick={handletoggle2}>      
    <div><span className={styles.text}>Quisque fringilla sit amet dolor?</span></div>
    <div className={styles.image1}><img src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/e51bce325d125d4fb05d78b4/271210.png" className={styles.image1} alt="" /></div>
    </div>
    { toggle2 && globalToggle && <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>}
    </div>
    <div className={styles.question}> 
    <div className={styles.question1} onClick={handletoggle3}>      
    <div><span className={styles.text}>Aliquam et sem odio?</span></div>
    <div className={styles.image1}><img src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/e51bce325d125d4fb05d78b4/271210.png" className={styles.image1} alt="" /></div>
    </div>
    { toggle3 && globalToggle &&<p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>}
    </div> */}
    </div>
    </div>
    </div>
  )
}

export default FAQ