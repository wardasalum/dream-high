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
import Grid from "@mui/material/Grid"; // Add this line

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

function Teacherdash() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [howToWriteOpen, setHowToWriteOpen] = React.useState(false);
    const [postsOpen, setPostsOpen] = React.useState(false);
    const [pickArticleOpen, setPickArticleOpen] = React.useState(false);
    const [improveOpen, setImproveOpen] = React.useState(false);
    const [adminCount, setAdminCount] = useState(0);
    const [hubCount, setHubCount] = useState(0); // Initialize hub count state
    const [announcements, setAnnouncements] = useState([]);
    
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the total number of admins from the backend API
        axios.get("http://localhost:8080/")
            .then(response => {
                setAdminCount(response.data.length); // Set the total number of admins
            })
            .catch(error => {
                console.error("Error fetching admin count:", error);
            });
    }, []);

    useEffect(() => {
        // Fetch the total number of hubs from the backend API
        axios.get("http://localhost:8080/hubs")
            .then(response => {
                setHubCount(response.data.length); // Set the total number of hubs
            })
            .catch(error => {
                console.error("Error fetching hub count:", error);
            });
    }, []);
    
 

    const fetchAnnouncements = () => {
        // Simulated fetch for demonstration
        const demoAnnouncements = [
            { id: 1, text: "Welcome to our platform!" },
            { id: 2, text: "New feature announcement!" }
        ];
        setAnnouncements(demoAnnouncements);
    };

    const handleToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleDropdownToggle = (setDropdownOpen) => {
        setDropdownOpen(prevState => !prevState);
    };

   
    const handleLogout = () => {
        // Perform logout logic here (e.g., clearing session, etc.)
        // Redirect to the login page
        navigate('/login');
    };


    const responsiveDrawer = (
        <div style={{ backgroundColor: "#09212E", height: "80%" }}>
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
                    <ListItemText primary="Overview Section" component={Link} to="/userdash"/>
                   
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
                <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setPickArticleOpen)}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <UploadFile />
                    </ListItemIcon>
                    <ListItemText primary="Upcoming activities" />
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
                <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setPostsOpen)}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <SchoolRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Event and Activity Management" />
                    {postsOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                </ListItemButton>
                <Collapse in={postsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/addhub">
                            <ListItemText primary="ANNOUNCEMENT" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/viewhub">
                            <ListItemText primary="view hub" />
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
                    <Typography variant="h6">
                        Dashboard
                    </Typography>
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
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 250, margin: "auto" }}>
                            <CardContent>
                                <img src='/images/computer.png' alt="Computer" style={{ width: "40%", maxWidth: "200px", height: "75%" }} />
                                <Typography gutterBottom variant="h5" component="div">
                                    Hub Count
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
                            
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    
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
                              
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  
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
        </Box>
    );
}

export default Teacherdash;




