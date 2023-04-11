
import User from '../model/user.js';
import formSchema from '../model/form.js';
import addMemberSchema from '../model/addMember.js';
import nodemailer from "nodemailer";
// const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "krishnapro010@gmail.com",
      pass: "iibreujfylbncubi",
    },
  });

const otp = Math.floor(100000 + Math.random() * 900000);
let signupData;
export const signupUser = async (request, response) => {
    try{
        signupData = request.body;
        // signupData = new User(user);
        // await newUser.save();
        response.status(200).json({ msg : 'Signup Successfully'});
        const mailOptions = {
            from: "krishnapro010@gmail.com",
            to: `${user.email}`,
            subject: "OTP Verification",
            text: `Your OTP for verification is ${otp}`,
          };
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });          
        //    const verifyOtp = async(request,response)=>{
        //     try{
        //         const userOtp = request.body.otp;
        //         if(userOtp === otp){
        //             const newUser = new User(user);
        //             await newUser.save();
        //             response.status(200).json({ msg : 'Signup Successfully'});
        //             // response.status(200).json({ msg : 'Otp Verify Successfully'});
        //         }
        //         else{
        //             response.status(400).json({ msg : 'Invalid Otp'});
                // }
                // const newUser = new addMemberSchema(user);
                // await newUser.save();
        
                
        //     }catch (error){
        //         response.status(500).json({msg:'Error while otp backend'});
        //     }
        // }
       
            
        
    
        
    }catch (error){
        response.status(500).json({msg:'Error while Signup'});
    }
}

export const loginUser = async (request, response) => {
    let user = await User.findOne({ userName : request.body.userName });
    console.log(request.body);
    console.log(user.level+" "+user.email);
    if(!user){
        response.status(400).json({ msg : 'Username doest not match'});
    }

   
    try{
        if(request.body.password === user.password){
            console.log(request.body.level+" "+user.level);
            if(!(request.body.level == user.level)){
                console.log("Bad Status")
                response.status(400).json({ msg : 'Level not matched'});
            }
            else        
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
        console.log(req.body.email);
        const data = await addMemberSchema.find();
        console.log(data);
        res.status(200).json(data);
    }catch (error){
        console.log("error while getting add member",error.message);
        res.status(200).send("server error");
    }
}

export const verifyOtp = async(request,response)=>{
    try{
        console.log(request.body);
        const userOtp = request.body.otp;
        const userEmail = request.body.userEmail;
        console.log(userOtp);
        console.log(otp);
        console.log(userEmail);
        if(userOtp === otp){
            // const verifiedUser = await User.findOneAndUpdate({email:userEmail}, {$set: { isVerified:true }});
            const newUser = new User(signupData);
            await newUser.save();
            await signupData.save();
            response.status(200).json({ msg : "User registered successfully"});
        }
        else{
            response.status(400).json({ msg : 'Invalid Otp'});
        }   
    }catch (error){
        response.status(500).json({msg:'Error while otp backend'});
    }
}