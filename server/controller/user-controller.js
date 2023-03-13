
import User from '../model/user.js';

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