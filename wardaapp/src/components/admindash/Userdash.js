import React, { useEffect, useState } from 'react';
import AppBar from "@mui/material/AppBar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
import axios from "axios";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import {
    CollectionsBookmark,
    Edit,
    Feedback,
    ForkLeft,
    Help,
    PermMedia,
    UploadFile,
    Work,
} from "@mui/icons-material";

const drawWidth = 220;

function  Userdash() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [howToWriteOpen, setHowToWriteOpen] = useState(false);
    const [postsOpen, setPostsOpen] = useState(false);
    const [pickArticleOpen, setPickArticleOpen] = useState(false);
    const [improveOpen, setImproveOpen] = useState(false);
    const [eventCount, seteventCount] = useState(0);
    const [ResounceCount, setResourceCount] = useState(0);
    const [notifications, setNotifications] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [hubCount, setHubCount] = useState(0); // Initialize hub count state
    const [popupMessage, setPopupMessage] = useState('');
    const [RequestCount, setRequestCount] = useState(0);
    const [popupOpen, setPopupOpen] = useState(false);
    const navigate = useNavigate();

    const open = Boolean(anchorEl);

    const handleToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleDropdownToggle = (setDropdownOpen) => {
        setDropdownOpen(prevState => !prevState);
    };

    const handleLogout = () => {
        navigate('/login');
    };

    const handleNotificationsClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleNotificationClick = (index) => {
        // Mark notification as read
        const updatedNotifications = [...notifications];
        updatedNotifications[index].read = true;
        setNotifications(updatedNotifications);

        // Show popup message
        setPopupMessage(updatedNotifications[index].message);
        setPopupOpen(true);

        // Delete notification from database
        const notificationId = updatedNotifications[index].id; // Assuming 'id' is the unique identifier for notifications
        axios.delete(`http://localhost:8080/notification/${notificationId}`)
            .then(response => {
                console.log("Notification deleted successfully:", response.data);
                // Remove clicked notification from list
                updatedNotifications.splice(index, 1);
                setNotifications(updatedNotifications);
            })
            .catch(error => {
                console.error("Error deleting notification:", error);
            });
    };
   
                // Fetch the total number of hubs from the backend API
                axios.get("http://localhost:8080/hubs")
                    .then(response => {
                        setHubCount(response.data.length); // Set the total number of hubs
                    })
                    .catch(error => {
                        console.error("Error fetching hub count:", error);
                    });

                    //fetch event from backend
                    axios.get("http://localhost:8080/events")
                    .then(response => {
                        seteventCount(response.data.length); // Set the total number of hubs
                    })
                    .catch(error => {
                        console.error("Error fetching event count:", error);
                    });
          
                    
                // Fetch the total number of requests from the backend API
                axios.get("http://localhost:8080/requests")
                .then(response => {
                    setRequestCount(response.data.length); // Set the total number of hubs
                })
                .catch(error => {
                    console.error("Error fetching Request count:", error);
                });
      
    const handlePopupClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setPopupOpen(false);
    };

    const handleNotificationsClose = () => {
        setAnchorEl(null);
    };


    useEffect(() => {
        axios.get("http://localhost:8080/resources")
            .then(response => {
                setResourceCount(response.data.length);
            })
            .catch(error => {
                console.error("Error fetching resource count:", error);
            });

   

        axios.get("http://localhost:8080/notifications")
            .then(response => {
                const initialNotifications = response.data.map(notification => ({
                    ...notification,
                    read: false  // Add a 'read' property to each notification
                }));
                setNotifications(initialNotifications);
            })
            .catch(error => {
                console.error("Error fetching notifications:", error);
            });
    }, []);

    const responsiveDrawer = (
        <div style={{ backgroundColor: "#09212E", height: "100%" }}>
            <Toolbar />
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                <img src='/images/computer.png' alt="Computer" style={{ width: "60%", maxWidth: "200px", height: "75%" }} />
            </Box>
            <Divider />
            <List sx={{ backgroundColor: "#09212E" }}>
                <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setHowToWriteOpen)}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <SupervisorAccountRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Overview Section" component={Link} to="/userdash" />

                </ListItemButton>



                <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setPickArticleOpen)}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <UploadFile />
                    </ListItemIcon>
                    <ListItemText primary="Hub Management" />
                    {pickArticleOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                </ListItemButton>
                <Collapse in={pickArticleOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/addhub">
                            <ListItemText primary="ADD" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/hublist">
                            <ListItemText primary="View" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/reguestapprv">
                            <ListItemText primary="Request list" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setPostsOpen)}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <SchoolRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Event and Activity Management" />
                    {postsOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                </ListItemButton>
                <Collapse in={postsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/addevent">
                            <ListItemText primary="AddEvent" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/eventview">
                            <ListItemText primary="viewEvent" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setImproveOpen)}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <Edit />
                    </ListItemIcon>
                    <ListItemText primary="Reports and Analytics" />
                    {improveOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                </ListItemButton>
                <Collapse in={improveOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component="a" href="#improve1">
                            <ListItemText primary="" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component="a" href="#improve2">
                            <ListItemText primary="" />
                        </ListItemButton>
                    </List>
                </Collapse>
               
            </List>
            <Divider />
            <div onClick={handleLogout}>
                <Typography
                    sx={{
                        backgroundColor: "blue",
                        color: "white",
                        borderRadius: 10,
                        textAlign: "center",
                        padding: 1,
                        margin: 2,
                    }}
                >
                    Logout
                </Typography>
            </div>
        </div>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: "100%",
                    backgroundColor: "#302a70",
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    <IconButton
                        color="inherit"
                        onClick={handleNotificationsClick}
                    >
                        <Badge badgeContent={notifications.filter(notification => !notification.read).length} color="error">
                            <NotificationsIcon />
                        </Badge>

                    </IconButton >
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleNotificationsClose}
                    >
                        {notifications.length > 0 ? (
                            notifications.map((notification, index) => (
                                <MenuItem key={index} onClick={() => handleNotificationClick(index)}>
                                    {notification.read ? (
                                        <Typography variant="body1" color="textSecondary">
                                            {notification.message}
                                        </Typography>
                                    ) : (
                                        <Typography variant="body1" color="textPrimary">
                                            {notification.message}
                                        </Typography>
                                    )}
                                </MenuItem>
                            ))
                        ) : (
                            <MenuItem>No new notifications</MenuItem>
                        )}
                    </Menu>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                open={drawerOpen}
                onClose={handleToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawWidth,
                    },
                }}
            >
                {responsiveDrawer}
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    mt: 8,
                }}
            >
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 250, margin: "auto" }}>
                            <CardContent>
                                <img src='/images/computer.png' alt="Computer" style={{ width: "40%", maxWidth: "200px", height: "75%" }} />
                                <Typography gutterBottom variant="h5" component="div">
                                    Hub 
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Total Hubs {hubCount}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 250, margin: "auto" }}>
                            <CardContent>
                                <img src='/images/computer.png' alt="Computer" style={{ width: "40%", maxWidth: "200px", height: "75%" }} />
                                <Typography gutterBottom variant="h5" component="div">
                              Request 
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                            Total Requests : {RequestCount}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
                <br></br> <br></br>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 250, margin: "auto" }}>
                            <CardContent>
                                <img src='/images/computer.png' alt="Computer" style={{ width: "40%", maxWidth: "200px", height: "75%" }} />
                                <Typography gutterBottom variant="h5" component="div">
                            Event
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                            Total Events :{eventCount}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 250, margin: "auto" }}>
                            <CardContent>
                                <img src='/images/computer.png' alt="Computer" style={{ width: "40%", maxWidth: "200px", height: "75%" }} />
                                <Typography gutterBottom variant="h5" component="div">
                
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            {/* Snackbar for displaying popup message */}
            <Snackbar open={popupOpen} autoHideDuration={6000} onClose={handlePopupClose}>
                <MuiAlert elevation={6} variant="filled" onClose={handlePopupClose} severity="info">
                    {popupMessage}
                </MuiAlert>
            </Snackbar>
        </Box>
    );
}

export default Userdash;




