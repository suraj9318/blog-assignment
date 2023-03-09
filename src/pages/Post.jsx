import React from 'react'
import postImg from '../assets/post.jpg'
const Post = () => {
  return (
        <div className="post">
        <div className="image">
            <img src={postImg} alt="" />
        </div>
        <div className="texts">
            <h2>How a single engineer brought down Twitter</h2>

        <p className="info">
            <a href="">user1</a>
        </p>
        <p className='summary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque soluta perspiciatis id odio natus, obcaecati ut odit inventore. Laudantium iste minus fugit? Vero aperiam et quia. Voluptatem provident praesentium alias? lorem</p></div>
    </div>
  )
}

export default Post
