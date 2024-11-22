import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path"; // For serving static files

const app = express();

// Serve static files (optional, for built React app)
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "dist"))); // Adjust the "dist" path if needed

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO server
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:5173", // Use environment variable or local URL
    methods: ["GET", "POST"],
  },
});

// Handle socket connections
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Listen for incoming messages
  socket.on("message", (message) => {
    console.log("Received message:", message);
    io.emit("message", message); // Emit the message to all connected clients
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});