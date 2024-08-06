
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Box } from '@mui/material';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setFileName(event.target.files[0].name);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select a file first.");
            return;
        }

        const formData  = new formData ();
        formData.append('file', selectedFile);

        try {
            await axios.post('http://localhost:8080/upload', formData , {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert("File uploaded successfully!");
            setSelectedFile(null);
            setFileName('');
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Error uploading file.");
        }
    };


    return (
        <div className='Container'>
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', minHeight: '100vh' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <Typography variant="h6">Upload a File</Typography>
            <TextField
                type="file"
                onChange={handleFileChange}
                sx={{ mb: 2 }}
            />
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {fileName}
            </Typography>
            <Button variant="contained" onClick={handleUpload}>Upload</Button>
          
        </Box>
        </MDBContainer>
        </div>
    )
}

export default FileUpload;