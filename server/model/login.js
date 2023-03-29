import mongoose from 'mongoose';



const loginSchema = mongoose.Schema({
    userName : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
})



const loginUserSchema = mongoose.model('login',loginSchema);
export default loginUserSchema;