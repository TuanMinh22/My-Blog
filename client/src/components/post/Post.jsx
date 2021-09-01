import React from 'react'
import './post.css';
import { Link } from 'react-router-dom'

export default function Posts({ post }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="post">
            <Link to={`/post/${post._id}`} className="link" >
                {post.photo && (
                    <img className="postImg" src={PF + post.photo} alt="" />
                )}
            </Link>
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map(c => (
                        <span className="postCat">{c.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link" style={{ marginTop: '15px' }}>
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    )
}
