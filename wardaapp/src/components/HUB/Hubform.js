import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const HubForm = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const formRef = useRef(null);

  const [hubs, setHubs] = useState([]);
  const [hub, setHub] = useState({
    name: "",
    contact: "",
    location: "",
  });

  
  const { contact, name, location} = hub;
  useEffect(() => {
    if (id) {
        fetchHub(id);
    }
}, [id]);

const fetchHub = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/hub/${id}`);
        setHub(response.data); // Assuming response.data contains the activity details
    } catch (error) {
        console.error("Error fetching activity: ", error);
        // Handle error, e.g., redirect or show error message
    }
};

const onInputChange = (e) => {
    setHub({ ...hub, [e.target.name]: e.target.value });
};

const onSubmit = async (e) => {
    e.preventDefault();
    // Check if any field is empty
    if (! name || !contact || !location) {
        alert("Please fill in all fields");
        return;
    }
    try {
        if (id) {
            await axios.put(`http://localhost:8080/hub/${id}`, hub);
            alert("Hub updated successfully!");
        } else {
            await axios.post("http://localhost:8080/hub", hub);
            alert("Hub added successfully!");
        }
        navigate("/hublist");
    } catch (error) {
        console.error("Error adding/updating activity: ", error);
        alert("Failed to add/update Hub. Please try again.");
    }
};



  

  return (
    <div ref={formRef}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Paper elevation={4} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Form
            </Typography>
        <Typography style={{ color: "green" }}></Typography>
            <form onSubmit={onSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={name}
                    onChange={onInputChange} />
                   
                
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    value={location}
                    onChange={onInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Contact"
                    name="contact"
                    value={contact}
                    onChange={onInputChange} />
            
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" >{id ? 'UPDATE' : 'ADD'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
        </Grid>
      </Grid>
    </div>
  );
}

export default HubForm;

// 