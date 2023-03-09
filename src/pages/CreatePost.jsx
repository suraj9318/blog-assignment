import React from 'react'

const CreatePost = () => {
  return (
    <div className='create-post'>
      <form >
        <h1>Create a new post</h1>  
        <label className='label' htmlFor="">Title</label>
        <input type="text" placeholder='Title' className='input'/>
        
        <label className='label' htmlFor="">Image</label>
        <input className='input' type="file"  />


        <label className='label' htmlFor="">Summary</label>

        <textarea rows={10} />
        <button className='btn success'>Save</button>

    </form>
    </div>
  )
}

export default CreatePost
