import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { StudentContext } from '../StudentContext';
import { useContext } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SideBar from '../scenes/global/SideBar';

function StudentDetail() {
  const { studentId } = useParams();
  const { students } = useContext(StudentContext);
  const student = students.find(item => item.id.replaceAll('#', '') === studentId);

  if (!student) {
    return <Typography>Student not found</Typography>;
  }

  return (
    <>
    <SideBar></SideBar>
    <Box display="flex" justifyContent="center" padding="30px" marginLeft="80px">
    <Box p = {4} 
    sx = {{width: '840px', height: "378px", borderRadius: "20px", 
    backgroundColor: "white"}}>
    <Typography variant="h4">{student.name}</Typography>
    <Typography sx = {{color : "gray"}}>Student</Typography>
    <Box marginTop="40px" display="flex" justifyContent="space-between">
      <Box>
        <Typography>Parent</Typography>
        <Box display="flex">
            <PersonIcon></PersonIcon>
            <Typography variant="body1">{student.parent}</Typography>
        </Box>
      </Box>

      <Box>
        <Typography>Phone</Typography>
        <Box display="flex">
            <LocalPhoneIcon></LocalPhoneIcon>
            <Typography variant="body1">{student.phone}</Typography>
        </Box>
       
      </Box>

      <Box>
        <Typography>City</Typography>
        <Box display="flex">
            <LocationOnIcon></LocationOnIcon>
            <Typography variant="body1">{student.city}</Typography>
        </Box>
        
      </Box>

      <Box>
        <Typography>Email</Typography>
        <Box display="flex">
            <EmailIcon></EmailIcon>
            <Typography variant="body1">{student.email}</Typography>
        </Box>
        
      </Box>
    
      
    </Box>
    </Box>
    </Box>
    </>
  );
}

export default StudentDetail;