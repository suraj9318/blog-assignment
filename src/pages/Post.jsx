import React from 'react'
import { Link } from 'react-router-dom'
import postImg from '../assets/post.jpg'
const Post = ({title,summary,id}) => {
  return (
        <div className="post">
        <div className="image">
            <Link to={`/single-post/${id}`}>
                <img src={postImg} alt="" />
            </Link>
        </div>
        <div className="texts">
            <Link to={`/single-post/${id}`}>
            <h2>{title}</h2>
            </Link>

        <p className="info">
            <a href="">Anonymous{Math.floor(Math.random() * 10) + 1}</a>
        </p>
        <p className='summary'>{summary}</p></div>
    </div>
  )
}

export default Post
