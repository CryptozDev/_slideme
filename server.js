import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path"; // ใช้สำหรับเส้นทาง static files

const app = express(); // สร้างแอป Express

// เส้นทางไฟล์ static (สำหรับ React build)
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "dist"))); // หาก React Build ออกมาใน "dist"

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

// สร้าง HTTP Server
const server = http.createServer(app);

// สร้าง Socket.IO Server
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:5173", // เปลี่ยน URL เป็น React App URL
    methods: ["GET", "POST"],
  },
});

// เมื่อ Client เชื่อมต่อ
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // ฟังข้อความจาก Client
  socket.on("message", (message) => {
    console.log("Received message:", message);
    io.emit("message", message); // ส่งข้อความไปยังทุก Client
  });

  // เมื่อ Client ตัดการเชื่อมต่อ
  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

// เริ่มต้นเซิร์ฟเวอร์
const PORT = process.env.PORT || 3000; // ใช้ PORT จาก Environment หรือ Default 3000
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});