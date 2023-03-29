import {React,useState} from 'react'
import styles from "../../styles/blog/blogsForm.module.scss"
import { Accordion, Row, Col } from "react-bootstrap";
import dynamic from "next/dynamic";
import axios from "axios";

const blogsForm = () => {
    const [name, setName] = useState("");
    const [postId, setPostId] = useState("");
    
    const [postTitle,setPostTitle]=useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [inputData, setInputData] = useState({});
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let data={ name , email, message }
        setInputData({ name , email, message });
        console.log(JSON.stringify(data));
        try{
        const respone=axios.post('/api/contact',JSON.stringify(data),{
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        } 
      }
      )
        console.log('Response revevied');
        if (respone.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setName('')
          setEmail('')
        }   
      }
        catch(error){
    
        }
        
        console.log(data);
    
        if (inputData) {
    
          // console.log("from ");
          // console.log(inputData);
          // console.log(new1);
          // console.log(new2);
        //   const response = await fetch("/api/message", {
        //     method: "POST",
        //     body: JSON.stringify({ name, email, message }),
        //   });
        }
      };

  return (
    <div className={styles.formsection}>
          <div className={styles.h21}>
            <h2> Get in tou​ch!</h2>
          </div>
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                className={styles.name}
                onChange={(e) => {
                  setPostId(e.target.value);
                  console.log(name);
                }}
                placeholder="Enter the Post ID"
                id="name-2ee9"
                name="name"
                value={postId}
                required=""
              />
              <input
                type="text"
                className={styles.email}
                onChange={(e) => {
                  setPostTitle(e.target.value);
                }}
                placeholder="Enter the new or existing Post Title"
                id="name-2ee9"
                name="name"
                value={postTitle}
                required=""
              />
              <input
                type="text"
                className={styles.message}
                onChange={(e) => {
                  setMessage(e?.target?.value);
                  console.log(message);
                }}
                placeholder="Enter your message"
                id="name-2ee9"
                name="name"
                value={message}
                required=""
              />
              <input
                type="text"
                className={styles.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter a valid email address "
                id="name-2ee9"
                name="name"
                value={email}
                required=""
              />
              <input
                type="text"
                className={styles.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter a valid email address "
                id="name-2ee9"
                name="name"
                value={email}
                required=""
              />
              
              <button className={styles.button}>SUBMIT</button>
            </form>
          </div>
        </div>
  )
}

export default blogsForm