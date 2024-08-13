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
import { useNavigate, useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    TextField,

} from '@mui/material';
import {  Clear } from "@mui/icons-material"; 
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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

function Hublist() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [howToWriteOpen, setHowToWriteOpen] = React.useState(false);
    const [postsOpen, setPostsOpen] = React.useState(false);
    const [pickArticleOpen, setPickArticleOpen] = React.useState(false);
    const [improveOpen, setImproveOpen] = React.useState(false);
    const [errors, setErrors] = useState({});

    const { id } = useParams(); // Correctly extract id from URL params

    const [hubs, setHubs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [hub, setHub] = useState({
        name: "",
        contact: "",
        location: "",
    });

    useEffect(() => {
        if (id) {
            // If id exists, fetch the hub data
            fetchHub(id);
        }
        loadHubs();
    }, [id]);

    // Fetch hub data by id
    const fetchHub = async (id) => {
        const response = await axios.get(`http://localhost:8080/hub/${id}`);
        setHub(response.data);
    };

    // Load all hubs
    const loadHubs = async () => {
        const result = await axios.get("http://localhost:8080/hubs");
        setHubs(result.data);
    };




    // // Delete hub
    const deleteHub = async (id) => {
        // Ask for confirmation before deleting
        const isConfirmed = window.confirm("Are you sure you want to delete this hub?");

        if (isConfirmed) {
            try {
                // Perform the delete operation
                await axios.delete(`http://localhost:8080/hub/${id}`);
                // Reload categories after deletion
                loadHubs();
            } catch (error) {
                // Handle errors here (e.g., show an error message to the user)
                console.error("Error deleting hub:", error);
            }
        }
    }; 
  // Handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
};

// Filter hubs based on search term
const filteredHubs = hubs.filter((hub) =>
    hub.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        const pdfWidth = 150;
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
        pdf.save('hub-report.pdf');
    };

    const responsiveDrawer = (
        <div style={{ backgroundColor: "#09212E", height: "100%" }}>
            <Toolbar />
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                <img src='/images/computer.png' alt="Computer" style={{ width: "60%", maxWidth: "200px", height: "75%" }} />
            </Box>
            <Divider />

            <List sx={{ backgroundColor: "#09212E" }}>
                <ListItemButton component={Link} to="/userdash" sx={{ color: "white" }}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <SupervisorAccountRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Overview Section" />
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
                            <ListItemText primary="Improve 1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component="a" href="#improve2">
                            <ListItemText primary="Improve 2" />
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
                            <ListItemText primary="add hub" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/viewhub">
                            <ListItemText primary="view hub" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <Divider />

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
            <br></br> <br></br> <br></br> <br></br>
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
                                        <TableCell>Location</TableCell>
                                        <TableCell>Contact</TableCell>
                                        <TableCell>Actions</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {filteredHubs.map((hub, index) => (
                                    <TableRow key={index}>
                                    
                                            <TableCell scope="row">{index + 1}</TableCell>
                                            <TableCell>{hub.name}</TableCell>
                                            <TableCell>{hub.location}</TableCell>
                                            <TableCell>{hub.contact}</TableCell>
                                            <TableCell>
                                                <IconButton component={Link} to={`/editList/${hub.id}`} color="primary">
                                                    <Edit />
                                                </IconButton>
                                        

                                                <IconButton color="error" onClick={() => deleteHub(hub.id)}>
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

export default Hublist;
