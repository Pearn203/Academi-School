import React, { useContext, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import {useNavigate } from 'react-router-dom';
import { StudentContext } from '../StudentContext';
import SideBar from '../scenes/global/SideBar';
import { DateProfileGenerator } from '@fullcalendar/core/internal';

function AddStudent() {
  const navigate = useNavigate();
  const { students, setStudents } = useContext(StudentContext)
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    parent: '',
    city: '',
    grade: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddStudent = () => {
    const newStudent = {
      id: `#${Date.now()}`,
      ...formData
    };
    
    const updatedStudents = [...students, newStudent];
    console.log('Updated Students:', updatedStudents);
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    navigate('/Student'); 
  };
  return (
    <>
    <SideBar></SideBar>
    <div style={{ marginLeft: "280px", padding: "16px" }}>
    <Box  paddingLeft="390px" paddingTop="30px" display="flex" flexDirection="column" alignItems="flex-start">
      <Typography variant="h5" marginBottom="20px">Add New Student</Typography>
      {/* Student info */}

      <Box bgcolor="white" borderRadius="10px" width="70%" padding="20px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
        <Typography>Student details</Typography>
        <TextField
          sx={{ width: '100%', marginBottom: '20px' }}
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <Box display="flex" justifyContent="space-between" marginBottom="20px">
          <TextField
            sx={{ width: "48%" }}
            label="Date of birth"
            name="data"
            value={formData.data}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            sx={{ width: "48%" }}
            label="Parent name"
            name="parent"
            value={formData.parent}
            onChange={handleChange}
            margin="normal"
          />
        </Box>
        <Box display="flex" justifyContent="space-between" marginBottom="20px">
          <TextField
            sx={{ width: "60%" }}
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            sx={{ width: "35%" }}
            label="Grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            margin="normal"
          />
        </Box>
        <Box display="flex" justifyContent="space-between" marginBottom="20px">
          <TextField
            sx={{ width: "60%" }}
            label="Email"
name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            sx={{ width: "35%" }}
            label="Phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
          />
        </Box>
      
    </Box>
    
    <Button variant="contained" color="primary" onClick={handleAddStudent} sx={{ marginTop: '20px' }}>
        Add Student
    </Button>
    </Box>
    </div>
   
    </>
  );
}

export default AddStudent;