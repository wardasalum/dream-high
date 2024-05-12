import React from 'react'
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search....' />
          < SearchOutlinedIcon />
        </div>


        <div className='items'>
          <div className='item'>
            <LanguageOutlinedIcon  className='icon'/>
            English
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <NotificationsOutlinedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
