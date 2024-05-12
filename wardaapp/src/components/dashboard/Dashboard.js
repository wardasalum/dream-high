import React from 'react'
import './dash.css'
import Widget from '../widget/Widget'
import Navbar from '../Navbar/Navbar';
import Sidebar1 from '../sidebar/Sidebar1';

const Dashboard = () => {
  return (
    <div className='home'>
      <Sidebar1/>
      <div className='homeContainer'> 
      <Navbar/>
      <div className='wi'>
        <Widget type='user'/>
        <Widget/>
        <Widget/>
        <Widget/>
        
      </div>
      </div>
    </div>
  )
}

export default Dashboard
 