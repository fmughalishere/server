import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import passport from 'passport';
import { Server } from 'socket.io';
import './passport-config.js';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';
import cityRoutes from './routes/cityRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/userRoutes.js';
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
app.use(passport.initialize());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/cities', cityRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
const activeVisitors = new Map();
io.on("connection", (socket) => {
    console.log("New User Connected:", socket.id);
    socket.emit("updateVisitorsList", Array.from(activeVisitors.values()));
    socket.on("registerVisitor", (userData) => {
        activeVisitors.set(socket.id, {
            id: socket.id,
            name: userData.name,
            role: userData.role,
            location: userData.location
        });
        console.log(`Live Now: ${activeVisitors.size}`);
        io.emit("updateVisitorsList", Array.from(activeVisitors.values()));
    });
    socket.on("disconnect", () => {
        if (activeVisitors.has(socket.id)) {
            activeVisitors.delete(socket.id);
            console.log(`User Left. Total: ${activeVisitors.size}`);
            io.emit("updateVisitorsList", Array.from(activeVisitors.values()));
        }
    });
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
//# sourceMappingURL=index.js.map