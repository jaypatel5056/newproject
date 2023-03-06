export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/blog1/11');
    const post = await res.json();
  
    return {
      props: {
        post,
      },
    };
  }
  
  const PostPage = ({ post }) => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(false);
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        <h1>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    );
  };
  
  export default PostPage;
  