// File: src/pages/Chat.js
import React, { useEffect, useState } from 'react';
import './Chat.css';

function Chat() {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    setMessages(storedMessages);
  }, []);

  const handleSend = () => {
    if (!name || !msg.trim()) return;

    const newMessage = {
      name,
      msg,
      timestamp: new Date().toLocaleTimeString()
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
    setMsg('');
  };

  return (
    <div className="page chat">
      <h2>💬 Offline Chat with Classmates</h2>

      <div className="chat-box">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="chat-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <div className="messages">
          {messages.map((m, index) => (
            <div className="message" key={index}>
              <strong>{m.name}</strong>: {m.msg}
              <span className="timestamp"> ({m.timestamp})</span>
            </div>
          ))}
        </div>

        <div className="send-section">
          <input
            type="text"
            placeholder="Type your message..."
            className="chat-input"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend} className="send-button">📨 Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
