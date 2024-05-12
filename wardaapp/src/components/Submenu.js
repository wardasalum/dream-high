import react, { useState } from 'react'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// style for items
const SidebarLink = styled(Link)`
display:flex;
justify-content:space-between;
color:white;
align-items:center;
padding:20px;
list-style:none;
height:60px;
text-decoration:none;
font-size:20px;

&:hover{
    ${'' /* background:white; */}
    border-left:4px solid blue;
    cursor:pointer;

}

`
// for label
const SidebarLabel = styled.span`
margin-left:16px;
`



const DrowpdownLink = styled(Link)`
background:#45047f;
height:60px;
padding-left: 3rem;
display:flex;
align-items:center;
text-decoration:none;
font-size:18px;

&:hover{
    background:blue;
    cursor:pointer;
}
`


const Submenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)
    return (
        <>
       
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>
                        {item.title}

                    </SidebarLabel>
                </div>
                <div>
                    {
                        item.subNav && subnav
                        ? item.iconClosed
                        : item.subNav
                        ? item.iconOpened 
                        :null
                        }
                </div>

            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DrowpdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DrowpdownLink>
                )
            })}
        </>

    )

}

export default Submenu;