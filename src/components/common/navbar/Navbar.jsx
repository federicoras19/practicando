import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className='styleNavbar'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/favs">Favs</Link></li>
                <button>Change theme</button>
            </nav >
            <Outlet />
        </>


    )
}

export default Navbar
