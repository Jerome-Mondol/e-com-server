import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:      { type: String, required: true, minLength: 2 },
    email:     { type: String, required: true, unique: true },
    password:  { type: String, required: true },
    role:      { type: String, enum: ["customer", "supplier"], require: true},
    createdAt: { type: Date, default: Date.now }
})

const User = mongoose.model('User', userSchema);
export default User;