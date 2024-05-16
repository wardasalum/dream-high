import React from 'react'
import './sidebar1.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Route
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

const Sidebar1 = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
            <img
            src='/images/mine.jpg' alt='' className='avatar'/>
                <span className='logo'> ADMIN</span>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>

                    <p className='title'>ADMIN</p>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span><Link to="/addadmin">Add admin</Link></span>
                    </li>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span><Link to="/viewadmin">View admin</Link></span>
                    </li>
                   
                    <p className='title'>HUBS</p>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span><Link to="/add hub">add hubs</Link></span>
                    </li>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span><Link to="/view hub">view hubs</Link></span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span>profile</span>
                    </li>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span>logout</span>
                    </li>
                </ul>


            </div>
            <div className='bottom'>
                <div className='option'></div>
                <div className='option'></div>
            </div>
        </div>
    )
}

export default Sidebar1
