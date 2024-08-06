import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { Button } from '@mui/material';

export default function ClassAdd() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [category, setCategory] = useState({
    roomNumber: "",
    schedule: "",
    teacherId: "",
    course: "",
    teacherName: ""
  });

  const { roomNumber, schedule, course, teacherId, teacherName } = category;

  useEffect(() => {
    // Fetch existing data if in edit mode
    if (id) {
      const fetchCategory = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/category/${id}`);
          setCategory(response.data);
        } catch (error) {
          console.error('Error fetching category:', error);
          alert('Failed to fetch category data. Please check the console for details.');
        }
      };
      fetchCategory();
    }
  }, [id]);

  const onInputChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!roomNumber || !schedule || !course || !teacherId || !teacherName) {
      alert("Please fill in all fields");
      return;
    }
    try {
      if (id) {
        await axios.put(`http://localhost:8080/category/${id}`, category);
        alert("Category updated successfully!");
      } else {
        await axios.post("http://localhost:8080/category", category);
        alert("Category added successfully!");
      }
      navigate("/ViewClass2");
    } catch (error) {
      console.error("Error adding/updating category: ", error);
      alert("Failed to add/update category. Please try again.");
    }
  };

  return (
    <div className='Container'>
      <form onSubmit={onSubmit}>
        <MDBContainer
          fluid
          className='d-flex align-items-center justify-content-center bg-image'
          style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', minHeight: '100vh' }}
        >
          <div className='mask gradient-custom-4'></div>

          <MDBCard className='m-9' style={{ maxWidth: '700px' }}>
            <MDBCardBody className='px-5 py-4'>
              <h2 className="text-uppercase text-center mb-4">ADD CLASS</h2>
              <MDBInput
                wrapperClass='mb-3'
                label='Teacher ID'
                size='md'
                id='form1'
                type='text'
                name='teacherId'
                required
                value={teacherId}
                onChange={onInputChange}
              />
               <MDBInput
                wrapperClass='mb-3'
                label='Teacher Name'
                size='md'
                id='form1'
                type='text'
                name='teacherName'
                required
                value={teacherName}
                onChange={onInputChange}
              />
              <MDBInput
                wrapperClass='mb-3'
                label='Room Number'
                size='md'
                id='form2'
                type='text'
                name='roomNumber'
                required
                value={roomNumber}
                onChange={onInputChange}
              />
              <MDBInput
                wrapperClass='mb-3'
                label='Schedule'
                size='md'
                id='form3'
                type='text'
                name='schedule'
                required
                value={schedule}
                onChange={onInputChange}
              />
              <MDBInput
                wrapperClass='mb-3'
                label='Course'
                size='md'
                id='form4'
                type='text'
                name='course'
                required
                value={course}
                onChange={onInputChange}
              />
              <Button className='mb-3 w-100 gradient-custom-4' size='md' type='submit'>
                ADD
              </Button>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </form>
    </div>
  );
}
