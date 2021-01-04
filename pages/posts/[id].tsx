import React from 'react';
import { useRouter } from 'next/router';
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    const paths = posts.map((post: any) => `/posts/${post.id}`)
    return { paths, fallback: false }
}
export default function Home({ post }: any) {
    const Router = useRouter();
    if (Router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <ul>
            <li>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </li>
        </ul>
    )
}

export async function getStaticProps({ query, params }: any) {
    const { id } = query || params;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    const post = await res.json()
    return {
        props: {
            post,
        },
    }
}
