import React from 'react';
import Post from './components/post';

export default function Home({ posts }: any) {
  return (
    <ul className="row">
      {posts.map((post: any) => (
        <li className="col-md-3">
          <Post {...post} />
        </li>
      ))}
    </ul>
  )
}
export async function getStaticProps() {
  const res = await fetch(`${process.env.API_BASE_URL}${process.env.POST_URL}`)
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}
