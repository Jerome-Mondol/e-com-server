import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db.js';
import userRoutes from './routes/users.routes.js'

const app = express();
const PORT = process.env.PORT || 5000

dotenv.config();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);



app.get('/health', (req, res) => {
    res.send("Health good!");
})
app.listen(PORT, (() => console.log("Server running on port", PORT)))


