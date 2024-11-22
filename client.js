import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

// เชื่อมต่อกับ Server URL (เปลี่ยน URL เป็นของ Render)
const socket = io("https://slideme-rao3.onrender.com");

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // ฟังข้อความจาก Server
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // ทำความสะอาดเมื่อ Component ถูก Unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("message", input); // ส่งข้อความไปยัง Server
      setInput("");
    }
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "scroll" }}>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default App;