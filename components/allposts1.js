import React from 'react'
import axios from 'axios'
import Allposts from '../components/allposts'

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Allposts key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Posts

export async function getStaticProps() {
  try {
    const response = await axios.get('http://localhost/wordpress/wp-json/wp/v2/posts')
    const posts = response.data
    return {
      props: { posts },
    }
  } catch (error) {
    console.error(error)
    return {
      props: { posts: [] },
    }
  }
}
