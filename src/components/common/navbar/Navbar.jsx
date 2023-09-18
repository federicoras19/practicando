import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./Navbar.css"
import { Button } from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Navbar = () => {
    return (
        <>
            <nav className='styleNavbar'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <DarkModeOutlinedIcon/>
            </nav >
            <Outlet />
        </>


    )
}

export default Navbar
