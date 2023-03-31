
import User from '../model/user.js';
import formSchema from '../model/form.js';
import addMemberSchema from '../model/addMember.js';


export const signupUser = async (request, response) => {
    try{
        const user = request.body;


        const newUser = new User(user);
        await newUser.save();
        response.status(200).json({ msg : 'Signup Successfully'});
    }catch (error){
        response.status(500).json({msg:'Error while Signup'});
    }
}

export const loginUser = async (request, response) => {
    let user = await User.findOne({ userName : request.body.userName });
    if(!user){
        response.status(400).json({ msg : 'Username doest not match'});
    }
    try{
        if(request.body.password === user.password){
            response.status(200).json({ msg : 'Login Successfully'});
        }
        else{
            response.status(400).json({ msg : 'Password doest not match'});
        }
        
    }catch (error){
        response.status(500).json({msg:'Error while login'});
    }
}

export const formData = async (request, response) => {
    try{
        const user = request.body;

        const newUser = new formSchema(user);
        await newUser.save();

        response.status(200).json({ msg : 'Formed data save Successfully'});
    }catch (error){
        response.status(500).json({msg:'Error while form data saving'});
    }
}

export const addMember = async (request, response) => {
    try{
        const user = request.body;

        const newUser = new addMemberSchema(user);
        await newUser.save();

        response.status(200).json({ msg : 'Add Member data save Successfully'});
    }catch (error){
        response.status(500).json({msg:'Error while form data saving'});
    }
}

export const getMember = async(req,res)=>{
    try{
        
        const data = await addMemberSchema.find();
        console.log(data);
        res.status(200).json(data);
    }catch (error){
        console.log("error while getting add member",error.message);
        res.status(200).send("server error");
    }
}