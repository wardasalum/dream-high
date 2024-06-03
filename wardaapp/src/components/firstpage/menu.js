import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, MenuIcon, Popover, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const Menu = ({ handleMenuOpen, anchorEl, handleMenuClose, open }) => {
  return (
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
          <ListItemButton component={Link} to="/register">
            <ListItemText primary="REGISTER" primaryTypographyProps={{ fontSize: '1.2rem', fontWeight: 'bold', padding: '12px 24px' }} />
          </ListItemButton>
        </ListItem>
        <ListItemButton component={Link} to="/login">
          <ListItemText primary="LOGIN" primaryTypographyProps={{ fontSize: '1.2rem', fontWeight: 'bold', padding: '12px 24px' }} />
        </ListItemButton>
      </List>
    </Popover>
  );
}

export default Menu;
