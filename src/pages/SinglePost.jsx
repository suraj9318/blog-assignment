import React from 'react'
import { Link } from 'react-router-dom'
import postImg from '../assets/post.jpg'
const SinglePost = () => {
  return (
    <div className='post-page'>
        <h1>Demo Title</h1>
        <Link to='/update-post'>
            <button className='edit'>Edit</button>
        </Link>
        <button className='delete my-5'>Delete</button>
        <p className="info">
            <a href="">user1</a>
          </p>


        <div className="image">
            <img src={postImg} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ipsum error sint magni nisi quam sunt doloribus suscipit. Dolore quam accusamus veniam possimus facere atque vel sit non deleniti! Consequatur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dicta expedita iusto ad enim consectetur, quibusdam distinctio molestiae, officiis voluptatum, esse fuga excepturi dolor tempora autem corrupti labore. Soluta, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus neque eveniet repellendus. Recusandae laboriosam nesciunt maiores aliquid iste, ut excepturi suscipit commodi atque assumenda, sed, itaque minus saepe quibusdam maxime?
        </p>
    </div>

  )
}

export default SinglePost
