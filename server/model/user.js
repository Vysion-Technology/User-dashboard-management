import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
    userName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type:Boolean,
        default:false,
    }
})



const User = mongoose.model('user',userSchema);
export default User;

