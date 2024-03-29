import React, { useEffect } from 'react';
import {useRouter} from "next/router"
import HashLoader from "react-spinners/HashLoader"
import styles from "../../styles/blog/signout.module.scss"

const Signout = () => {
  const router =useRouter();
  useEffect(() => {
   const timer=setTimeout(() => {
     router.push('/blogs');
   },3000)
   return () => clearTimeout(timer);
  },[])

  useEffect(() => {
    const timer = setTimeout(() => {
      // window.location.href = '/blogs'; 
      router.push('/blogs');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('username');
    localStorage.removeItem('userId')
    console.log(typeof localStorage);
  }

  return (
    <div className={styles.main}>
      <div className={styles.content}>
      <HashLoader size={80} color={"805aed"} className="mb-20" />
      <p>You have successfully logged out.</p>
      <p>You will be redirected in 3 seconds...</p>
      </div>
    </div>
  );
}

export default Signout;
