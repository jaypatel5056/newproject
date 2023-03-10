import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3Nzc1ODI1NSwiZXhwIjoxODM1NDM4MjU1fQ.kiT3VZAx2yNUg6k10lW-Ez77RFnI4KxKa6Ajb3mSkds";
  const token1='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3ODM0MzYzNiwiZXhwIjoxODM2MDIzNjM2fQ.5f6q0jPv6NlGYoxlwuM-GOS-mS1A8AQ3OjIuHMMZ9fE'  
// import Cookies from 'js-cookie';

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3Nzc1ODI1NSwiZXhwIjoxODM1NDM4MjU1fQ.kiT3VZAx2yNUg6k10lW-Ez77RFnI4KxKa6Ajb3mSkds';
// Cookies.set('token', token, { expires: 7 });

// const api = axios.create({
//   baseURL: 'http://localhost/wordpress/wp-json/wp/v2/',
// });

// api.interceptors.request.use(config => {
//   const token = Cookies.get('token');
//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//     console.log('in');
//   }

//   return config;

// });

// export default api;

const saveData = async (url, data, method = "POST") => {
  let config = {
    method: method,
    data: data,
    url: url,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token1}`,
    },
  };

  return axios(config);
};

const getData = async (url, data, method = "GET") => {
  let config = {
    method: method,
    data: data,
    url: url,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token1}`,
    },
  };

  return axios(config);
};

const axiosRequest = {  
  saveData,
  getData,
};

export default axiosRequest;
