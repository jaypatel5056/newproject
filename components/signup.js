import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
// import axios from "../lib/api"
import axios from "axios"

const onSubmit = async (e) => {
  console.log('hello');
  // const [isLoggedIn,setIsLoggedIn]=useState(false);
    e.preventDefault();
    const username = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    console.log(username);
    try {
      const response = await axios.post('http://localhost/wordpress/wp-json/api/v2/signin', { username, password },
      {
        headers:{  'Content-Type':'application/x-www-form-urlencoded'}
      }
      );
      console.log(response);
      console.log(response.data.status);
      if (response.data.status==true) {
        localStorage.setItem('username', response.data.data.user_login);
        window.location.href = '/blogs';
        setIsLoggedIn(true);
        console.log("success");
      }
    } catch (error) {
      console.error(error);
    }
  };
  


function App() {
  return (

    <MDBContainer className="p-3 my-5 d-flex flex-column wp-50">
        
        {/* <MDBContainer className="p-3 my-5 d-flex flex-column wp-50"> */}
        <h2 className="mb-50">Sign In</h2>
          <form onSubmit={onSubmit}>
          <MDBInput wrapperClass="mb-4" label="Email address" id="email" type="username" />
          <MDBInput wrapperClass="mb-4" label="Password" id="password" type="password" />
  
          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
            <a href="!#">Forgot password?</a>
          </div>
  
          <MDBBtn className="mb-4">Sign in</MDBBtn>
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
  );
}

export default App;