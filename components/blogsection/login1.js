import React from 'react'
import styles from "../../styles/blog/login1.module.scss"
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
  }
  from 'mdb-react-ui-kit';
  import OTPsection from "../blogsection/otpsection"
  import {useState} from "react"
import ClipLoader from "react-spinners/ClipLoader"
import {useRouter} from 'next/router'
import Link from 'next/link'
import axios from "axios"
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import PacmanLoader from 'react-spinners/PacmanLoader'
  

const login1 = () => {
    const [loading,setLoading]= useState(false);
    const [otp, setOTP] = useState('');
    const [otp1,setOtp1]=useState(false)
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [email,setEmail]=useState('');
    const [userId,setUserId]=useState();
    const [username,setUserName]=useState('')

    const router = useRouter();
  
   const onSubmit = async (e) => {
      e.preventDefault();
      const username = e.target.elements.username.value;
      const password = e.target.elements.password.value;
      console.log(username)
      console.log(password)
      setLoading(true);
      try {
         const response = await axios.post('https://testapivai.000webhostapp.com/wp-json/api/v2/signin', { username, password },
        {
          headers:{'Content-Type':'application/x-www-form-urlencoded'}
        }
        );
        console.log(response);
        console.log(response.data.status);
        if (response.data.status==true) {
          console.log('user details ');
          console.log(response.data);
          // clg(response.data)
          // localStorage.setItem('username', response.data.data.user_login);
          console.log(response.data.data.ID);
          // localStorage.setItem('userId',response.data.data.ID);
          setUserId(response.data.data.ID);

          setUserName(response.data.data.user_login);
          console.log('ama');
          const email=response.data.data.user_email;  
          setEmail(email);
          const response1= await axios.post('/api/sendOtp',{email});
          console.log(response1); 
          // sendOtp(email);
          setOtp1(true);
          // router.push('/blogs')
          setIsLoggedIn(true);
          console.log("success");
        }
        else{
          alert("Wrong username or password! Please try again")
        }
      } catch (error) {
        console.error(error);      
      } finally {
        setLoading(false)
      }
    };

  return (  
   
    loading ? ( 
      <div style={{display:'flex',flexDirection:"column",gap:"10px",justifyContent:'center',alignItems:'center',height:'70vh'}}>
    <PacmanLoader color="#805aed" size={30} loading={loading} className="mb-50"/>
    <h5>Logging In</h5>

      </div>
  //   <div className={styles.main}>
  //   <div className={styles.content}>
  //   <ClimbingBoxLoader color="#805aed" size={30} loading={loading} className="mb-50"/>
  //   {/* <HashLoader size={80} color={"805aed"} className="mb-20" /> */}
  //   <p>Setting up...</p>
  //   {/* <p>You will be redirected in 3 seconds...</p> */}
  //   </div>
  // </div>
    
    ) : 
    ( otp1 ? 
   (
      <div className={styles.full}>
        
      <div className={styles.rectangle}>

      <OTPsection email={email} username={username} userid={userId}/>
      </div>
      </div>
      
      
      )
    : (
      <>
    
    <div className={styles.full}>
        
        <div className={styles.rectangle}>
        <h3 className={styles.h3}>Welcome Back</h3>

        {/* <div class="u-form-group u-form-name">
            <label for="username-a30d" class="u-label">Username *</label>
            <input type="text" placeholder="Enter your Username" id="username-a30d" name="username" class="u-grey-5 u-input u-input-rectangle u-input-1" required=""/>
        </div>
        <div class="u-form-group u-form-password">
                  <label for="password-a30d" class="u-label">Password *</label>
                  <input type="text" placeholder="Enter your Password" id="password-a30d" name="password" class="u-grey-5 u-input u-input-rectangle u-input-2" required=""/>
                </div>  */}
            
         <form onSubmit={onSubmit} className={styles.form}>
          
         <label for="username" class={styles.label}>Username *</label>
         <input type="text" placeholder="Enter your Username" id="username" name="username" class={styles.labelinput} required=""/>

         <label for="password" class={styles.label}>Password *</label>
        <input type="password" placeholder="Enter your Password" id="password" name="password" class={styles.labelinput}  required=""/>
            <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
        <div class={styles.submitbtn}>
          {/* <a href="#" className={styles.a}>Login</a>         */}
          <input type="submit" value="Submit" className={styles.input1}/>
         </div>
        </form> 
        <Link  href="#" className={styles.extra}>Forgot password?</Link>
        <Link href="/signup" className={styles.extra}>Don't have an account?</Link>
        </div>
        
        </div>

        
        
        </>
    )
    )
  
  )
}

export default login1