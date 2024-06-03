import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes
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

export default function AboutUs() {
	const theme = useTheme();
	const [anchorEl, setAnchorEl] = React.useState(null);
  
	const handleMenuOpen = (event) => {
	  setAnchorEl(event.currentTarget);
	};
  
	const handleMenuClose = () => {
	  setAnchorEl(null);
	};
  
	const open = Boolean(anchorEl);
  
	return (
	  <Box sx={{ display: 'flex' }}>
		<CssBaseline />
		<AppBar position="fixed">
		  <Toolbar>
			<img src="/images/mine.jpg" alt="Your Image" style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
			<Typography variant="h9" noWrap sx={{ flexGrow: 1, textAlign: 'center' }} component="div">
			  Zanzibar School Hub Management System
			</Typography>
			<Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '70px' }}>Home</Link>
			<Link to="/about" style={{ color: 'white', textDecoration: 'none', marginRight: '70px' }}>About Us</Link>
			<Link to="/contact" style={{ color: 'white', textDecoration: 'none', marginRight: '70px' }}>Contact</Link>
  
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
			  <List sx={{ width: '200px', height: '150'}}>
				<ListItem key="REGISTER" disablePadding onClick={handleMenuClose}>
				  <ListItemButton component={Link} to="/register"> {/* Wrap with Link */}
					<ListItemText primary="REGISTER" primaryTypographyProps={{ fontSize: '1.2rem', fontWeight: 'bold', padding: '12px 24px' }} />
				  </ListItemButton>
				</ListItem>
				<ListItemButton component={Link} to="/login"> {/* Wrap with Link */}
				  <ListItemText primary="LOGIN" primaryTypographyProps={{ fontSize: '1.2rem', fontWeight: 'bold', padding: '12px 24px' }} />
				</ListItemButton>
			  </List>
			</Popover>
		  </Toolbar>
		</AppBar>
	  
	  </Box>
	);
}
