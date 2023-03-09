import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

const CreatePost = () => {

  const formik = useFormik({
    initialValues: {
      title:"",
      file:"",
      summary:""
    },
    
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required !"),
      file: Yup.mixed().required('A file is required !'),
      summary: Yup.string()
        .min(30, "Minimum 30 characters")
        .required("Summary is required!"),
    }),
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
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

        
        <label className='label' htmlFor="">Image</label>
        <input className='input'
         type="file" 
          name='file'
        
        value={formik.values.file}
        onChange={formik.handleChange}

        />
        {formik.errors.file && formik.touched.file && (
            <p className='error'>{formik.errors.file}</p>
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
