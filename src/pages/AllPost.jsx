import React, { useEffect, useState } from 'react'

import Post from './Post'
import { useSelector } from 'react-redux'

const AllPost = () => {
  const [postData,setPostData] = useState([])
  const {post} = useSelector((store) => store.post);

  useEffect(()=>{
    console.log(post)
    setPostData(post)
  },[post,postData])


  if(post.length < 1){
    return <h1>No Post Found please create a post</h1>
  }
  return (
    <>
    {
      postData.map((item,key)=>{
       const {title,summary,id} = item;
       return <Post key={key} title={title} summary={summary} id={id}/>
      })
    }
     {/* <Footer/> */}
    </>
  )
}

export default AllPost
