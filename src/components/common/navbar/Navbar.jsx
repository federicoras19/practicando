import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom'
import { DataContext } from '../../utils/GlobalContexts';
import "./Navbar.css"
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Navbar = () => {
    const { toggleTheme } = useContext(DataContext)
    return (
        <>
            <nav className='styleNavbar'>
                <li><Link to="/home">Home</Link></li>
                <Switch {...label} onClick={toggleTheme}/>
            </nav >
            <Outlet />
        </>


    )
}

export default Navbar
