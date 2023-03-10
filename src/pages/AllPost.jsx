import React from 'react'

import Post from './Post'
import { useSelector } from 'react-redux'

const AllPost = () => {

  const {post} = useSelector((store) => store.post);
  if(!post){
    return <h1>No Post Found please create a post</h1>
  }
  return (
    <>
    {
      post.map((item,key)=>{
        console.log(item)
       const {title,summary,id} = item;
       return <Post key={key} title={title} summary={summary}/>
      })
    }
     {/* <Footer/> */}
    </>
  )
}

export default AllPost
