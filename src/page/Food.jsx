import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import {foodData} from "../TableData";
import { Link } from 'react-router-dom';
import { AdminPanelSettingsOutlined } from '@mui/icons-material';
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search";
import SideBar from '../scenes/global/SideBar';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { render } from '@testing-library/react';
function Food() {
  const columns= [
    
    {field: "name",
      headerName: "Name",
      flex: 0.5,
      
      renderCell: (params) =>(
        <Link to={`/Food/${params.row.id}`}>
          {params.value}
        </Link>
      )
    },
    {field: "star",
      headerName: "Star",
      
    },
    {field: "order",
      flex: 0.5,
      headerName: "Total order ",
    },
    {field: "interest",
      flex: 0.5,
      headerName: "Interest",
      editable: true,
    },
    {field: "percentage",
      flex: 0.5,
      headerName: ""
    },
    {field: "action",
      headerName: "Action",
      renderCell: () => (
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      )
    },
  ]
  
  return (
    <>
    <SideBar></SideBar>
    <Box paddingLeft="320px">
      <Typography style={{color:"#303972",fontWeight:"700",fontSize:"36px",lineHeight:"54px"}}>Food</Typography>
     
      <Box m = "40px 0 0 0" width="80%">
        <DataGrid rows = {foodData} columns = {columns}></DataGrid>
      </Box>
    </Box>
    </>
  )
}

export default Food