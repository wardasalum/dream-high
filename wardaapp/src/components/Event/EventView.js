import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import {
    Box,
    CssBaseline,
    Divider,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    Collapse,
    TextField,
    TableContainer,
    Paper,
    Table,
    TableHead,
    AppBar,
    TableBody,
    TableCell,
    TableRow,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import UploadFile from '@mui/icons-material/UploadFile';
import Edit from '@mui/icons-material/Edit';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CollectionsBookmark, Feedback,  Work, Clear } from "@mui/icons-material"; // Import Clear from '@mui/icons-material'
import {
  
    Button,
} from '@mui/material';
const drawWidth = 220;

function EventView() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activities, setActivities] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
 const [howToWriteOpen, setHowToWriteOpen] = useState(false);
    const [postsOpen, setPostsOpen] = useState(false);
    const [pickArticleOpen, setPickArticleOpen] = useState(false);
    const [improveOpen, setImproveOpen] = useState(false);
    const { id } = useParams(); // Correctly extract id from URL params

    useEffect(() => {
        loadActivities();
    }, []);

    // Load all activities
    const loadActivities = async () => {
        try {
            const result = await axios.get("http://localhost:8080/events");
            setActivities(result.data);
        } catch (error) {
            console.error("Error loading events: ", error);
        }
    };


    // Delete resource
    const deleteActivity = async (id) => {
        // Ask for confirmation before deleting
        const isConfirmed = window.confirm("Are you sure you want to delete this Activity?");
    
        if (isConfirmed) {
            try {
                // Perform the delete operation
                await axios.delete(`http://localhost:8080/event/${id}`);
                // Reload categories after deletion
                loadActivities();
            } catch (error) {
                // Handle errors here (e.g., show an error message to the user)
                console.error("Error deleting event:", error);
            }
        }
    };
    
    // Handle search term change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter activities based on search term
    const filteredActivities = activities.filter((activity) =>
        activity.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDropdownToggle = (setDropdownOpen) => {
                setDropdownOpen((prevState) => !prevState);
            };
        
    const handleToggle = () => {
        setDrawerOpen(!drawerOpen);
    };
//generate report
    const generatePDF = async () => {
        const input = document.getElementById('table-to-pdf');
    
        // Generate canvas from HTML
        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL('image/png');
    
        // A4 size in mm
        const pdfWidth = 172;
        const pdfHeight = 297;
    
        // Create a new jsPDF instance with A4 size
        const pdf = new jsPDF({
            orientation: 'portrait', // or 'landscape'
            unit: 'mm',
            format: [pdfWidth, pdfHeight]
        });
    
        // Add a title to the PDF
        pdf.setFontSize(16);
        pdf.text('Event Report', 85, 15, { align: 'center' });
    
        // Add image of the table to PDF
        const imgWidth = 190; // Adjust to fit the page width
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
        // Adjust the position of the image to leave space for the title
        pdf.addImage(imgData, 'PNG', 10, 20, imgWidth, imgHeight);
    
        // Save the PDF
        pdf.save('event-report.pdf');
    };
    
    const responsiveDrawer = (
        <div style={{ backgroundColor: "#09212E", height: "100%" }}>
            <Toolbar />
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                <img src='/images/computer.png' alt="Computer" style={{ width: "60%", maxWidth: "200px", height: "75%" }} />
            </Box>
            <Divider />
            <List sx={{ backgroundColor: "#09212E" }}>
                <ListItemButton  component={Link} to="/userdash" sx={{ color: "white" }} onClick={() => handleDropdownToggle(setHowToWriteOpen)}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <SupervisorAccountRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Overview Section"  />

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
                <Grid container spacing={1} justifyContent="center">
                    <Grid item xs={12} sm={8}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                            <TextField
                                label="Search by Name"
                                variant="outlined"
                                size="small"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <IconButton color="primary" onClick={() => setSearchTerm("")}>
                                <Clear />
                            </IconButton>
                            <Button variant="contained" color="primary" onClick={generatePDF}>
                                Generate PDF
                            </Button>
                            </Box>
                        <TableContainer component={Paper} id="table-to-pdf" height="250" border="300px" borderRadius="2px">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredActivities.map((activity, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{activity.id}</TableCell>
                                            <TableCell>{activity.name}</TableCell>
                                            <TableCell>{activity.type}</TableCell>
                                            <TableCell>{activity.description}</TableCell>
                                            <TableCell>{activity.date}</TableCell>
                                            <TableCell>
                                                <IconButton component={Link} to={`/editEvent/${activity.id}`} color="primary">
                                                    <Edit />
                                                </IconButton>
                                                <IconButton color="error" onClick={() => deleteActivity(activity.id)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default EventView;
