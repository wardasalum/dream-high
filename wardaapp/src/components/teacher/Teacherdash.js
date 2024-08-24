import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
import axios from "axios";
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
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import {
    UploadFile,
} from "@mui/icons-material";

const drawWidth = 220;

function Teacherdash() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [howToWriteOpen, setHowToWriteOpen] = useState(false);
    const [postsOpen, setPostsOpen] = useState(false);
    const [pickArticleOpen, setPickArticleOpen] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupOpen, setPopupOpen] = useState(false);
    const [adminCount, setAdminCount] = useState(0);
    const [notifications, setNotifications] = useState([]);
 const [unreadCount, setUnreadCount] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [hubCount, setHubCount] = useState(0); 
    const [announcements, setAnnouncements] = useState([]);
    const open = Boolean(anchorEl);
    
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/")
            .then(response => {
                setAdminCount(response.data.length); 
            })
            .catch(error => {
                console.error("Error fetching admin count:", error);
            });
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8080/hubs")
            .then(response => {
                setHubCount(response.data.length); 
            })
            .catch(error => {
                console.error("Error fetching hub count:", error);
            });
    }, []);
    
 
    const handleToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleDropdownToggle = (setDropdownOpen) => {
        setDropdownOpen(prevState => !prevState);
    };

    const handleNotificationsClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // const handleNotificationClick = (index) => {
    //     const updatedNotifications = [...notifications];
    //     updatedNotifications[index].read = true;
    //     setNotifications(updatedNotifications);

    //     setPopupMessage(updatedNotifications[index].message);
    //     setPopupOpen(true);


    //  };
     

     const handlePopupClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setPopupOpen(false);
    };

    const handleNotificationsClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        navigate('/login');
    };
    // axios.get("http://localhost:8080/activities")
    // .then(response => {
    //     const initialNotifications = response.data.map(notification => ({
    //         ...notification,
    //         read: false  // Add a 'read' property to each notification
    //     }));
    //     setNotifications(initialNotifications);
    // })
    // .catch(error => {
    //     console.error("Error fetching notifications:", error);
    // });
   
 // Fetch notifications from the backend
 useEffect(() => {
    axios.get("http://localhost:8080/activities")
        .then(response => {
            const initialNotifications = response.data.map(notification => ({
                ...notification,
                read: false  // Assume all fetched notifications are unread
            }));
            setNotifications(initialNotifications);
            setUnreadCount(initialNotifications.length); // Set the initial unread count
        })
        .catch(error => {
            console.error("Error fetching notifications:", error);
        });
}, []);

const handleNotificationClick = (index) => {
    const updatedNotifications = [...notifications];
    if (!updatedNotifications[index].read) {
        updatedNotifications[index].read = true;
        setNotifications(updatedNotifications);
        setUnreadCount(prevCount => prevCount - 1); // Decrease unread count
    }

    setPopupMessage(updatedNotifications[index].message);
    setPopupOpen(true);
};
    

    const responsiveDrawer = (
        <div style={{ backgroundColor: "#09212E", height: "100%" }}>
            <Toolbar />
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                <img src='/images/computer.png' alt="Computer" style={{ width: "60%", maxWidth: "200px", height: "75%" }} />
            </Box>
            <Divider />

            <List sx={{ backgroundColor: "#09212E" }}>
                <ListItemButton component={Link} to="/teacher" sx={{ color: "white" }} onClick={() => handleDropdownToggle(setHowToWriteOpen)}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <SupervisorAccountRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Overview Section" />
                </ListItemButton>
                
                <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setPickArticleOpen)}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <UploadFile />
                    </ListItemIcon>
                    <ListItemText primary="Class management" />
                    {pickArticleOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                </ListItemButton>
                <Collapse in={pickArticleOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/ViewClass">
                            <ListItemText primary="View" />
                        </ListItemButton> 
                    </List>
                </Collapse>

                <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setPickArticleOpen)}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <UploadFile />
                    </ListItemIcon>
                    <ListItemText primary="Resources" />
                    {pickArticleOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                </ListItemButton>
                <Collapse in={pickArticleOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/addhub">
                            <ListItemText primary="upload" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/hublist">
                            <ListItemText primary="View" />
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
                            notifications.map((approved, index) => (
                                <MenuItem key={index} onClick={() => handleNotificationClick(index)}>
                                    {approved.read ? "" : <strong>{approved.description}</strong>}
                                    {approved.read ? approved.message : ""}
                                </MenuItem>
                            ))
                        ) : (
                            <MenuItem disabled>No new notifications</MenuItem>
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
                    mt: 8, // Adjust margin top to create space for the app bar
                }}
            >
                
                      
              
          </Box>
        </Box>
    );
}

export default Teacherdash;


