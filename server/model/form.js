import mongoose from 'mongoose';



const form = mongoose.Schema({
    companyName : {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pinCode: {
        type: String,
        required: true,
    },
    regional: {
        type: String,
        required: true,
    },
    uploaded: {
        type: String,
        required: true,
    }
})



const formSchema = mongoose.model('formData',form);
export default formSchema;