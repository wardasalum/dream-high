
// import React, { useState, useEffect } from "react";
// import AppBar from "@mui/material/AppBar";
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link,
// } from "react-router-dom";
// import axios from "axios";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Collapse from "@mui/material/Collapse";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
// import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import Card from "@mui/material/Card"; // Add this line
// import CardContent from "@mui/material/CardContent";
// import ExpandMore from "@mui/icons-material/ExpandMore";

// import {
//     CollectionsBookmark,
//     Edit,
//     Feedback,
//     ForkLeft,
//     Help,
//     PermMedia,
//     UploadFile,
//     Work,
// } from "@mui/icons-material";

// const drawWidth = 220;

// function Userdash() {
//     const [drawerOpen, setDrawerOpen] = React.useState(false);
//     const [howToWriteOpen, setHowToWriteOpen] = React.useState(false);
//     const [postsOpen, setPostsOpen] = React.useState(false);
//     const [pickArticleOpen, setPickArticleOpen] = React.useState(false);
//     const [improveOpen, setImproveOpen] = React.useState(false);
//     const [adminCount, setAdminCount] = useState(0);
//     const [hubCount, setHubCount] = useState(0); // Initialize hub count state



//     useEffect(() => {
//         // Fetch the total number of admins from the backend API
//         axios.get("http://localhost:8080/admins")
//             .then(response => {
//                 setAdminCount(response.data.length); // Set the total number of admins
//             })
//             .catch(error => {
//                 console.error("Error fetching admin count:", error);
//             });
//     }, []);

//     useEffect(() => {
//         // Fetch the total number of hubs from the backend API
//         axios.get("http://localhost:8080/hubs")
//             .then(response => {
//                 setHubCount(response.data.length); // Set the total number of hubs
//             })
//             .catch(error => {
//                 console.error("Error fetching hub count:", error);
//             });
//     }, []);
    



 
//     const handleToggle = () => {
//         setDrawerOpen(!drawerOpen);
//     };

//     const handleDropdownToggle = (setDropdownOpen) => {
//         setDropdownOpen(prevState => !prevState);
//     };

//     const responsiveDrawer = (
//         <div style={{ backgroundColor: "#09212E", height: "100%" }}>
//             <Toolbar />
//             <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>

//                 <img src='/images/computer.png' alt="Computer" style={{ width: "60%", maxWidth: "200px", height: "75%" }} />

//             </Box>
//             <Divider />

//             <List sx={{ backgroundColor: "#09212E" }}>
//                 <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setHowToWriteOpen)}>
//                     <ListItemIcon sx={{ color: "white" }}>
//                         <SupervisorAccountRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText primary="ADMIN" />
//                     {howToWriteOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
//                 </ListItemButton>
//                 <Collapse in={howToWriteOpen} timeout="auto" unmountOnExit>
//                     <List component="div" disablePadding>
//                         <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/addadmin">
//                             <ListItemText primary="Add admin" />
//                         </ListItemButton>
//                         <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/viewadmin">
//                             <ListItemText primary="View admin" />
//                         </ListItemButton>
//                     </List>
//                 </Collapse>
//                 <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setPostsOpen)}>
//                     <ListItemIcon sx={{ color: "white" }}>
//                         <SchoolRoundedIcon />
//                     </ListItemIcon>
//                     <ListItemText primary="HUB" />
//                     {postsOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
//                 </ListItemButton>
//                 <Collapse in={postsOpen} timeout="auto" unmountOnExit>
//                     <List component="div" disablePadding>
//                         <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/addhub">
//                             <ListItemText primary="add hub" />
//                         </ListItemButton>
//                         <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/viewhub">
//                             <ListItemText primary="view hub" />
//                         </ListItemButton>
//                     </List>
//                 </Collapse>
//                 <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setPickArticleOpen)}>
//                     <ListItemIcon sx={{ color: "white" }}>
//                         <UploadFile />
//                     </ListItemIcon>
//                     <ListItemText primary="Pick Article" />
//                     {pickArticleOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
//                 </ListItemButton>
//                 <Collapse in={pickArticleOpen} timeout="auto" unmountOnExit>
//                     <List component="div" disablePadding>
//                         <ListItemButton sx={{ pl: 4, color: "white" }} component="a" href="#article1">
//                             <ListItemText primary="Article 1" />
//                         </ListItemButton>
//                         <ListItemButton sx={{ pl: 4, color: "white" }} component="a" href="#article2">
//                             <ListItemText primary="Article 2" />
//                         </ListItemButton>
//                     </List>
//                 </Collapse>
//                 <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setImproveOpen)}>
//                     <ListItemIcon sx={{ color: "white" }}>
//                         <Edit />
//                     </ListItemIcon>
//                     <ListItemText primary="Improve" />
//                     {improveOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
//                 </ListItemButton>
//                 <Collapse in={improveOpen} timeout="auto" unmountOnExit>
//                     <List component="div" disablePadding>
//                         <ListItemButton sx={{ pl: 4, color: "white" }} component="a" href="#improve1">
//                             <ListItemText primary="Improve 1" />
//                         </ListItemButton>
//                         <ListItemButton sx={{ pl: 4, color: "white" }} component="a" href="#improve2">
//                             <ListItemText primary="Improve 2" />
//                         </ListItemButton>
//                     </List>
//                 </Collapse>
//             </List>
//             <Divider />
//             <List>
//                 <ListItemButton sx={{ color: "white" }}>
//                     <ListItemIcon sx={{ color: "white" }}>
//                         <Feedback />
//                     </ListItemIcon>
//                     <ListItemText primary="Contact us" />
//                 </ListItemButton>
//             </List>
//             <Typography
//                 sx={{
//                     backgroundColor: "blue",
//                     color: "white",
//                     borderRadius: 10,
//                     textAlign: "center",
//                     padding: 1,
//                     margin: 2,
//                 }}
//             >
//                 Sign In
//             </Typography>

//         </div>
//     );

//     return (
//         <Box sx={{ display: "flex" }}>
//             <CssBaseline />
//             <AppBar
//                 position="fixed"
//                 sx={{
//                     width: "100%",
//                     backgroundColor: "#302a70",
//                 }}
//             >
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         edge="start"
//                         onClick={handleToggle}
//                         sx={{ mr: 2 }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6">

//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Drawer
//                 variant="temporary"
//                 open={drawerOpen}
//                 onClose={handleToggle}
//                 ModalProps={{
//                     keepMounted: true,
//                 }}
//                 sx={{
//                     "& .MuiDrawer-paper": {
//                         boxSizing: "border-box",
//                         width: drawWidth,
//                     },
//                 }}
//             >
//                 {responsiveDrawer}
//             </Drawer>
//             <Box
//                 component="main"
//                 sx={{
//                     flexGrow: 1,
//                     p: 6,
//                     width: "100%", // Ensure the main content is 100% width
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     mt: 7, // Add margin top to create space
//                 }}
//             >
//              <Card sx={{ maxWidth: 600, margin: 4 }}>
//                     <CardContent>
//                         {/* Content for the card displaying admin count */}
//                         <img src='/images/computer.png' alt="Computer" style={{ width: "40%", maxWidth: "200px", height: "75%" }} />
//                         <Typography gutterBottom variant="h5" component="div">
//                             Admin Count
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                             Total Admins: {adminCount}
//                         </Typography>
//                     </CardContent>
//                 </Card>
//                <Card sx={{ maxWidth: 600, margin: 4 }}>
//     <CardContent>
//         {/* Content for the card displaying hub count */}
//         <img src='/images/computer.png' alt="Computer" style={{ width: "40%", maxWidth: "200px", height: "75%" }} />
//         <Typography gutterBottom variant="h5" component="div">
//             HUBS
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//             Total Hubs: {hubCount}
//         </Typography>
//     </CardContent>
// </Card>

//      <Card sx={{ maxWidth: 600, margin: 4 }}>
//     <CardContent>
//         {/* Content for the card displaying hub count */}
//         <img src='/images/computer.png' alt="Computer" style={{ width: "40%", maxWidth: "200px", height: "75%" }} />
//         <Typography gutterBottom variant="h5" component="div">
//             HUBS
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//             Total Hubs: {hubCount}
//         </Typography>
//     </CardContent>
// </Card>
//             </Box>

//         </Box>
//     );
// }

// export default Userdash;


import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
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

function Userdash() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [howToWriteOpen, setHowToWriteOpen] = React.useState(false);
    const [postsOpen, setPostsOpen] = React.useState(false);
    const [pickArticleOpen, setPickArticleOpen] = React.useState(false);
    const [improveOpen, setImproveOpen] = React.useState(false);
    const [adminCount, setAdminCount] = useState(0);
    const [hubCount, setHubCount] = useState(0); // Initialize hub count state

    useEffect(() => {
        // Fetch the total number of admins from the backend API
        axios.get("http://localhost:8080/admins")
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

    const handleToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleDropdownToggle = (setDropdownOpen) => {
        setDropdownOpen(prevState => !prevState);
    };

    const responsiveDrawer = (
        <div style={{ backgroundColor: "#09212E", height: "100%" }}>
            <Toolbar />
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                <img src='/images/computer.png' alt="Computer" style={{ width: "60%", maxWidth: "200px", height: "75%" }} />
            </Box>
            <Divider />

            <List sx={{ backgroundColor: "#09212E" }}>
                <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setHowToWriteOpen)}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <SupervisorAccountRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="ADMIN" />
                    {howToWriteOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                </ListItemButton>
                <Collapse in={howToWriteOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/addadmin">
                            <ListItemText primary="Add admin" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/viewadmin">
                            <ListItemText primary="View admin" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setPostsOpen)}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <SchoolRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="HUB" />
                    {postsOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                </ListItemButton>
                <Collapse in={postsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/addhub">
                            <ListItemText primary="add hub" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/viewhub">
                            <ListItemText primary="view hub" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setPickArticleOpen)}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <UploadFile />
                    </ListItemIcon>
                    <ListItemText primary="Pick Article" />
                    {pickArticleOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                </ListItemButton>
                <Collapse in={pickArticleOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component="a" href="#article1">
                            <ListItemText primary="Article 1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component="a" href="#article2">
                            <ListItemText primary="Article 2" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setImproveOpen)}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <Edit />
                    </ListItemIcon>
                    <ListItemText primary="Improve" />
                    {improveOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                </ListItemButton>
                <Collapse in={improveOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component="a" href="#improve1">
                            <ListItemText primary="Improve 1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component="a" href="#improve2">
                            <ListItemText primary="Improve 2" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <Divider />
            <List>
                <ListItemButton sx={{ color: "white" }}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <Feedback />
                    </ListItemIcon>
                    <ListItemText primary="Contact us" />
                </ListItemButton>
            </List>
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
                Sign In
            </Typography>
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
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ maxWidth: 400, margin: "auto" }}>
                            <CardContent>
                                <img src='/images/computer.png' alt="Computer" style={{ width: "40%", maxWidth: "200px", height: "75%" }} />
                                <Typography gutterBottom variant="h5" component="div">
                                    Admin Count
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Total Admins: {adminCount}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ maxWidth: 400, margin: "auto" }}>
                            <CardContent>
                                <img src='/images/computer.png' alt="Computer" style={{ width: "40%", maxWidth: "200px", height: "75%" }} />
                                <Typography gutterBottom variant="h5" component="div">
                                    HUBS
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Total Hubs: {hubCount}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ maxWidth: 400, margin: "auto" }}>
                            <CardContent>
                                <img src='/images/computer.png' alt="Computer" style={{ width: "40%", maxWidth: "200px", height: "75%" }} />
                                <Typography gutterBottom variant="h5" component="div">
                                    HUBS
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Total Hubs: {hubCount}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Userdash;
