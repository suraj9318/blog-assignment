import React from 'react'

const Navbar = () => {
  return (
    <header className='header'>
        <div className="logo-container">
            <h3>IBLOG</h3>
        </div>
        
            <ul>
                <li className='create-post'>Create a Post</li>
                <li className='remove-all-post'>Remove all Post</li>
            </ul>
        
    </header> 
    
  )
}

export default Navbar
