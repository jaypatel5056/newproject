import {React,useState} from 'react'
import styles from "../../styles/blog/blogsForm.module.scss"
import { Accordion, Row, Col } from "react-bootstrap";
import dynamic from "next/dynamic";
import axios from "axios";

const blogsForm = ({closeModal}) => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    
    const [title,setTitle]=useState("");
    const [content, setContent] = useState("");
    const [email, setEmail] = useState("");
  
    const [categories, setCategories] = useState(""); 
    const [message, setMessage] = useState("");
    const [inputData, setInputData] = useState({});
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        closeModal(); 
        let data={ id,title,content,categories }
        setInputData(data);
        console.log(JSON.stringify(data));
        try{
        const respone=axios.post('/api/editpost',JSON.stringify(data),{
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        } 
      }
      )
        console.log('Response revevied');
        if (respone.status === 200) {
          console.log('Post updated successfully!')
          setSubmitted(true)
          setId('')
          setTitle('')
          setContent('')
          setEmail('')
        }   
      }
        catch(error){
        console.error(error)
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
            {/* <h2> Get in tou​ch!</h2>
             */}
             <h2>Update/New Post</h2>
          </div>
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                className={styles.name}
                onChange={(e) => {
                  setId(e.target.value);
                  console.log(name);
                }}
                placeholder="Enter the Post ID"
                id="name-2ee9"
                name="postId"
                value={id}
                required=""
              />
              <input
                type="text"
                className={styles.email}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Enter the new or existing Post Title"
                id="name-2ee9"
                name="postTitle"
                value={title}
                required=""
              />
              <input
                type="text"
                className={styles.message}
                onChange={(e) => {
                  setContent(e.target.value);
                  console.log(message);
                }}
                // placeholder="Enter your message"
                placeholder="Enter the new content of the post"
                id="name-2ee9"
                name="name"
                value={content}
                required=""
              />
              <input
                type="text"
                className={styles.email}
                onChange={(e) => {
                  setCategories(e.target.value);
                }}
                placeholder="Enter the tags associated with the post "
                id="name-2ee9"
                name="name"
                value={categories}
                required=""
              />
              {/* <input
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
              /> */}
              
              <button className={styles.button} >SUBMIT</button>
            </form>
          </div>
        </div>
  )
}

export default blogsForm