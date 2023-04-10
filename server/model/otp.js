import mongoose from 'mongoose';



const otp = mongoose.Schema({
    otp : {
        type: String,
        required: true
    }
})



const otpSchema = mongoose.model('verification',otp);
export default otpSchema;