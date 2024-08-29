import React, { useState } from 'react';
import ChatSidebar from '../component/ChatSidebar';
import ChatDetail from '../component/ChatDetail';
import SideBar from '../scenes/global/SideBar';

function Chat() {
    const [selectedUser, setSelectedUser] = useState(null);
    
  
    const handleSelectUser = (user) => {
      setSelectedUser(user);
      
    };
  return (
    <>
    <SideBar></SideBar>
    <div style={{ display: 'flex', height: '100vh', width: '50%', backgroundColor: '#f5f5f5', marginLeft: '500px', borderRadius: "10px"}} >
      <ChatSidebar onSelectUser={handleSelectUser} />
      <ChatDetail selectedUser={selectedUser} />
    </div>
    </>
  );
}

export default Chat;