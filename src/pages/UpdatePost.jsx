import React, { useEffect, useState } from 'react'
import {useParams, useNavigate } from 'react-router-dom'
import { updataPost } from '../features/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const UpdatePost = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const {post} = useSelector((store) => store.post);
  const {id}=useParams()
  const [initialState,setInitialState] = useState({
    title : '',
    summary : '',
    id : id
  })

  const getData = () =>{
    console.log("post",post)
    const singleData = post.filter((item)=>{
      return item.id === parseInt(id)
    })
      setInitialState({title :singleData[0]?.title, summary :singleData[0]?.summary})
  }
  useEffect(()=>{
   getData()      
  },[])
  

  
const handleSubmit = (e)=>{
  e.preventDefault();
  if(initialState.title && initialState.summary ){
    Object.assign(initialState, {id: id})
    const newValue = initialState;
    dispatch(updataPost(newValue));
    
    navigate('/')
  }
  else{
    toast.error('All fields are required')
  }
}

  return (
    <div className='update-post'>
      <form >
        <h1>Update Post</h1> 
      <label className='label' htmlFor="">Title</label>
        <input type="text"
         placeholder='Title'
        className='input'
        name='title'
        value={initialState.title}
        onChange={(e)=>setInitialState({...initialState,title:e.target.value})}
          />
        
            
        <label className='label' htmlFor="">Summary</label>

        <textarea rows={10} 
          value={initialState.summary}
          onChange={(e)=>setInitialState({...initialState,summary:e.target.value})}
          name="summary"
        />
       

        <button type='submit' onClick={handleSubmit} className='btn update'>Update</button>

    </form>
    </div>
  )
}

export default UpdatePost
