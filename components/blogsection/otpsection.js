import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import DotLoader from 'react-spinners/DotLoader';
import OtpInput from 'react-otp-input';


const VerifyOTP = ({email,username}) => {
  const [otp, setOtp] = useState('');
  const [otp1, setOTP1] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // const [email, setEmail] = useState('');
  const router = useRouter();


//   useEffect(async ()=>{
//     // const email1 = localStorage.getItem('username');
//     const fetchEmail=(async () => {
//       try {
//         const response = await axios.post('https://testapivai.000webhostapp.com/wp-json/api/v2/signin', { username, password },
//        {
//          headers:{'Content-Type':'application/x-www-form-urlencoded'}
//        }
//        );
      
//       setEmail(response.data.data_email);
//     }
//     catch(error){
//       console.error(error);
//     }
//     })
//     fetchEmail();
// },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
     
      const response = await axios.post(
        '/api/verifyOtp',
        { email, otp1 } ,{
          withCredentials:true,
          headers:{
            'Content-Type':'application/json'
          }
        }
       
        // ,
        // {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem('token')}`,
        //     'Content-Type': 'application/json',
        //   },
        // }
      );
      setLoading(false);
      console.log(response.status);
      if (response.status === 200) {
        console.log('OTP has been verified');
        router.push('/blogs');
        localStorage.setItem('username',username);
        //  localStorage.setItem('username', response.data.data.user_login);
        // Redirect to a success page or show a success message
      
      } else {
        console.log('Error verifying OTP');
        router.push('/hello');
        
      }
      // if (response.ok)
      // {
      //   router.push('/blogs');
      // } else {
      //   setError("not possible");
      // }
      // if (response.data.status === true)
      // {
      //   router.push('/blogs');
      // } else {
      //   setError(response.data.message);
      // }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
    
    ) : (
    <div>
      <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>.</span>}
      renderInput={(props) => <input {...props} />}
    />
    <h1>
      {otp}
      </h1>
      <h3>Enter OTP</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>OTP : </label>
          <input
            type='text'
            placeholder='Enter OTP'
            value={otp1}
            className="ml-30 mb-30 mt-30 p-2"
            onChange={(e) => setOTP1(e.target.value)}
            required
          />
        </div>
        <button type='submit' disabled={loading} className="pl-2 pr-2">
          {loading ? 'Loading...' : 'Verify OTP'}
        </button>
        
        {error && <p>{error}</p>}
      </form>
    </div>
    )
  );
};

export default VerifyOTP;
