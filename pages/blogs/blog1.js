import api from '../api';

export default function BlogPage({ posts }) {
  console.log(posts);
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await api.get('/posts');
  const posts = await res.data;
  return { props: { posts } };
}
