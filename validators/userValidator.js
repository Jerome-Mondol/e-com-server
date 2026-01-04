import { z } from 'zod';

export const userValidatorForRegistration = z.object({
    name:       z.string().min(2),
    email:      z.string().email(), 
    password:   z.string().min(6),
    role:       z.enum(["customer", "supplier"]),
})

export const userValidatorForLogin = z.object({
    email:    z.string().email(),
    password: z.string().min(6) 
})