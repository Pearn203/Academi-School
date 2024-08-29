import React from 'react'

import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import LockIcon from "@mui/icons-material/Lock";
import Switch from "@mui/material/Switch";
import Login from  "./scenes/global/login";
import Signup from  "./scenes/global/signup";
import SideBar from './scenes/global/SideBar';
import Topbar from './scenes/global/TopBar';
function Register() {
    const navigate = useNavigate();
  



     //user
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
    <SideBar/>
   <div style={{width:"100%",marginLeft:"30px"}} >
   <Topbar></Topbar>
   </div>
    <div className="user" style={{textAlign:"center",width:"350px",margin:"auto",marginTop:"130px"}}>
    <Paper elevation={3} style={{ padding: "10px", paddingBottom: "50px" }}>
      <div>
        {checked ? (
          <Chip
            icon={<LockIcon />}
            label="Log In"
            variant="outlined"
            color="info"
            style={{ color: "#4D44B5", borderColor:"#4D44B5"}}
          />
        ) : (
          <Chip
            icon={<FaceIcon />}
            label="Sign Up"
            variant="outlined"
            color="info"
            style={{ color: "#4D44B5", borderColor:"#4D44B5"}}
          />
        )}
        <br />

        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
          style={{ color: "#4D44B5", borderColor:"#4D44B5"}}
        />
      </div>

      {checked ? <Login /> : <Signup />}
    </Paper>
    </div>
    </>

  )
}

export default Register