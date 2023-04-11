import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../../styles/page/blogTable.module.scss"
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button"
import { Pagination  } from 'react-bootstrap';
import Form from "../../components/blogsection/usersForm"
import Form1 from "../../components/blogsection/userUpdateForm"
import Left1 from "../../components/blogsection/sideBarMenuComponent"
import Nav from "../../components/blogsection/usernavbar"
import { calcLength } from 'framer-motion';



const BlogTable = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal1,setShowModal1] =useState(false);
  const [postId,setPostId]=useState();

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
    //   const response = await axios.get('https://your-wordpress-site.com/wp-json/wp/v2/posts');
    try{
      // let userId=user.id;
      // let userName=user.name;
    const response = await axios.get(
        `/api/getuser`
      );  
    let posts1 = [...posts, ...response.data];
        console.log(posts1);
        setPosts(posts1);
        console.log('aadadadewidn');
      // setPosts(response.data);
    }
    catch(error)
    {console.error(error);}
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
  },[]);

  const closeModal=()=>{
    setShowModal(false);
  }
  
  const closeModal1=()=>{
    setShowModal1(false); 
  }

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
  const updateDetails =(postId)=>{
    setPostId(postId);
    setShowModal1(true);
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
        <div className={`w-231 ${styles.leftmenu}`}>
    <Left1/>
        </div>
    <div className={styles.content}>
    <Nav/>
      <div className={styles.container1}>
        <h2 className={`mt-sm-80 mb-sm-10 mb-50 mt-lg-80 mb-lg-10 ${styles.zzz}`}>User Table</h2>

  {posts && posts.length > 0 ? (

    <Table striped className={styles.main1} responsive="lg" bordered hover fluid variant="secondary">
    {/* <table className={styles.main1}> */}
    {/* <table> */}
      <thead>
        <tr>
          <th className={styles.heading}>S.NO</th>
          <th className={styles.heading}>User Id</th>
          <th className={styles.heading}>Name</th>
          <th className={styles.heading}>Date</th>
          {/* <th className={styles.heading}>Print Blog</th> */}
        </tr>
      </thead>
      <tbody>
      {currentPosts.map((post,index) => (

          <tr key={post.id}>
            <td className={styles.content}>{indexOfFirstPost+index+1}</td>
            <td className={styles.content}>{post.id}</td>
            <td className={styles.content}>{post.name}</td>
            {/* <td className={styles.content}>{post.author}</td>
            // <td className={styles.content}>{post.date}</td> */}
            {/* <td className={styles.content}><Button onClick={()=> handlePrint(post.id,post)}>Print</Button></td>
             */}
             <td className={styles.content}><Button onClick={()=> {updateDetails(post.id)}} variant="secondary">Update Details</Button></td>
            
          </tr>
        )
        )}
      </tbody>

    {/* </table> */}
    </Table>
    //  <table className={`ui inverted grey table ${styles.main1}`}>
    //   <thead>
    //     <tr>
    //       <th className={styles.heading}>S.NO</th>
    //       <th className={styles.heading}>Title</th>
    //       <th className={styles.heading}>ID</th>
    //       <th className={styles.heading}>Date</th>
    //       <th className={styles.heading}>Print Blog</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {currentPosts.map((post,index) => (
    //       <tr key={post.id}>
    //         <td className={styles.content}>{indexOfFirstPost+index+1}</td>
    //         <td className={styles.content}>{post.title.rendered}</td>
    //         <td className={styles.content}>{post.id}</td>
    //         <td className={styles.content}>{post.date}</td>
    //         <td className={styles.content1}><BsDownload onClick={()=> handlePrint(post.id,post)} className={styles.downloadbutton}/ ></td>
            
    //       </tr>
    //     )
    //     )}
    //   </tbody>

    // {/* </table> */}
    // </table>
//     <table class="ui inverted grey table">
//   <thead>
//     <tr><th>Food</th>
//     <th>Calories</th>
//     <th>Protein</th>
//   </tr></thead><tbody>
//     <tr>
//       <td>Apples</td>
//       <td>200</td>
//       <td>0g</td>
//     </tr>
//     <tr>
//       <td>Orange</td>
//       <td>310</td>
//       <td>0g</td>
//     </tr>
//   </tbody>
// </table>
    
    )
  :
  (  <p>Loading posts...</p>)   
  
  }
    <div className={styles.pagesection}>

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
<Form closeModal={closeModal}/>
</Modal.Body>
</Modal>
<Modal show={showModal1} onHide={() => setShowModal1(false)}>
<Modal.Header closeButton>
{/* <Modal.Title>Add a new blog</Modal.Title> */}
</Modal.Header>
<Modal.Body>
<Form1 closeModal1={closeModal1} postId={postId}/>
</Modal.Body>
</Modal>

    </div>
    </div>
    </div>
    </>
  );
};

export default BlogTable;
