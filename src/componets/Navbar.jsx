import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
                <li className='remove-all-post'>Remove all Post</li>
            </ul>
        
    </header> 

  )
}

export default Navbar
