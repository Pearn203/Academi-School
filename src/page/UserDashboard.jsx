import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, Avatar } from '@mui/material';
import '../css/UserDashboard.css';
import SideBar from '../scenes/global/SideBar';

function UserDashboard() {
    // State cho phần Contacts
    const [contactSearchText, setContactSearchText] = useState('');
    const [contactList, setContactList] = useState(['Samantha William', 'Tony Soap', 'Karen Hope', 'Jordan Nico', 'Nadila Adja']);

    // State cho phần Messages
    const [messageSearchText, setMessageSearchText] = useState('');
    const [messageList, setMessageList] = useState(['Samantha William', 'Tony Soap', 'Karen Hope', 'Jordan Nico', 'Nadila Adja']);

    // Lấy thông tin người dùng đang đăng nhập
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    // Lọc danh sách contact theo contactSearchText
    const filteredContacts = contactList.filter(name =>
        name.toLowerCase().includes(contactSearchText.toLowerCase())
    );

    // Lọc danh sách message theo messageSearchText
    const filteredMessages = messageList.filter(name =>
        name.toLowerCase().includes(messageSearchText.toLowerCase())
    );

    // Handler cho tìm kiếm trong Contacts
    const handleContactSearch = (event) => {
        setContactSearchText(event.target.value);
    };

    // Handler cho tìm kiếm trong Messages
    const handleMessageSearch = (event) => {
        setMessageSearchText(event.target.value);
    };

    return (
        <>
            <SideBar />
            <Box className="user-dashboard" style={{ marginLeft: "280px", padding: "16px" }}>
                {/* User Info */}
                <Box className="user-info">
                    <Avatar className="user-avatar" style={{ width: "120px", height: "120px" }} />
                    <Box className="user-details">
                        <Typography variant="h5" className="user-name" style={{ color: "#303972", fontWeight: "700" }}>
                            {currentUser ? currentUser.username : 'Nabila Azalea'}
                        </Typography>
                        <Typography className="user-role" style={{ color: "#303972", fontWeight: "600" }}>Admin</Typography>
                        <Typography className="user-location">
                            <i className="fas fa-map-marker-alt"></i> Jakarta, Indonesia
                        </Typography>
                    </Box>
                    <Box className="user-contact">
                        <Typography className="contact-item">
                            <i className="fas fa-phone"></i> +12 345 6789 0
                        </Typography>
                        <Typography className="contact-item">
                            <i className="fas fa-envelope"></i> {currentUser ? currentUser.email : 'jordan@mail.com'}
                        </Typography>
                    </Box>
                </Box>

                {/* Contacts and Messages */}
                <Box className="user-content">
                    {/* Contacts */}
                    <Box className="contacts">
                        <Box className="contacts-header">
                            <Typography variant="h6" style={{ fontWeight: "700", color: "#303972" }}>Contacts</Typography>
                            <Typography className="contacts-count">You have <span style={{ fontWeight: "700", color: "#303972" }}>{filteredContacts.length}</span> contacts</Typography>
                        </Box>
                        <TextField
                            className="search-bar"
                            placeholder="Search contacts..."
                            variant="outlined"
                            size="small"
                            value={contactSearchText}
                            onChange={handleContactSearch}
                        />
                        <Box className="contacts-list">
                            {filteredContacts.map((name, index) => (
                                <Box key={index} className="contact-item">
                                    <Avatar className="contact-avatar" />
                                    <Box className="contact-info">
                                        <Typography className="contact-name">{name}</Typography>
                                        <Typography className="contact-class">Class VII-A</Typography>
                                    </Box>
                                    <Button className="message-button">
                                        <i className="fas fa-envelope"></i>
                                    </Button>
                                </Box>
                            ))}
                        </Box>
                        <Button className="view-more">View More</Button>
                    </Box>

                    {/* Messages */}
                    <Box className="messages">
                        <Box className="messages-header">
                            <Typography variant="h6" style={{ fontWeight: "700", color: "#303972" }}>Messages</Typography>
                        </Box>
                        <TextField
                            className="search-bar"
                            placeholder="Search messages..."
                            variant="outlined"
                            size="small"
                            value={messageSearchText}
                            onChange={handleMessageSearch}
                        />
                        <Box className="messages-list">
                            {filteredMessages.map((name, index) => (
                                <Box key={index} className="message-item">
                                    <Avatar className="message-avatar" />
                                    <Box className="message-info">
                                        <Typography className="message-name">{name}</Typography>
                                        <Typography className="message-preview">Lorem ipsum dolor sit amet...</Typography>
                                    </Box>
                                    <Typography className="message-time">12:45 PM</Typography>
                                    <Box className="message-status">
                                        <Typography>2</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                        <Button className="view-more">View More</Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default UserDashboard;
