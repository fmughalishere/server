import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';
import cityRoutes from './routes/cityRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/cities', cityRoutes);
app.use('/api/dashboard', dashboardRoutes);
let onlineUsers = 0;

io.on("connection", (socket) => {
  onlineUsers++;
  console.log("User connected:", onlineUsers);
  io.emit("visitorCount", onlineUsers);

  socket.on("disconnect", () => {
    onlineUsers--;
    console.log("User disconnected:", onlineUsers);

    io.emit("visitorCount", onlineUsers);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);