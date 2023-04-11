import mongoose from 'mongoose';



const add = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    // level: {
    //     type: String
    // },
    // myPar: {
    //     type: String
    //     // required: true,
    // }
})



const addMemberSchema = mongoose.model('TeamMember',add);
export default addMemberSchema;