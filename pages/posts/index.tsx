import React from 'react';
import Post from './components/posts';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import("./components/header"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home({ posts }: any) {
  return (
    <>
      <Header />
      <ul className="row">
        {posts.map((post: any) => (
          <li className="col-md-3"  key={post.id}>
            <Post {...post} />
          </li>
        ))}
      </ul>
    </>
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
