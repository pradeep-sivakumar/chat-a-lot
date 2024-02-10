import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import path from 'path';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectDB from "./db/connectDB.js";
import { app, server } from "./socket/socket.js";

app.use(express.json());
app.use(cookieParser());

dotenv.config();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
    connectDB();
    console.log(`Server is running in ${PORT}`);
});