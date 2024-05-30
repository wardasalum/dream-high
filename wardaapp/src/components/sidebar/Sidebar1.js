// import React from 'react'
// import './sidebar1.css'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Route
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

// const Sidebar1 = () => {
//     return (
//         <div className='sidebar'>
//             <div className='top'>
//             <img
//             src='/images/mine.jpg' alt='' className='avatar'/>
//                 <span className='logo'> ADMIN</span>
//             </div>
//             <hr />
//             <div className='center'>
//                 <ul>
//                     <p className='title'>MAIN</p>
//                     <li>
//                         <DashboardIcon className='icon' />
//                         <span>Dashboard</span>
//                     </li>

//                     <p className='title'>ADMIN</p>
//                     <li>
//                         <PersonOutlineOutlinedIcon className='icon' />
//                         <span><Link to="/addadmin">Add admin</Link></span>
//                     </li>
//                     <li>
//                         <PersonOutlineOutlinedIcon className='icon' />
//                         <span><Link to="/viewadmin">View admin</Link></span>
//                     </li>
                   
//                     <p className='title'>HUBS</p>
//                     <li>
//                         <PersonOutlineOutlinedIcon className='icon' />
//                         <span><Link to="/addhub">add hubs</Link></span>
//                     </li>
//                     <li>
//                         <PersonOutlineOutlinedIcon className='icon' />
//                         <span><Link to="/view hub">view hubs</Link></span>
//                     </li>
//                     <p className='title'>USER</p>
//                     <li>
//                         <PersonOutlineOutlinedIcon className='icon' />
//                         <span>profile</span>
//                     </li>
//                     <li>
//                         <PersonOutlineOutlinedIcon className='icon' />
//                         <span>logout</span>
//                     </li>
//                 </ul>


//             </div>
//             <div className='bottom'>
//                 <div className='option'></div>
//                 <div className='option'></div>
//             </div>
//         </div>
//     )
// }

// export default Sidebar1





import React, { useState } from 'react';
import './sidebar1.css';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'; // Icon for ADMIN
import HubIcon from '@mui/icons-material/Hub'; // Icon for HUBS
import PersonIcon from '@mui/icons-material/Person'; // Icon for USER

const Sidebar1 = () => {
    const [adminOpen, setAdminOpen] = useState(false);
    const [hubsOpen, setHubsOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);

    return (
        <div className='sidebar'>
            <div className='top'>
                <img src='/images/mine.jpg' alt='' className='avatar'/>
                <span className='logo'>ADMIN</span>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>

                    <p className='title' onClick={() => setAdminOpen(!adminOpen)}>
                        <AdminPanelSettingsIcon className='icon' />
                        ADMIN
                    </p>
                    {adminOpen && (
                        <ul className='dropdown'>
                            <li>
                                <Link to="/addadmin">Add admin</Link>
                            </li>
                            <li>
                                <Link to="/viewadmin">View admin</Link>
                            </li>
                        </ul>
                    )}

                    <p className='title' onClick={() => setHubsOpen(!hubsOpen)}>
                        <HubIcon className='icon' />
                        HUBS
                    </p>
                    {hubsOpen && (
                        <ul className='dropdown'>
                            <li>
                                <Link to="/addhub">Add hubs</Link>
                            </li>
                            <li>
                                <Link to="/viewhub">View hubs</Link>
                            </li>
                        </ul>
                    )}
                    <p className='title' onClick={() => setUserOpen(!userOpen)}>
                        <PersonIcon className='icon' />
                        USER
                    </p>
                    {userOpen && (
                        <ul className='dropdown'>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/logout">Logout</Link>
                            </li>
                        </ul>
                    )}
                </ul>
            </div>
            <div className='bottom'>
                <div className='option'></div>
                <div className='option'></div>
            </div>
        </div>
    );
};

export default Sidebar1;

