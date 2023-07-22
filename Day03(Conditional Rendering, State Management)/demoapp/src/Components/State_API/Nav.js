import React from 'react'
import './Nav.css';
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        {/* <a href='/'>Home</a>
        <a href='/profile'>Profile</a>
        <a href='/todo'>Todo</a>
        <a href='/products'>Products</a>
        <a href='/counter'>Counter</a> */}

        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/products">Products</Link>
        <Link to="/counter/?gender=male&sort=asc">Counter</Link>
    </div>
  )
}

export default Nav;