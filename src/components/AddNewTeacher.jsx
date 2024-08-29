import React, { useContext, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../css/AddNewTeacher.css';
import { TeacherContext } from '../TeacherContext';
import SideBar from '../scenes/global/SideBar';

function AddNewTeacher() {
  const navigate = useNavigate();
  const { teachers, setTeachers } = useContext(TeacherContext);
  const [formData, setFormData] = useState({
    name: '',
    data: '',
    parent: '',
    city: '',
    subject: '',
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

  const handleAddNewTeacher = () => {
    const newTeacher = {
      id: `#${Date.now()}`,
      ...formData
    };
    const updatedTeachers = [...teachers, newTeacher];
    setTeachers(updatedTeachers);

    // Lưu dữ liệu giáo viên vào localStorage
    localStorage.setItem('teachers', JSON.stringify(updatedTeachers));

    navigate('/Teacher');
  };

  return (
    <>
      <SideBar />
      <div className='content' style={{marginLeft: "280px",padding:"16px"}}>
      <Box paddingLeft="390px" paddingTop="30px" display="flex" flexDirection="column" alignItems="flex-start" >
        <Typography variant="h5" marginBottom="20px"  >Add New Teacher</Typography>
        
        <Box bgcolor="white" borderRadius="10px" width="70%" padding="20px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
          <Typography variant="h6" marginBottom="20px">Teacher Details</Typography>
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
              label="Date of Birth"
              name="data"
              value={formData.data}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              sx={{ width: "48%" }}
              label="Parent Name"
              name="parent"
              value={formData.parent}
              onChange={handleChange}
              margin="normal"
            />
          </Box>
          <Box display="flex" justifyContent="space-between" marginBottom="20px">
            <TextField
              sx={{ width: "48%" }}
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              sx={{ width: "48%" }}
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              margin="normal"
            />
          </Box>
<Box display="flex" justifyContent="space-between" marginBottom="20px">
            <TextField
              sx={{ width: "48%" }}
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              sx={{ width: "48%" }}
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              margin="normal"
            />
          </Box>
        </Box>
        
        <Button variant="contained" color="primary" style={{backgroundColor:"#4D44B5", borderRadius:"40px"}} onClick={handleAddNewTeacher} sx={{ marginTop: '20px' }}>
          Submit
        </Button>
      </Box>

      </div>
    </>
  );
}

export default AddNewTeacher;