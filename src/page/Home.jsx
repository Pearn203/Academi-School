import React, { useContext } from 'react';
import { Box, Typography, IconButton, Avatar, Button } from '@mui/material';
import Person4Icon from '@mui/icons-material/Person4';
import EventIcon from '@mui/icons-material/Event';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SideBar from '../scenes/global/SideBar';
import BumpChart from '../component/BumpChart';  // Graph cho School Performance
// import BarChart from '../component/BarChart';    // Bar chart cho School Finance
import { StudentContext } from '../StudentContext';  // Dữ liệu students
import { DataGrid } from '@mui/x-data-grid';         // Grid cho Unpaid Student
import Topbar from '../scenes/global/TopBar';
import  BarChart from '../component/BartChart'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

function Dashboard() {
  const { students } = useContext(StudentContext);

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.2 },
    { field: 'name', headerName: 'Name', flex: 0.6 },
    { field: 'grade', headerName: 'Class', flex: 0.3 },
    { field: 'Unpaid', headerName: 'Amount', flex: 0.3 },
    { field: 'action', headerName: '', renderCell: () => (
      <IconButton>
        {/* <MoreHorizIcon />*/}
      </IconButton>
    )}
  ];

  return (
    <div>
      <Topbar></Topbar>
      <SideBar />
      <Box marginLeft="280px" padding="100px 300px 0 16px">
        {/* Header Stats */}
        <Box display="flex" gap="20px" justifyContent="space-between">
          <Box bgcolor="white" borderRadius="20px" width="20%" height="132px" display="flex" alignItems="center" p="16px">
            <Person4Icon sx={{ width: '50px', height: '50px', color: '#303972' }} />
            <Box ml="16px">
              <Typography color="#A098AE">Students</Typography>
              <Typography variant="h5" color="#303972">932</Typography>
            </Box>
          </Box>
          <Box bgcolor="white" borderRadius="20px" width="20%" height="132px" display="flex" alignItems="center" p="16px">
            <Person4Icon sx={{ width: '50px', height: '50px', color: '#FF6347' }} />
            <Box ml="16px">
              <Typography color="#A098AE">Teachers</Typography>
              <Typography variant="h5" color="#303972">754</Typography>
            </Box>
          </Box>
          <Box bgcolor="white" borderRadius="20px" width="20%" height="132px" display="flex" alignItems="center" p="16px">
            <EventIcon sx={{ width: '50px', height: '50px', color: '#FFA500' }} />
            <Box ml="16px">
              <Typography color="#A098AE">Events</Typography>
              <Typography variant="h5" color="#303972">40</Typography>
            </Box>
          </Box>
          <Box bgcolor="white" borderRadius="20px" width="20%" height="132px" display="flex" alignItems="center" p="16px">
            <RestaurantIcon sx={{ width: '50px', height: '50px', color: '#FFD700' }} />
            <Box ml="16px">
              <Typography color="#A098AE">Foods</Typography>
              <Typography variant="h5" color="#303972">32k</Typography>
            </Box>
          </Box>
        </Box>

        {/* School Performance Graph */}
        <Box bgcolor="white" borderRadius="20px" mt="30px" p="16px">
          <Typography variant="h6" color="#303972">School Performance</Typography>
          <Box height="50vh" width = "100%" bgcolor="white" borderRadius="30px">
                <BumpChart></BumpChart>
          </Box>
        </Box>

        {/* School Calendar and Finance */}
        <Box display="flex" gap="20px" mt="30px">
          <Box bgcolor="white" borderRadius="20px" width="60%" p="16px">
            <Typography variant="h6" color="#303972">School Calendar</Typography>
            <Box 
            sx={{
            '& .fc-toolbar-title': {
              fontSize: '17px', 
            },
            '& .fc-button': {
              fontSize: '12px',
              padding: '5px 10px', 
            },
            '& .fc-toolbar.fc-header-toolbar': {
              padding: '5px 0', 
            },
          }}
        >
      <FullCalendar
        height="30vh"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
      />
    </Box>
          </Box>
          <Box bgcolor="white" borderRadius="20px" width="54%" p="16px">
            <Typography variant="h6" color="#303972">School Finance</Typography>
            <Box height = "32vh"  marginTop="10px">
              <BarChart></BarChart>
            </Box>
        </Box>
        </Box>

        {/* Unpaid Student Intuition */}
        <Box  borderRadius="20px" mt="30px" p="16px">
          <Typography variant="h6" color="#303972">Unpaid Student Intuition</Typography>
          <DataGrid
            rows={students}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5 },
              },
            }}
            pageSizeOptions={[5]}
          />
        </Box>
      </Box>

      {/* Sidebar Right Content */}
      <Box position="fixed" top="0" right="0" width="280px" height="100vh"  p="100px 0 0 0">
        {/* Recent Students */}
        <Box bgcolor="white" borderRadius="20px" p="16px" mb="20px">
          <Typography variant="h6" color="#303972">Recent Students</Typography>
          {students.slice(0, 4).map((student, index) => (
            <Box key={index} display="flex" alignItems="center" mt="10px">
              <Avatar />
              <Box ml="10px">
                <Typography variant="body1">{student.name}</Typography>
                <Typography variant="body2" color="#A098AE">{student.grade}</Typography>
              </Box>
            </Box>
          ))}
          <Button variant="text" color="primary">View More</Button>
        </Box>

        {/* Messages */}
        <Box bgcolor="white" borderRadius="20px" p="16px" mb="20px">
          <Typography variant="h6" color="#303972">Messages</Typography>
          {/* Messages content */}
        </Box>

        {/* Current Foods Menu */}
        <Box bgcolor="white" borderRadius="20px" p="16px">
          <Typography variant="h6" color="#303972">Current Foods Menu</Typography>
          {/* Foods content */}
          <Button variant="text" color="primary">View More</Button>
        </Box>
      </Box>
      
    </div>
  );
}

export default Dashboard;
