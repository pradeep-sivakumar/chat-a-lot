import express from "express";
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectDB from "./db/connectDB.js";
const app = express();

dotenv.config();
app.use(express.json()); 
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hii hello");
})

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running in ${PORT}`);
});