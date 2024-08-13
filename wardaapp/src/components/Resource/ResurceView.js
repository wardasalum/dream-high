import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import {
    BrowserRouter as Router,
    Routes,
    Route,

    Link,
} from "react-router-dom";
import axios from "axios";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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
import ExpandMore from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import { useNavigate, useParams } from 'react-router-dom';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    Button,
    TableRow,
    TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CollectionsBookmark, Edit, Feedback, ForkLeft, Help, PermMedia, UploadFile, Work, Clear } from "@mui/icons-material"; // Import Clear from '@mui/icons-material'

const drawWidth = 220;

function ResourceView() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [howToWriteOpen, setHowToWriteOpen] = useState(false);
    const [postsOpen, setPostsOpen] = useState(false);
    const [pickArticleOpen, setPickArticleOpen] = useState(false);
    const [improveOpen, setImproveOpen] = useState(false);
    const { id } = useParams(); // Correctly extract id from URL params

    const [resources, setResources] = useState([]);
    const [resource, setResource] = useState({
        type: "",
        name: "",
        total: ""
    });

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (id) {
            // If id exists, fetch the hub data
            fetchResource(id);
        }
        loadResources();
    }, [id]);

    // Fetch resource data by id
    const fetchResource = async (id) => {
        const response = await axios.get(`http://localhost:8080/resource/${id}`);
        setResource(response.data);
    };

    // Load all resources
    const loadResources = async () => {
        const result = await axios.get("http://localhost:8080/resources");
        setResources(result.data);
    };

    // Delete resource
    const deleteResource = async (id) => {
        await axios.delete(`http://localhost:8080/resource/${id}`);
        loadResources();
    };
    //generate report
    const generatePDF = async () => {
        const input = document.getElementById('table-to-pdf');
    
        // Generate canvas from HTML
        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL('image/png');
    
        // A4 size in mm
        const pdfWidth = 146;
        const pdfHeight = 297;
    
        // Create a new jsPDF instance with A4 size
        const pdf = new jsPDF({
            orientation: 'portrait', // or 'landscape'
            unit: 'mm',
            format: [pdfWidth, pdfHeight]
        });
    
        // Add a title to the PDF
        pdf.setFontSize(16);
        pdf.text('Resource Report', 85, 15, { align: 'center' });
    
        // Add image of the table to PDF
        const imgWidth = 190; // Adjust to fit the page width
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
        // Adjust the position of the image to leave space for the title
        pdf.addImage(imgData, 'PNG', 10, 20, imgWidth, imgHeight);
    
        // Save the PDF
        pdf.save('resource-report.pdf');
    };
    // Handle search term change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter resources based on search term
    const filteredResources = resources.filter((resource) =>
        resource.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleDropdownToggle = (setDropdownOpen) => {
        setDropdownOpen((prevState) => !prevState);
    };

    const responsiveDrawer = (
        <div style={{ backgroundColor: "#09212E", height: "100%" }}>
            <Toolbar />
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                <img src='/images/computer.png' alt="Computer" style={{ width: "60%", maxWidth: "200px", height: "75%" }} />
            </Box>
            <Divider />

            <List sx={{ backgroundColor: "#09212E" }}>
                <ListItemButton component={Link} to="/dash" sx={{ color: "white" }}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <SupervisorAccountRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Overview Section" />
                </ListItemButton>

                <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setPickArticleOpen)}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <UploadFile />
                    </ListItemIcon>
                    <ListItemText primary="Resources" />
                    {pickArticleOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                </ListItemButton>
                <Collapse in={pickArticleOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/resrcadd">
                            <ListItemText primary="ADD" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/ResurceView">
                            <ListItemText primary="View" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton sx={{ color: "white" }} onClick={() => handleDropdownToggle(setImproveOpen)}>
                    <ListItemIcon sx={{ color: "white" }}>
                        <Edit />
                    </ListItemIcon>
                    <ListItemText primary="Upcoming activities" />
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
                    <ListItemText primary="Schools" />
                    {postsOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                </ListItemButton>
                <Collapse in={postsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/addhub">
                            <ListItemText primary="add school" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/viewSChool">
                            <ListItemText primary="view school" />
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
                Logout
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
                                        <TableCell>Total</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredResources.map((resource, index) => (
                                        <TableRow key={index}>
                                            <TableCell scope="row">{index + 1}</TableCell>
                                            <TableCell>{resource.name}</TableCell>
                                            <TableCell>{resource.type}</TableCell>
                                            <TableCell>{resource.total}</TableCell>
                                            <TableCell>
                                                <IconButton color="primary" component={Link} to={`/editresource/${resource.id}`}>
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton color="error" onClick={() => deleteResource(resource.id)}>
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

export default ResourceView;
