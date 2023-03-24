import React from 'react'
import axios from "axios"
import Allposts from "../../../components/blogsection/allPosts"
import Navbar1 from "../../../components/blogsection/navbarComponent"
const App = ({categoryPosts}) => {
  return (
    <>
    <Navbar1/>
    {categoryPosts.map((post)=>(
      <Allposts post={post}/>
    )
    )}
    </>
    // <div>sz</div>
  )
}

export default App

export async function getServerSideProps(context){
    const {params}=context;
    const categoryId=params.slug;
    console.log(categoryId);
    try{
        const response=await axios.get(`https://testapivai.000webhostapp.com/wp-json/wp/v2/posts?categories=${categoryId}`,{
          headers:{"Authorization":'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3ODM0MzYzNiwiZXhwIjoxODM2MDIzNjM2fQ.5f6q0jPv6NlGYoxlwuM-GOS-mS1A8AQ3OjIuHMMZ9fE'}
          
        });
        const categoryPosts=response.data;
        console.log(categoryPosts);
        return{
          props:{
            categoryPosts
          }
        }

    }
    catch(error){
      console.error(error)
      return{
        props:{categoryPosts:{}}
      }
      
    }


}