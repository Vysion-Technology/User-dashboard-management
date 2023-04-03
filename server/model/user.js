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
    level: {
        type : String,
    },
    myPar :{
        type: String,
    }
})



const User = mongoose.model('user',userSchema);
export default User;

