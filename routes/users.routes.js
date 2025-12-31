import express from 'express'
import { z } from 'zod'
import { userValidator } from '../validators/userValidator.js';
import User from '../models/User.js';
const router = express.Router();


router.post('/create', async (req, res) => {
    try {
        const validatedDataOfUser = userValidator.parse(req.body);
        const newUser = new User(validatedDataOfUser);
        await newUser.save();

        res.status(201).json({ message: "User created successfully", user: newUser })
    }
    catch(err) {
        if(err instanceof z.ZodError) {
            return res.status(400).json({ errors: err.errors })
        }
        res.status(500).json({ error: err.message });
    }
})

export default router;