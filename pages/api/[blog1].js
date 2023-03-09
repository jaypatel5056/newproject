
// import axios from "../../lib/api2";
import axios from "axios";
import axiosRequest from "@/lib/api";
// let config = {
  // import { useRouter } from 'next/router'
//   method: "POST",
//   data: {},
//   url: `http://localhost/wordpress/wp-json/wp/v2/`,
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//     Authorization:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3ODA3OTI5NiwiZXhwIjoxODM1NzU5Mjk2fQ.aSNu0EeLSsUxCvWhZ_UtwB3vnT9TFgqsGL9YhsR765g",
//   },
// };

// axios(config)
//   .then((response) => {
//     let values = response.data;
//   })
//   .catch((e) => {
//     console.log("error", JSON.stringify(e));
//   });
// export default config;

export default async (req, res) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3Nzc1ODI1NSwiZXhwIjoxODM1NDM4MjU1fQ.kiT3VZAx2yNUg6k10lW-Ez77RFnI4KxKa6Ajb3mSkds';
  const value=req.query.blog1;
  console.log('hilmk'); 
  console.log(value);
  
  try {
    // const response = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/posts/${value}`,
    //   {
    //     headers:{  
    //       Authorization: `Bearer ${token}`
    //     }
    //   }
    // );

    let response = await axiosRequest.getData(
      `https://testapivai.000webhostapp.com/wp-json/wp/v2/posts/${value}`
    );

    console.log(response);
    const posts = response.data;
    res.status(200).json(posts);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
