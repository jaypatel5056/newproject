
// import axios from "../../lib/api2";
import axios from "axios";

export default async (req, res) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3Nzc1ODI1NSwiZXhwIjoxODM1NDM4MjU1fQ.kiT3VZAx2yNUg6k10lW-Ez77RFnI4KxKa6Ajb3mSkds';
  const value=req.query.blog1;
  console.log('hilmk'); 
  console.log(value);
  
  try {
    const response = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/posts/?per_page=2`,
      {
        headers:{  
          Authorization: `Bearer ${token}`
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
