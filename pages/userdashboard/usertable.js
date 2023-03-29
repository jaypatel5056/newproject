import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../../styles/page/userTable.module.scss"
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button"
import { Pagination  } from 'react-bootstrap';
import Form from "../../components/blogsection/blogsForm"
import Left1 from "../../components/blogsection/sideBarMenuComponent"
import { calcLength } from 'framer-motion';



const BlogTable = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
    //   const response = await axios.get('https://your-wordpress-site.com/wp-json/wp/v2/posts');
    const response = await axios.get(
        `/api/getuser`
      );  
    let posts1 = [...posts, ...response.data];
        console.log(posts1);
        setPosts(posts1);
        console.log('aadadadewidn');
      // setPosts(response.data);
    };
    fetchData();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(()=>{
    console.log('display posts');
    console.log(posts);
  },[])

  const handlePrint= async (postId,post) => {
    try{
    const response=await axios.get(`/api/print1?id=${postId}`);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    console.log('url')
    console.log(url);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${post.slug}.pdf`);
    document.body.appendChild(link);
    link.click();
    }
    catch(error){
      console.error(error)
    }
  }
  const handlePrint1 = async () => {
    try{
    const response=await axios.get(`/api/print1?id=5`);
    console.log('coming back');
    console.log(response.data);
    const url = window.URL.createObjectURL(new Blob([response.data],{type: 'application/pdf'}));
    console.log('url')
    console.log(url);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `aa.pdf`);
    document.body.appendChild(link);
    link.click();
    }
    catch(error){
      console.error(error)
    }
  }

  return (
    <>
    <div className={styles.container}>
        <div className={styles.leftmenu}>
    <Left1/>
        </div>
    <div className={styles.content}>
      <div className={styles.container1}>
        <h1 className={`mb-30`}>User Table</h1>

  {posts && posts.length > 0 ? (
    <Table striped className={`ml-250 ${styles.main1}`} bordered hover>
    {/* <table className={styles.main1}> */}
    {/* <table> */}
      <thead>
        <tr>
          <th className={styles.heading}>S.NO</th>
          <th className={styles.heading}>User ID</th>
          <th className={styles.heading}>User Name</th>
          {/* <th className={styles.heading}>Author</th>
          <th className={styles.heading}>Date</th> */}
          <th className={styles.heading}>Print Blog</th>
        </tr>
      </thead>
      <tbody>
        {currentPosts.map((post,index) => (
          <tr key={post.id}>
            <td className={styles.content}>{indexOfFirstPost+index+1}</td>
            <td className={styles.content}>{post.id}</td>
            <td className={styles.content}>{post.name}</td>
            {/* <td className={styles.content}>{post.author}</td>
            <td className={styles.content}>{post.date}</td> */}
            <td className={styles.content}><Button onClick={()=> handlePrint(post.id,post)}>Print</Button></td>
            
          </tr>
        )
        )}
      </tbody>

    {/* </table> */}
    </Table>
    
    )
  :
  (  <p>Loading posts...</p>)   
  
  }
    <div className={`ml-250 ${styles.pagesection}`}>

    <Pagination >
    {[...Array(Math.ceil(posts.length / postsPerPage))].map((_, index) => (
      <Pagination.Item
      key={index}
      active={index + 1 === currentPage}
      onClick={() => paginate(index + 1)}
    
      >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
        </div>

    {/* <div className={styles.formside}>
    <Form/>
    </div> */}
    <div className={styles.formside}>

    <Button  onClick={() => setShowModal(true)}>Open Modal</Button>
    <Button onClick={()=> handlePrint1()}>Print</Button>
    </div>
    <Modal show={showModal} onHide={() => setShowModal(false)}>
  <Modal.Header closeButton>
    {/* <Modal.Title>Add a new blog</Modal.Title> */}
  </Modal.Header>
  <Modal.Body>
    <Form />
  </Modal.Body>
</Modal>

    </div>
    </div>
    </div>
    </>
  );
};

export default BlogTable;
