import React, { useEffect } from 'react';

const Signout = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/blogs'; 
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('username');
  }

  return (
    <div>
      <p>You have successfully logged out.</p>
      <p>You will be redirected in 3 seconds...</p>
    </div>
  );
}

export default Signout;
