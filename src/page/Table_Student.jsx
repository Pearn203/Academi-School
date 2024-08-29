import React, { useContext, useEffect } from 'react';
import { Box, Typography, IconButton, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search";
import SideBar from '../scenes/global/SideBar';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';
import { StudentContext } from '../StudentContext';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import DeleteIcon from '@mui/icons-material/Delete';
import Menu from '@mui/material';
function Table_Student() {
  const {students, setStudents} = useContext(StudentContext);
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);
  const columns = [
    { field: "id", headerName: "Id" },
    { field: "name", headerName: "Name", flex: 0.5, renderCell: (params) =>(
      <Link to={`/Student/${params.row.id.replaceAll('#', '')}`}>
        {params.value}
      </Link>
    ) },
    { field: "parent", headerName: "Parent", flex: 0.5 },
    { field: "date", flex: 0.5, headerName: "Date", editable: true },
    { field: "city", flex: 0.5, headerName: "City", editable: true },
    { field: "grade", flex: 0.5, headerName: "Grade" },
    { field: "contact", headerName: "Contact" ,renderCell: () => (
      <Box display="flex">
        <IconButton>
          <CallIcon/>
        </IconButton>
        <IconButton >
          <MailIcon/>
        </IconButton>
      </Box>
      )},
    { field: "action", headerName: "Action" ,renderCell: (x) => (
      <Box display="flex">
        <IconButton onClick={() => setShowDelete(x.row.id)}>
          <MoreHorizIcon />
        </IconButton>
        {showDelete === x.row.id && (
          <IconButton color='erro' onClick={() => handleDelete(x.row.id)}>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        )}
      </Box>)}
  ];

  useEffect( () => {
    let studentLst = window.localStorage.getItem('students');
    if (studentLst && studentLst != "undefined") {
      setStudents(JSON.parse(studentLst));
    }
  }, [])

  const handleNewStudent = () => {
    navigate('/AddStudent');
  };
  const handleDelete = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    window.localStorage.setItem('students', JSON.stringify(updatedStudents));
    setShowDelete(null); 
  };

  return (
    <>
      <SideBar />
      <Box paddingLeft="320px">
        <Typography variant='h4'>Student</Typography>
        <Box display="flex" justifyContent="space-around">
          <Box
            display="flex"
            bgcolor="white"
borderRadius="40px"
            width="20%"
            marginTop="20px"
            position="relative"
            right="210px"
          >
            <IconButton type="button" sx={{ padding: 1 }}>
              <SearchIcon />
            </IconButton>
            <InputBase placeholder="Search" />
          </Box>
          <Button
            variant="contained"
            sx={{
              width: '150px',
              height: '50px',
              position: 'relative',
              top: "15px",
              right: "35px"
            }}
            onClick={handleNewStudent}
          >
            New Student
          </Button>
        </Box>
        <Box m="40px 0 0 0" width="80%">
          <DataGrid
            rows={students}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Box>
    </>
  );
}

export default Table_Student