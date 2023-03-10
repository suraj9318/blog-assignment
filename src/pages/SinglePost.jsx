import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import postImg from '../assets/post1.png'
import { useSelector } from 'react-redux'

const SinglePost = () => {
  const [data,setData] = useState([])
  const {post} = useSelector((store) => store.post);
  const {id}=useParams()

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
    console.log(id);
  }
  
  if(!post){
    return <h1>Something went wrong please try again..</h1>
  }
  
  if(data.length < 1){
    return <h1>Something went wrong please try again..</h1>
  }
  return (
    data.map((item,key)=>{
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
    })
   
  )
}

export default SinglePost
