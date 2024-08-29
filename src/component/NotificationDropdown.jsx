import React from 'react';
import { Box, Typography, MenuItem, Menu } from '@mui/material';
import { useState } from 'react';

const notifications = [
  { id: 1, text: "Hello" },
  { id: 2, text: "Your class is begin" },
  { id: 3, text: "Reminder: History at 10 AM" }
];

const NotificationDropdown = ({ anchorEl, handleClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: 300,
          maxWidth: '100%',
          backgroundColor: '#fff',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Box p={2}>
        <Typography variant="h6">Notifications</Typography>
        {notifications.map((notification) => (
          <MenuItem key={notification.id}>
            <Typography variant="body2">{notification.text}</Typography>
          </MenuItem>
        ))}
      </Box>
    </Menu>
  );
};

export default NotificationDropdown;