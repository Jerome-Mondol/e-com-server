import express from 'express'
import { z } from 'zod'
import { userValidatorForLogin, userValidatorForRegistration } from '../validators/userValidator.js';
import User from '../models/User.js';
import { supabase } from '../config/supabase.js';
const router = express.Router();



// registering a user
router.post('/register', async (req, res) => {
    try {
        // Validating request body;
        const validatedDataOfUser = userValidatorForRegistration.safeParse(req.body);
        if(!validatedDataOfUser.success) {
            return res.status(400).json(validatedDataOfUser.error)
        }

        const { name, email, password, role } = validatedDataOfUser.data;

        // Create a user in supabase
        const { data, error } = await supabase.auth.admin.createUser({
            email,
            password,
            email_confirm: true,
        })

        if(error) {
            return res.status(400).json(error.message);
        }
        
        const supabaseID = data.user.id;

        // Save user in mongoDB 
        const newUser = await User.create({
            name,
            email,
            password,
            role,
            supabaseID,
        })

        if(!newUser) {
            return res.status(400).json({ error: "Error in user creation" });
        }


        res.status(200).json({ newUser });

    }
    catch(err) {
        if(err instanceof z.ZodError) {
            return res.status(400).json({ errors: err })
        }
        res.status(500).json({ error: err.message });
        console.log(err);
    }
})


// Login user

router.post('/login', async (req, res) => {
    try {
        const validatedDataOfUser = userValidatorForLogin.safeParse(req.body)
        if(!validatedDataOfUser.success) {
            return res.status(400).json(validatedDataOfUser.error);
        }
        const { email, password } = validatedDataOfUser.data;

        // login using supabase
        const { data, error } = await supabase.auth.signInWithPassword({email, password});
        if(error) {
            return res.status(400).json(error.message);
        }

        res.status(200).send(data);
    }
    catch(err) {
        if(err instanceof z.ZodError) {
            return res.status(400).json({ errors: err })
            console.log(err);
        }
        res.status(500).json({ error: err.message });
        console.log(err);
    }
})



export default router;