
// import axios from "../../lib/api2";
import axios from "axios";

import axiosRequest from "@/lib/api";

export default async (req, res) => {
    console.log("abc1");
    console.log(req.query);
    console.log('the numbe rs');
    const {loadedPosts} =req.query;
    console.log(loadedPosts);
    const limit=5
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3Nzc1ODI1NSwiZXhwIjoxODM1NDM4MjU1fQ.kiT3VZAx2yNUg6k10lW-Ez77RFnI4KxKa6Ajb3mSkds';
//   const value=req.query.blog1;
//   console.log('hilmk'); 
//   console.log(value);
  try {
    // const response = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/posts/?offset=${loadedPosts}&per_page=${limit}`,
    //   {
    //     headers:{  
    //       Authorization: `Bearer ${token}`
    //     }
    //   }
    // );
    let responsee = await axiosRequest.getData(
      `https://testapivai.000webhostapp.com/wp-json/wp/v2/posts/?offset=${loadedPosts}&per_page=${limit}`
    );
   const response = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/posts/?offset=${loadedPosts}&per_page=${limit}`,
      {
        headers:{  
          Authorization: `Bearer ${process.env.TOKEN1}`
        }
      }
    );
    console.log(response);
    const posts = response.data;
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
