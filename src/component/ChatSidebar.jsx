import React, { useState } from 'react';

const users = [
    { id: 1, name: 'Samatha Wiliam' },
    { id: 2, name: 'John Doe' },
    { id: 3, name: 'Jane Smith' },
    { id: 4, name: 'Michael Johnson' },
    { id: 5, name: 'Emily Davis' },
    { id: 6, name: 'Robert Brown' },
    { id: 7, name: 'Olivia Wilson' },
    { id: 8, name: 'William Taylor' },
    { id: 9, name: 'Sophia Anderson' },
    { id: 10, name: 'James Martinez' },
    { id: 11, name: 'Isabella Thomas' },
  ];

function ChatSidebar({ onSelectUser }) {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.sidebar}>
      <h3 style={styles.header}>Messages</h3>
      <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
        <input
          style={{ borderRadius: '10px', padding: '5px', width: '90%' }}
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul style={styles.userList}>
        {filteredUsers.map(user => (
          <li
            key={user.id}
            style={styles.userItem}
            onClick={() => onSelectUser(user)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    width: '250px',
    borderRight: '1px solid #ddd',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '10px 0',
    borderRadius: '8px',
    borderBottom: '2px solid black',
  },
  header: {
    padding: '0 20px',
    marginBottom: '20px',
    fontSize: '1.2em',
    color: '#333',
  },
  userList: {
    listStyle: 'none',
    padding: '0',
  },
  userItem: {
    padding: '10px 20px',
    cursor: 'pointer',
    color: '#555',
    borderBottom: '1px solid #ddd',
    transition: 'background-color 0.3s',
  },
  userItemHover: {
    backgroundColor: '#e8e8e8',
  },
};

export default ChatSidebar;
