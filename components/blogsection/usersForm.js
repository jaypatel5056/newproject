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

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            firstName,lastName,userName,email,password
          };
        setInputData(data);
        console.log(JSON.stringify(data));
        try{
        const respone=axios.post('/api/adduser',JSON.stringify(data),{
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
             <h2>Add New User</h2>
          </div>
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className={styles.name}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  console.log(name);
                }}
                placeholder="Enter the firstname of the user"
                id="name-2ee9"
                name="firstname"
                value={firstName}
                required=""
              />
              <input
                type="text"
                className={styles.email}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="Enter the lastname of the user"
                id="name-2ee9"
                name="lastName"
                value={lastName}
                required=""
              />
              <input
                type="text"
                className={styles.message}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter the email of the user"
                id="name-2ee9"
                name="email"
                value={email}
                required=""
              />
              <input
                type="text"
                className={styles.email}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                placeholder="Enter the username"
                id="name-2ee9"
                name="userName"
                value={userName}
                required=""
              />
              <input
                type="text"
                className={styles.email}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter the password  "
                id="name-2ee9"
                name="password"
                value={password}
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