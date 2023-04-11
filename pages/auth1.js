import { useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';

export const withAuth = () => {
  const Authenticate = (props) => {
    useEffect(() => {
      const checkAuth = async () => {
        try {
          let id=localStorage.getItem('userId');
          console.log(id);
          const response = await axios.get('/api/auth');
          if (!response.data.user || response.data.user.role !== 'admin') {
            Router.push('/login');
          }
        } catch (error) {
          console.error(error);
          Router.push('/login');
        }
      };
      checkAuth();
    }, []);

  };

  return Authenticate;
};
