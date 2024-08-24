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
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
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
    TableRow,
    TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CollectionsBookmark, Edit, Feedback, ForkLeft, Help, PermMedia, UploadFile, Work, Clear } from "@mui/icons-material"; // Import Clear from '@mui/icons-material'

const drawWidth = 220;

function RequestApproval() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [howToWriteOpen, setHowToWriteOpen] = useState(false);
    const [postsOpen, setPostsOpen] = useState(false);
    const [pickArticleOpen, setPickArticleOpen] = useState(false);
    const [improveOpen, setImproveOpen] = useState(false);
    const { id } = useParams(); // Correctly extract id from URL params

    const [requests, setRequests] = useState([]);
    const [request, setRequest] = useState({
        description: "",
        name: "",
        quantity: ""
    });

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (id) {
            // If id exists, fetch the hub data
            fetchRequest(id);
        }
        loadRequests();
    }, [id]);

    // Fetch resource data by id
    const fetchRequest = async (id) => {
        const response = await axios.get(`http://localhost:8080/request/${id}`);
        setRequest(response.data);
    };



    // Load all resources
    const loadRequests = async () => {
        const result = await axios.get("http://localhost:8080/requests");
        setRequests(result.data);
    };


        // Delete request
        const deleteRequest = async (id) => {
            // Ask for confirmation before deleting
            const isConfirmed = window.confirm("Are you sure you want to delete this Request?");
        
            if (isConfirmed) {
                try {
                    // Perform the delete operation
                    await axios.delete(`http://localhost:8080/request/${id}`);
                    // Reload categories after deletion
                    loadRequests();
                } catch (error) {
                    // Handle errors here (e.g., show an error message to the user)
                    console.error("Error deleting request:", error);
                }
            }
        };


    // Handle search term change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter resources based on search term
    const filteredRequests = requests.filter((request) =>
        request.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleDropdownToggle = (setDropdownOpen) => {
        setDropdownOpen((prevState) => !prevState);
    };

    const handleApprove = async (id) => {
        try {
            const response = await axios.put(`http://localhost:8080/requests/${id}/approve`);
            console.log('Request approved:', response.data);
            // Update local state to reflect the change
            setRequests(prevRequests => {
                return prevRequests.map(request => {
                    if (request.id === id) {
                        return { ...request, status: 'APPROVED' }; // Update status locally
                    }
                    return request;
                });
             
            });
            

           // Send notification to Dash page
           const newNotification = {
            id: Date.now(), // Generate a unique id for the notification
            message: `Request ${id} has been approved.`,
            timestamp: new Date().toLocaleString(),
        };
        axios.post('http://localhost:8080/notifications', newNotification)
            .then(() => console.log('Notification sent to Dash page'))
            .catch(error => console.error('Error sending notification:', error));
    } catch (error) {
        console.error('Error approving request:', error);
    }
};
    const responsiveDrawer = (
        <div style={{ backgroundColor: "#09212E", height: "100%" }}>
            <Toolbar />
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                <img src='/images/computer.png' alt="Computer" style={{ width: "60%", maxWidth: "200px", height: "75%" }} />
            </Box>
            <Divider />
            <List sx={{ backgroundColor: "#09212E" }}>
                <ListItemButton component={Link} to="/userdash" sx={{ color: "white" }} onClick={() => handleDropdownToggle(setHowToWriteOpen)}>
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
                    <ListItemText primary="Request List" />
                    {improveOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                </ListItemButton>
                <Collapse in={improveOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4, color: "white" }} component={Link} to="/reguestapprv">
                            <ListItemText primary="list" />
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
                        </Box>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>quantity</TableCell>
                                        <TableCell>status</TableCell>
                                        <TableCell>Action</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredRequests.map((request, index) => (
                                        <TableRow key={index}>
                                            <TableCell scope="row">{index + 1}</TableCell>
                                            <TableCell>{request.name}</TableCell>
                                            <TableCell>{request.description}</TableCell>
                                            <TableCell>{request.quantity}</TableCell>
                                            <TableCell>{request.status}</TableCell>

                                            {request.status === 'PENDING' && (
                                                <div>
                                                <Button
                         variant="contained"
                          color="primary"
                        onClick={() => handleApprove(request.id)}
                       
                >
                  Approve
                </Button>
              </div>
                    )}

                                            <TableCell>
                                                <IconButton color="error" onClick={() => deleteRequest(request.id)}>
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

export default RequestApproval;


