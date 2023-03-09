import React from 'react'

const UpdatePost = () => {
  return (
    <div className='update-post'>
      <form >
        <h1>Update your post</h1>  
        <label className='label' htmlFor="">Title</label>
        <input type="text" placeholder='Title' className='input'/>
        
        <label className='label' htmlFor="">Image</label>
        <input className='input' type="file"  />


        <label className='label' htmlFor="">Summary</label>

        <textarea rows={10} />
        <button className='btn update'>Update</button>

    </form>
    </div>
  )
}

export default UpdatePost
