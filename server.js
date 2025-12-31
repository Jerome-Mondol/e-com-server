import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

connectDB();

