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
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (id) {
      fetchHub(id);
    }
    loadHubs();
  }, [id]);

  const fetchHub = async (id) => {
    const response = await axios.get(`http://localhost:8080/hub/${id}`);
    setHub(response.data);
    // Scroll to the top of the form
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const loadHubs = async () => {
    const result = await axios.get("http://localhost:8080/hubs");
    setHubs(result.data);
  };

  const deleteHub = async (id) => {
    await axios.delete(`http://localhost:8080/hub/${id}`);
    loadHubs();
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(hub);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      if (id) {
        await axios.put(`http://localhost:8080/hub/${id}`, hub);
        setSuccessMessage("Data successfully updated.");
      } else {
        await axios.post("http://localhost:8080/hub", hub);
     
        setSuccessMessage("Data successfully saved.");
        setShowSuccess(true);
        setHub({
          name: "",
          contact: "",
          location: ""
        });
      }
      loadHubs();
      setErrors({});
      setTimeout(() => {
        setSuccessMessage("");
        setShowSuccess(false);
      }, 3000);
    }
  };

  const onInputChange = (e) => {
    setHub({ ...hub, [e.target.name]: e.target.value });
  };

  const validateForm = (formData) => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }

    if (!formData.location.trim()) {
      errors.location = "Location is required.";
    }

    if (!formData.contact.trim()) {
      errors.contact = "Contact is required.";
    }

    return errors;
  };

  return (
    <div ref={formRef}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Paper elevation={4} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Form
            </Typography>
            {showSuccess && <Typography style={{ color: "green" }}>{successMessage}</Typography>}
            <form onSubmit={(e) => onSubmit(e)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={hub.name}
                    onChange={(e) => onInputChange(e)}
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    value={hub.location}
                    onChange={(e) => onInputChange(e)}
                    error={!!errors.location}
                    helperText={errors.location}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Contact"
                    name="contact"
                    value={hub.contact}
                    onChange={(e) => onInputChange(e)}
                    error={!!errors.contact}
                    helperText={errors.contact}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" onClick={() => formRef.current.scrollIntoView({ behavior: "smooth" })}>
                    {id ? 'Update' : 'Add'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TableContainer component={Paper}>
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
                {hubs.map((hub, index) => (
                  <TableRow key={index}>
                    <TableCell scope="row">{index + 1}</TableCell>
                    <TableCell>{hub.name}</TableCell>
                    <TableCell>{hub.location}</TableCell>
                    <TableCell>{hub.contact}</TableCell>
                    <TableCell>
                      <IconButton color="primary" onClick={() => fetchHub(hub.id)}>
                        <EditIcon />
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
    </div>
  );
}

export default HubForm;
