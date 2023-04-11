<div className={styles.container}>
        <div className={styles.leftmenu}>
    <Left1/>
        </div>
    <div className={styles.content}>
      <div className={styles.container1}>
      <h2 className={`mt-sm-80 mb-sm-10 mb-50 mt-lg-80 mb-lg-10 ${styles.zzz}`}>Blog Table</h2>
        {/* <h1 className={`mb-30`}>User Table</h1> */}
    

  {posts && posts.length > 0 ? (
    <Table striped className={`${styles.main1}`} responsive="xs" bordered hover>
    {/* <table className={styles.main1}> */}
    {/* <table> */}
      <thead>
        <tr>
          <th className={styles.heading}>S.NO</th>
          <th className={styles.heading}>User ID</th>
          <th className={styles.heading}> Name</th>
          {/* <th className={styles.heading}>Author</th>
          <th className={styles.heading}>Date</th> */}
          <th className={styles.heading}>Print Blog</th>
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
             <td className={styles.content}><Button onClick={()=> {updateDetails(post.id)}}>Update Details</Button></td>
            
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
    <div className={`${styles.pagesection}`}>

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