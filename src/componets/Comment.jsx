import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Comment = ({id}) => {
    const [postData,setPostData] = useState([])
    let {post} = useSelector((store) => store.post);
    const dispatch = useDispatch();
    const [comment,setComment] = useState('')
    const navigate= useNavigate();

 

    

    let PostId = parseInt(id);
 
   
    useEffect(()=>{
        post  = post.filter((item)=>{
            return item.id === parseInt(id)
          })
          setPostData(post)
    },[])


  return (
    <>
        <div className="comment-container">
        <div className="comment-section">
          <input type="text" className='input' value={comment} onChange={(e)=>setComment(e.target.value)} />
          <button >comment</button>

      </div>


      {postData[0]?.comments? postData[0]?.comments.map((item,key)=>{
        return <div className="comments" key={key}>
        <p>{item.comment}</p> 
        <div className="btn-container">
            <span className='edit'>Edit</span> <span className='delete my-5'>Delete</span>
        </div> 
      </div>

      }) : <h3>No comment found</h3>}
         

      </div>
    </>
  )
}

export default Comment
