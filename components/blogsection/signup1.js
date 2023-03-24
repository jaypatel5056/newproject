import React from 'react'
import styles from "../../styles/blog/signup1.module.scss"
import {useRef} from "react"
import {
    MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import {useState} from "react"

import ClipLoader from "react-spinners/ClipLoader"
import {useRouter} from 'next/router'
import Link from 'next/link'
import axios from "axios"
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import PacmanLoader from 'react-spinners/PacmanLoader'
import DotLoader from 'react-spinners/DotLoader';
  

const login1 = () => {
    const[loading,setLoading]=useState(false)

        const firstNameRef = useRef();
        const lastNameRef = useRef();
        const usernameRef = useRef();
        const emailRef = useRef();
        const passwordRef = useRef(); 
      
       const handleSubmit = (e) => {
          e.preventDefault();
      
          const data = {
            firstname: firstNameRef.current.value,
            lastname: lastNameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
          };
          console.log(data);
    
          setLoading(true);
         axios.post('https://testapivai.000webhostapp.com/wp-json/api/v2/signup', data,
          {
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
          }
          )
            .then((response) => {
              console.log(response);
                axios.post('/api/regismail', JSON.stringify(data), {
                  headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  } 
                }).then((response) => {
                  console.log(response);
                  console.log('Response revevied');
                  if (response.status === 200) {
                    console.log('Response succeeded!')
                  }   
                }).catch((error) => {
                  console.error(error);
                });
                
                // console.log('Response revevied');
                // if (respone.status === 200) {
                //   console.log('Response succeeded!')
                //   setSubmitted(true)
                //   setName('')
                //   setEmail('')
                // }   
              }
            )
            .catch((error) => {
              console.log(error);
            })
            .finally(()=>{
              setLoading(false)
            }); 
        };

  return (  
    loading ? ( 
      <div style={{display:'flex',flexDirection:"column",gap:"10px",justifyContent:'center',alignItems:'center',height:'70vh'}}>
    <DotLoader color="#805aed" size={50} loading={loading} className="mb-50"/>
    <h5>Setting Up...</h5>
      </div>
  //   <div className={styles.main}>
  //   <div className={styles.content}>
  //   <ClimbingBoxLoader color="#805aed" size={30} loading={loading} className="mb-50"/>
  //   {/* <HashLoader size={80} color={"805aed"} className="mb-20" /> */}
  //   <p>Setting up...</p>
  //   {/* <p>You will be redirected in 3 seconds...</p> */}
  //   </div>
  // </div>
    
    ) :(
    <div className={styles.full}>
        
        <div className={`${styles.rectangle}`}>
        <h3 className={styles.h3}>Sign Up</h3>

         <form onSubmit={handleSubmit} className={styles.form}>
         <label for="firstName" class={styles.label}>FirstName</label>
         {/* <input type="text" id="firstName" name="username" class={styles.labelinput} required=""/> */}
         <MDBInput wrapperClass="mb-4" id="firstName" type="username" ref={firstNameRef} required/>

         <label for="lastName" class={styles.label}>LastName*</label>
        {/* <input type="text" placeholder="Enter your lastName" id="lastName" name="password" class={styles.labelinput}  required=""/> */}
        <MDBInput wrapperClass="mb-4" id="firstName" type="username" ref={lastNameRef} required/>

        <label for="userName" class={styles.label}>Username *</label>
         {/* <input type="text" placeholder="Enter your Username" id="userName" name="username" class={styles.labelinput} required=""/> */}
         <MDBInput wrapperClass="mb-4" id="firstName" type="username" ref={usernameRef} required/>

         <label for="email" class={styles.label}>Email *</label>
         {/* <input type="email" placeholder="Enter your email" id="email" name="username" class={styles.labelinput} required=""/> */}
         <MDBInput wrapperClass="mb-4" id="firstName" type="username" ref={emailRef} required/>
         <label for="password" class={styles.label}>Password *</label>
         {/* <input type="password" placeholder="Enter your password" id="password" name="username" class={styles.labelinput} required=""/> */}
         <MDBInput wrapperClass="mb-4" id="firstName" type="username" ref={passwordRef} required/>
            <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
        <div class={`mt-20 ${styles.submitbtn}`}>
          {/* <a href="#" className={styles.a}>Login</a>         */}
          <input type="submit" value="Submit" className={`${styles.input1}`}/>
         </div>
        </form> 
        </div>
        
        </div>
    )
  
  )
}

export default login1