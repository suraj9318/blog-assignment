import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import postImg from '../assets/post1.png'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost } from '../features/post/postSlice'

const SinglePost = () => {
  const navigate = useNavigate();
  const [data,setData] = useState([])
  const {post} = useSelector((store) => store.post);
  const {id}=useParams()
  const dispatch = useDispatch()
  useEffect(()=>{
  
      const singleData = post.filter((item)=>{
        return item.id === parseInt(id)
      })
      if(singleData.length < 1){
        setData([])
      }
      else{
        setData(singleData)
      }
  },[])

  const handleDelete =(id) => {
    dispatch(deletePost(id)); 
    navigate('/')
  }
  
  if(!post){
    return <h1>Something went wrong please try again..</h1>
  }
  
  if(data.length < 1){
    return <h1>Something went wrong please try again..</h1>
  }
  return (
  <div>
   { data.map((item,key)=>{
      return  <div className='post-page' key={key}>
          <h1>{item.title}</h1>
          <Link to={`/update-post/${item.id}`}>
              <button className='edit'>Edit</button>
          </Link>
          <button className='delete my-5' onClick={()=>handleDelete(item.id)}>Delete</button>
          <p className="info">
              <a href="">Anonymous{Math.floor(Math.random() * 10) + 1}</a>
            </p>


          <div className="image">
              <img src={postImg} alt="" />
          </div>
          <p>{
            item.summary
            }
          </p>
      </div>
    })}
        <div className="comment-container">
        <div className="comment-section">
          <input type="text" className='input' />
          <button className=''>comment</button>

      </div>
        <div className="comments">
          <p>Awesome</p> 
          <div className="btn-container">
              <span className='edit'>Edit</span> <span className='delete my-5'>Delete</span>
          </div> 
        </div>

      </div>
   </div>
  )
}

export default SinglePost
