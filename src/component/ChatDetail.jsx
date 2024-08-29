import React, { useState, useEffect } from 'react';

function ChatDetail({ selectedUser, selectedGroup }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    
    const key = selectedUser ? `user_${selectedUser.id}` : selectedGroup ? `group_${selectedGroup.id}` : null;
    if (key) {
      const storedMessages = JSON.parse(localStorage.getItem(key)) || [];
      setMessages(storedMessages);
    }
  }, [selectedUser, selectedGroup]);

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      const key = selectedUser ? `user_${selectedUser.id}` : `group_${selectedGroup.id}`;
      const newMessages = [...messages, input];
      
    
      setMessages(newMessages);
      localStorage.setItem(key, JSON.stringify(newMessages));
      setInput('');
    }
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.header}>
        {selectedUser ? ` ${selectedUser.name}` :
        
         'Select a user to start chatting'}
      </div>
      <div style={styles.messagesContainer}>
        {(selectedUser || selectedGroup) && messages.map((message, index) => (
          <div key={index} style={styles.message}>
            {message}
          </div>
        ))}
      </div>
      {(selectedUser || selectedGroup) && (
        <div style={styles.inputContainer}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            style={styles.input}
          />
          <button onClick={handleSendMessage} style={styles.sendButton}>
            Send
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  chatContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#fff',
  },
  header: {
    padding: '20px',
    borderBottom: '2px solid #007BFF',
    fontSize: '1.2em',
    backgroundColor: '#f5f5f5',
    color: '#333',
  },
  messagesContainer: {
    flex: 1,
    padding: '20px',
    overflowY: 'scroll',
    backgroundColor: '#f9f9f9',
  },
  message: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '12px',
    backgroundColor: '#e8e8e8',
    color: '#333',
    border: '2px solid #007BFF',
  },
  inputContainer: {
    display: 'flex',
    padding: '20px',
    borderTop: '2px solid #007BFF',
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '2px solid #007BFF',
    borderRadius: '8px',
    marginRight: '10px',
  },
  sendButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: '2px solid #007BFF',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default ChatDetail;