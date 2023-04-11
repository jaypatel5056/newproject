import axios from "axios";

export default async (req, res) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3Nzc1ODI1NSwiZXhwIjoxODM1NDM4MjU1fQ.kiT3VZAx2yNUg6k10lW-Ez77RFnI4KxKa6Ajb3mSkds";
  const token1 =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3ODM0MzYzNiwiZXhwIjoxODM2MDIzNjM2fQ.5f6q0jPv6NlGYoxlwuM-GOS-mS1A8AQ3OjIuHMMZ9fE";
  const value = req.query.id;
  try {
      // const response = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/posts?categories=${value}`,
      //   {
      //     headers:{
      //       Authorization: `Bearer ${token}`
      //     }
      //   }
      // );
    const response = await axios.get(
      `https://testapivai.000webhostapp.com/wp-json/wp/v2/posts?categories=${value}`,
      {
        headers: {
          Authorization: `Bearer ${token1}`,
        },
      }
    );
    console.log(response);
    const posts = response.data;
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
