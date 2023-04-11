import { useEffect } from 'react';
import Router from 'next/router';
import {useState} from 'react'
import axios from 'axios';

export const withAuth = (WrappedComponent) => {
  const Authenticate = (props) => {
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
      const checkAuth = async () => {
        try {
          let id=localStorage.getItem('userId');
          console.log('in component');
          console.log(id);
          const response = await axios.post('/api/auth',{id},
          { headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json", 
          }}
          );
              // if (!response.data.roles==='admin') {
              //   Router.push('/login');
              // }
              // if (!response.data.roles.includes('administrator')) {
              //   Router.push('/login');
              // }
          if (response.data.roles.includes('administrator')) {
            setIsLoading(false);
          } else {
            Router.push('/login');
          }
          } catch (error) {
            console.error(error);
            Router.push('/login');
          }
      };
      checkAuth();
    }, []);

    if (isLoading) {
      // Render a loading animation here
      return <div>Loading...</div>;
    }
    
    return <WrappedComponent {...props} />;
  };

  return Authenticate;
};
