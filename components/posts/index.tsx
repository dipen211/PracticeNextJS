import React from 'react';
import Link from 'next/link';
import styles from './Post.module.css';

export default function post({ id, title, body }: any) {
    return (
        <>
            <img src={"/images/posts/" + id + ".jpg"} className={styles.postImage}/>
            <h3 className={styles.postHeading}>
                <Link href="posts/[id]" as={"/posts/" + id}>
                    {title}
                </Link>
            </h3>
            <p>{body}</p>
        </>
    )
}