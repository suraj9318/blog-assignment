import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { createPost } from '../features/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      title:"",
      summary:""
    },
    
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required !"),
      summary: Yup.string()
        .min(30, "Minimum 30 characters")
        .required("Summary is required!"),
    }),
    onSubmit: values => {

      // let value = JSON.stringify(values, null, 2);
      const id = new Date().getTime();
      Object.assign(values, {id: id})
       const newValue = values;
      
      dispatch(createPost(newValue));
      navigate('/')

    }
  });
  return (
    <div className='create-post'>
      <form onSubmit={formik.handleSubmit}>
        <h1>Create a new post</h1>  
        <label className='label' htmlFor="">Title</label>
        <input type="text"
         placeholder='Title'
        className='input'
        name='title'
        value={formik.values.title}
        onChange={formik.handleChange}
          />
          {formik.errors.title && formik.touched.title && (
            <p className='error'>{formik.errors.title}</p>
          )}

            
        <label className='label' htmlFor="">Summary</label>

        <textarea rows={10} 
        value={formik.values.summary}
        onChange={formik.handleChange}
          name="summary"
        />
        {formik.errors.summary && formik.touched.summary && (
            <p className='error'>{formik.errors.summary}</p>
          )}

        <button type="submit" className='btn success'>Save</button>

    </form>
    </div>
  )
}

export default CreatePost
