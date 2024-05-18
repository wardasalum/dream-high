import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Home2() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#080808' ,fontSize:'30px', marginTop: '70px', background: '#eae8ec', padding: '20px' }}>
      <div>
      {/* style  */}
        <img src="/images/jcow.jpg" alt="Your Image" style={{ borderRadius: '50%', width: '200px', height: '150px' }} />
        <Typography variant="body1">
        Zanzibar School Hub Management System is a system <br></br>that manages all hubs in Zanzibar <br></br>to communicate with each other in order to <br></br>share knowledge and various information <br></br>concerning hubs in Zanzibar.
      </Typography>
      <br></br> <br></br>
      </div>
      <div>
        <h1  style={{alignItems:'center',color:'black'}}>Absolutely free</h1>
        <Typography variant="body1">
        Zanzibar School Hub Management System is a system <br></br>which are free and easy to use just you need to Signup.
      </Typography>
      </div>
      <br></br> <br></br>
      <div>
      {/* style  */}
        <img src="/images/jcow.jpg" alt="Your Image" style={{ borderRadius: '50%', width: '200px', height: '150px' }} />
        <h1>Reliable</h1>
        <Typography variant="body1">
        Zanzibar School Hub Management  <br></br>is online system you can access it everywhere in any time
      </Typography>
      <br></br> <br></br>
      </div>
    </div>
  );
}
