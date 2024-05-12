import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FAIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import { SidebarData } from './SidebarData'
import Submenu from './Submenu'
import { IconContext } from 'react-icons/lib'

// for navbar
const Nav = styled.div`
background:#020007d3;
height:60px;
display:flex;
justify-content:flex-start;
align-items: center;
`
// for naavbar icon
const NavIcon = styled(Link)`
margin-left: 2rem;
font-size:2rem;
height:80px;
display:flex;
justify-content:flex-start;
align-items:center; 
`

const SidebarNav= styled.nav`
background:#020007d3;
width:210px;
height:100vh;
display:flex;

justify-content:center; 
position:fixed;
top:0;
left:${({sidebar}) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index:10s;
`
// for sidebar
const SidebarWrap=styled.div`
width:100%;

`

const Sidebar = () => {
    const [sidebar,setSidebar]=  useState(false)
    const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
     <IconContext.Provider value={{color:'white'}}>
     <Nav>
        <NavIcon to ="#">
            <FAIcons.FaBars onClick={showSidebar} />
        </NavIcon>
     </Nav>
     <SidebarNav sidebar ={sidebar}>
     <SidebarWrap>
        <NavIcon to ='#'> 
          <AiIcons.AiOutlineClose onClick={showSidebar}/>
        </NavIcon>
       {SidebarData.map((item,index)=>{
        return<Submenu item={item} key ={index}/>;
       }
       )}
        
        </SidebarWrap>
     </SidebarNav>
     </IconContext.Provider>
    </>
  )
}

export default Sidebar
