import React from 'react'
import BumpChart from '../component/BumpChart';
import { Box, Typography, IconButton } from '@mui/material';
import Person4Icon from '@mui/icons-material/Person4';
import PaidIcon from '@mui/icons-material/Paid';
import SideBar from '../scenes/global/SideBar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useContext } from 'react';
import { StudentContext } from '../StudentContext';
import { DataGrid } from '@mui/x-data-grid';
import { expenseData } from '../TableData';
import "../css/Finance.css"

function Finance() {
  const {students} = useContext(StudentContext);

  const columns = [
    { field: "id", headerName: "" },
    { field: "name", headerName: "", flex: 0.5},
    { field: "grade", flex: 0.5, headerName: "" },
    {field: "Unpaid", flex: 0.5, headerName:""},
    { field: "action", headerName: "" ,renderCell: () => (
      <IconButton>
        <MoreHorizIcon />
      </IconButton>)}
  ];
  const columns2 = [
    { field: "id", headerName: "" },
    { field: "money", headerName: "", flex: 0.5},
    { field: "state", flex: 0.5, headerName: "" },
  ];
  return (
    <div className="finance">
      <SideBar></SideBar>
        <Box marginLeft="340px" marginTop="30px">
          <Typography variant='h4' style={{color:"#303972",fontWeight:"700",fontSize:"36px",lineHeight:"54px"}}>Finance</Typography>
          <Box display="flex" gap ="20px" marginTop  = "30px" justifyContent="center">
            <Box className="finance-card" bgcolor="white" borderRadius="20px" width="300px" height="132px" display="flex">
              <Person4Icon sx = {{marginTop : "43px",marginLeft: "10px" ,width: "50px", height: "50px",color:"#4D44B5"}}></Person4Icon>
              <Box sx = {{marginTop : "25px",marginLeft: "30px"}}>
                <Typography color="#A098AE">Total Student</Typography>
                <Typography variant='h5' color="#303972">936</Typography>
                <Typography color="#A098AE"><span style={{color:"#4CBC9A"}}>+10%</span> than last month</Typography>
              </Box>
            </Box>
            <Box className="finance-card" bgcolor="white" borderRadius="20px" width="300px" height="132px" display="flex">
              <Person4Icon sx = {{marginTop : "43px",marginLeft: "10px" ,width: "50px", height: "50px",color:"#FB7D5B"}}></Person4Icon>
              <Box sx = {{marginTop : "25px",marginLeft: "30px"}}>
                <Typography color="#A098AE">Total Teacher</Typography>
                <Typography variant='h5' color="#303972">936</Typography>
                <Typography color="#A098AE"><span style={{color:"red"}}>-0.5%</span> than last month</Typography>
              </Box>
            </Box>
            <Box className="finance-card" bgcolor="white" borderRadius="20px" width="300px" height="132px" display="flex">
              <PaidIcon sx = {{marginTop : "43px",marginLeft: "10px" ,width: "50px", height: "50px",color:"#FCC43E"}}></PaidIcon>
              <Box sx = {{marginTop : "25px",marginLeft: "30px"}}>
                <Typography color="#A098AE">School Balance</Typography>
                <Typography variant='h5' color="#303972">$123,456</Typography>
                <Typography color="#A098AE"><span style={{color:"#4CBC9A"}}>+23%</span> than last month</Typography>
              </Box>
            </Box>
          </Box>

          {/*Graph*/}
          <Box display="flex" justifyContent="center" marginTop="30px"> 
            <Box height="50vh" width = "78%" bgcolor="white" borderRadius="30px">
                <BumpChart></BumpChart>
            </Box>
        </Box>
        <Box display="flex">
        <Box m="30px 0 0 130px" width="50%">
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
            pageSizeOptions={[4]}
            
          />
        </Box>
        <Box m="30px 0 0 20px" width="26%">
          <DataGrid
            rows={expenseData}
            columns={columns2}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            
          />
        </Box>
        </Box>
        </Box>
               
    </div>
  )
}

export default Finance
