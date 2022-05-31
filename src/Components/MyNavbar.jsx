import React from 'react'
import { Link } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'

const MyNavbar = () => {
  return (
    <>
      <ToastContainer />
      <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className='nav-link text text-white' to='/Home'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text text-white' to='/Users'>
                Users
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link text text-white' to='/new-user'>
                New User
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text text-white' to='/new-form'>
                New form
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default MyNavbar
