import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorHubsEl, setAnchorHubsEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleHubsMenuOpen = (event) => {
    setAnchorHubsEl(event.currentTarget);
  };

  const handleHubsMenuClose = () => {
    setAnchorHubsEl(null);
  };

  const open = Boolean(anchorEl);
  const hubsOpen = Boolean(anchorHubsEl);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <img src="/images/mine.jpg" alt="Your Image" style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
          <Typography variant="h6" noWrap sx={{ flexGrow: 1, textAlign: 'center' }} component="div">
            School Hub Management System
          </Typography>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '30px' }}>Home</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none', marginRight: '30px' }}>AboutUs</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none', marginRight: '30px' }}>Contact</Link>

          <Typography
            aria-controls="hubs-menu"
            aria-haspopup="true"
            onClick={handleHubsMenuOpen}
            style={{ color: 'white', cursor: 'pointer', marginRight: '30px' }}
          >
            Hubs
          </Typography>
          <Menu
            id="hubs-menu"
            anchorEl={anchorHubsEl}
            open={hubsOpen}
            onClose={handleHubsMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
         <MenuItem onClick={handleHubsMenuClose} component="a" href="https://maps.app.goo.gl/b4Wfkyga7aWEVQ1Y9" target="_blank" rel="noopener noreferrer">Jangombe</MenuItem>
            <MenuItem onClick={handleHubsMenuClose} component="a" href="https://maps.app.goo.gl/khy1fvqqa2PswnqR8" target="_blank" rel="noopener noreferrer">Mahonda</MenuItem>
            <MenuItem onClick={handleHubsMenuClose} component="a" href="https://maps.app.goo.gl/Tfnffbm3mdL1hXbD7" target="_blank" rel="noopener noreferrer">Unguja ukuu</MenuItem>
          </Menu>

          <IconButton
            color="inherit"
            aria-label="open menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <List sx={{ width: '200px' }}>
              <ListItem key="REGISTER" disablePadding onClick={handleMenuClose}>
                <ListItemButton component={Link} to="/registration">
                  <ListItemText primary="REGISTER" primaryTypographyProps={{ fontSize: '1.2rem', fontWeight: 'bold', padding: '12px 24px' }} />
                </ListItemButton>
              </ListItem>
              <ListItem key="LOGIN" disablePadding onClick={handleMenuClose}>
                <ListItemButton component={Link} to="/login">
                  <ListItemText primary="LOGIN" primaryTypographyProps={{ fontSize: '1.2rem', fontWeight: 'bold', padding: '12px 24px' }} />
                </ListItemButton>
              </ListItem>
            </List>
          </Popover>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
