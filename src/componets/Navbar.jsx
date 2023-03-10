import React from 'react'
import { useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { removeAllPost } from '../features/post/postSlice'


const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleRemove = () =>{
        dispatch(removeAllPost())
        toast.success('Posts removed successfully !!')
        navigate('/')
    }
  return (
    <header className='header'>
        <div className="logo-container">
            <Link to='/'>
                <h3>IBLOG</h3>
            </Link>
        </div>
        
            <ul>
            <Link to='/create-post'>
                <li className='create-post-li'>Create a Post</li>
            </Link>
                <li className='remove-all-post' onClick={handleRemove}>Remove all Post</li>
            </ul>
        
    </header> 

  )
}

export default Navbar
