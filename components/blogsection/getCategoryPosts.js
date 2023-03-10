
import React, { useState, } from 'react';
import { useEffect } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import styles from "../../styles/singlePost.module.scss"
import axios from "axios"

const Post = ({post,postcheck}) => {
    const [check,setCheck]=useState(true);
    const regex = /<img.+?src="(.+?)".*?>/i;
    const urlmatch = post.content.rendered.match(regex);
    const imageUrl = urlmatch ? urlmatch[1] : null;

    const [categoryName, setCategoryName] = useState("");
    useEffect(() => {
      async function getCategoryName() {
        // console.log('0 s');
        console.log(post.categories[0])
        const categoryData = await axios.get(`/api/category/name/${post.categories[0]}`);
        console.log('iiii')
        console.log(categoryData);
        console.log('name');
        console.log(categoryData.data.name)
        setCategoryName(categoryData.data.name);
      }
      getCategoryName();
    }, [post.categories]);

    useEffect(() => {
    if(post.id===postcheck){
        setCheck(false)
    }
},[])
  return (
    <>
     {check && <Col sm={6} className={` mb-40  mt-30 ${styles.section1}`}>
  
  <div className={styles.epimg1}>
    <img
      src={imageUrl}
      alt=""
    ></img>
  </div>
  <div className={styles.desc}>
    <Link href={`/blogs/${post.id}`}>
      {" "}
      {post.title.rendered &&
      post.title.rendered
    }
    </Link>

    <div className={styles.label1}> {categoryName && `${categoryName}`}</div>
  </div>
{/* </div> */}
</Col> }
</>

  )
}

export default Post

