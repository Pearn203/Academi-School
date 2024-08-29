import { Box, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/material/Search";
import NotificationDropdown from "../../component/NotificationDropdown";
import { useNavigate } from "react-router-dom";
import './Topbar.css';

const Topbar = () => {
  const navigate = useNavigate(); // Khởi tạo useNavigate để sử dụng điều hướng
  const [username, setUsername] = useState("Admin"); // Default is Admin if no user is logged in

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.username) {
      setUsername(currentUser.username);
    }
  }, []);

  const handleRegister = () => {
    navigate("/Register"); // Điều hướng đến trang Register
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="topbar">
      {/* Search Box */}
      <Box className="search-box">
        <IconButton type="button" className="search-button">
          {/* <SearchIcon /> */}
        </IconButton>
        <InputBase placeholder="Search here..." className="search-input" />
      </Box>

      {/* Icons */}
      <Box className="icons-box">
        <IconButton className="icon-button" onClick={handleClick}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton className="icon-button">
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton className="user-info1" onClick={handleRegister} style={{ borderRadius: "10px" }}>
          <PersonOutlinedIcon />
          <span className="user-name">{username}</span>
          {/* <span className="user-role">Admin</span> */}
        </IconButton>
      </Box>
      <NotificationDropdown anchorEl={anchorEl} handleClose={handleClose} />
    </Box>
  );
};

export default Topbar;
