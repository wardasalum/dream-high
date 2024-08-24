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
import { Button } from "@mui/material";
import { TextField } from '@mui/material';
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

function Notes() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [howToWriteOpen, setHowToWriteOpen] = React.useState(false);
    const [postsOpen, setPostsOpen] = React.useState(false);
    const [pickArticleOpen, setPickArticleOpen] = React.useState(false);
    const [improveOpen, setImproveOpen] = React.useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [description, setDescription] = useState('');
    const [uploading, setUploading] = useState(false);
    
    const navigate = useNavigate();
    


    
 
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
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('description', description);

        setUploading(true);
        try {
            await axios.post('http://localhost:8080/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('File uploaded successfully!');
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload file.');
        } finally {
            setUploading(false);
        }
    };

    const responsiveDrawer = (
        <div style={{ backgroundColor: "#09212E", height: "80%" }}>
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
                    <ListItemText primary="Announcement" />
                    {postsOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                </ListItemButton>
                <Collapse in={postsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/resrcadd">
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
          <Typography variant="h6" gutterBottom>
                Upload Notes
            </Typography>
            <input
                accept=".pdf,.doc,.docx,.ppt,.pptx"
                style={{ display: 'none' }}
                id="file-upload"
                type="file"
                onChange={handleFileChange}
            />
            <label htmlFor="file-upload">
                <Button variant="contained" component="span" startIcon={<UploadFile />}>
                    Choose File
                </Button>
            </label>
            <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={description}
                onChange={handleDescriptionChange}
                sx={{ mt: 2 }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleUpload}
                sx={{ mt: 2 }}
                disabled={uploading}
            >
                {uploading ? 'Uploading...' : 'Upload'}
            </Button>

                
            </Box>
        </Box>
    );
}

export default Notes;




