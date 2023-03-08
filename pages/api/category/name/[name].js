import axiosRequest from "@/lib/api";
import axios from "axios";

export default async (req, res) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3Nzc1ODI1NSwiZXhwIjoxODM1NDM4MjU1fQ.kiT3VZAx2yNUg6k10lW-Ez77RFnI4KxKa6Ajb3mSkds";
  const value = req.query.name;

  try {
    let response = await axiosRequest.getData(
      `http://localhost/wordpress/wp-json/wp/v2/categories/${value}`
    );
    // const response = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/categories/${value}`,
    //   {
    //     headers:{
    //       Authorization: `Bearer ${token}`
    //     }
    //   }
    // );
    console.log(response);
    const posts = response.data;
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
