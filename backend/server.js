import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectDB from "./db/connectDB.js";
import { app, server } from "./socket/socket.js";

app.use(express.json());
app.use(cookieParser());

dotenv.config();
const PORT = process.env.PORT || 8000;

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

server.listen(PORT, () => {
    connectDB();
    console.log(`Server is running in ${PORT}`);
});