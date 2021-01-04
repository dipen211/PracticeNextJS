import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <Link href="/posts">
      <a className="card">
        <h3>Posts</h3>
      </a>
    </Link>
  )
}