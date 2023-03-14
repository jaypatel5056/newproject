import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
}
from 'mdb-react-ui-kit';
import {useState} from "react"
import ClipLoader from "react-spinners/ClipLoader"
import {useRouter} from 'next/router'
import axios from "axios"
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

const App=()=>{
  const [loading,setLoading]= useState(false);
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  const router =useRouter();

 const onSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.elements.email.value;
    const password = e.target.elements.password.value;
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
        localStorage.setItem('username', response.data.data.user_login);
        router.push('/blogs')
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
    <ClimbingBoxLoader color="#805aed" size={30} loading={loading} className="mb-50"/>
    <h5>Logging In</h5>

      </div>
    
    ) : ( <MDBContainer className="p-3 my-5 d-flex flex-column wp-50 wp-sm-90 wp-lg-90">
        
        <h2 className="mb-50">Sign In</h2>
          <form onSubmit={onSubmit}>
          <MDBInput wrapperClass="mb-4" label="Username" id="email" type="username" />
          <MDBInput wrapperClass="mb-4" label="Password" id="password" type="password" />
  
          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
            <a href="!#">Forgot password?</a>
          </div>
  
          <MDBBtn className="mb-4">Sign in</MDBBtn>
          {/* {loading ? <ClipLoader color="#36d7b7" /> : window.location.href = '/blogs' } */}
        <ClipLoader color="#36d7b7" size={100} loading={loading}/> 
          {/* {loading && <ClipLoader color="#36d7b7" /> } */}
          {/* <ClipLoader color="#36d7b7" /> */}
          {/* {loading && <div>Loading...</div>} */}
        </form>
 

      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or sign up with:</p>

        {/* <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div> */}
      </div>

    </MDBContainer> 
    )
  );
}

export default App;