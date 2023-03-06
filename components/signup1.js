import React, { useState ,useRef} from 'react';
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
import axios from '../lib/api';

function App() {

//   const [justifyActive, setJustifyActive] = useState('tab1');
// const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: '',
//     password: '',
//   });

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
  
      axios.post('http://localhost/wordpress/wp-json/api/v2/signup', data,{
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        }
      })
        .then((response) => {
          console.log(response);
        //   setFormData({
        //     firstName: '',
        //     lastName: '',
        //     username: '',
        //     email: '',
        //     password: '',
        //   });
        //   window.location.href = '/login/login';
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    // ...
  
  

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column wp-50">
         <h3 className='mb-5'>Sign Up</h3>
        {/* <div className="text-center mb-3"> */}
        {/* <MDBContainer className="p-3 my-5 d-flex flex-column wp-50"> */}
  {/* <h3>Sign Up</h3> */}

  <form onSubmit={handleSubmit}>
    <MDBInput wrapperClass='mb-4' label='FirstName' id='firstName' type='text' ref={firstNameRef} required />
    <MDBInput wrapperClass='mb-4' label='LastName' id='lastName' type='text' ref={lastNameRef} required />
    <MDBInput wrapperClass='mb-4' label='Username' id='username' type='text' ref={usernameRef} required />
    <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' ref={emailRef} required />
    <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' ref={passwordRef} required />

    <MDBBtn className="mb-4 w-100" type="submit">Sign up</MDBBtn>
  </form>
{/* </MDBContainer> */}

          {/* </div> */}

          {/* <MDBInput wrapperClass='mb-4' label='FirstName' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='LastName' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
     */}

    </MDBContainer>
    // <MDBContainer className="p-3 my-5 d-flex flex-column wp-50">

    //   <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
    //     <MDBTabsItem>
    //       <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
    //         Login
    //       </MDBTabsLink>
    //     </MDBTabsItem>
    //     <MDBTabsItem>
    //       <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
    //         Register
    //       </MDBTabsLink>
    //     </MDBTabsItem>
    //   </MDBTabs>

    //   <MDBTabsContent>

    //     <MDBTabsPane show={justifyActive === 'tab1'}>

    //       <div className="text-center mb-3">
    //         <p>Sign in with:</p>

    //         <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
    //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
    //             <MDBIcon fab icon='facebook-f' size="sm"/>
    //           </MDBBtn>

    //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
    //             <MDBIcon fab icon='twitter' size="sm"/>
    //           </MDBBtn>

    //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
    //             <MDBIcon fab icon='google' size="sm"/>
    //           </MDBBtn>

    //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
    //             <MDBIcon fab icon='github' size="sm"/>
    //           </MDBBtn>
    //         </div>

    //         <p className="text-center mt-3">or:</p>
    //       </div>

    //       <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
    //       <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

    //       <div className="d-flex justify-content-between mx-4 mb-4">
    //         <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
    //         <a href="!#">Forgot password?</a>
    //       </div>

    //       <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
    //       <p className="text-center">Not a member? <a href="#!">Register</a></p>

    //     </MDBTabsPane>

    //     <MDBTabsPane show={justifyActive === 'tab2'}>

        //   <div className="text-center mb-3">
        //     <p>Sign un with:</p>

        //     <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
        //       <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        //         <MDBIcon fab icon='facebook-f' size="sm"/>
        //       </MDBBtn>

        //       <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        //         <MDBIcon fab icon='twitter' size="sm"/>
        //       </MDBBtn>

        //       <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        //         <MDBIcon fab icon='google' size="sm"/>
        //       </MDBBtn>

        //       <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        //         <MDBIcon fab icon='github' size="sm"/>
        //       </MDBBtn>
        //     </div>

        //     <p className="text-center mt-3">or:</p>
        //   </div>

        //   <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
        //   <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
        //   <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
        //   <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

        //   <div className='d-flex justify-content-center mb-4'>
        //     <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
        //   </div>

        //   <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

    //     </MDBTabsPane>

    //   </MDBTabsContent>

    // </MDBContainer>
  );
}

export default App;