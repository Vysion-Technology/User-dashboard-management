import React from 'react';
import styled from "styled-components";
import MailVer from './../assets/images/mailver.png';
import { useState } from "react";
import { verifyOtp } from '../service/api';
import { useNavigate,useLocation } from "react-router-dom";
// import LoginPage from './Account/Login';
// import {Email} from LoginPage
// import LoginPage from './Account/Login';


const Container = styled.div`
  height : 100%;
  width : 100%;
  text-align: center;
`

const Input = styled.input`
box-sizing: border-box;

align-items: center;
padding: 8px 16px;

width: 320px;
height: 40px;

background: #FFFFFF;


border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: 8px;
margin: 20px 10px 20px 10px;


flex: none;
order: 0;
flex-grow: 0;
`

const Frame = styled.div`
    boxSizing: border-box;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    border: 1px solid #CBCBCB;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
    width: 516px;
    border-radius: 12px;
    padding: 60px 64px;
    gap: 10px;
  `
const Logo = styled.img`
  height: 61.33px;
  width: 120.64px;
  
 
`
const StyledText = styled.p`
  color: green;
  text-align: center;
`;

const Button = styled.button`

padding: 8px 16px;

width: 375px;
height: 44px;

background: #338FEB;
color : white;
border-radius: 8px;
margin: 40px 10px 20px 10px;
/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
border: 1px solid transparent;
`
const otpIntialValue = {
  userEmail: '',
  otp: ''
}

function Verification(props) {
  const [otp, setOTP] = useState(otpIntialValue);
  // const [userEmail, setUserEmail]= useState('');
  const location  = useLocation();
  const navigate = useNavigate();
  // setUserEmail(location.state.email);
  const userEmail = location.state.email;
  console.log(userEmail);
  const onInputChange = (e) =>{
    setOTP({...otp, [e.target.name] : [e.target.value]});
  }
  // const handleSubmit = ()=>{
  //   console.log(otp);
  //    setOTP(otp);
  // }
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   fetch("/verify-otp", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ otp }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.verified) {
  //         console.log("OTP verified successfully");
  //       } else {
  //         console.log("Invalid OTP");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error verifying OTP:", error);
  //     });
  // };
   const otpVerify = async ()=>{
     let response = await verifyOtp(otp);
     if(response){
       navigate('/login');
     }
     if(!response) return console.log("Error while calling api");
   }
    return (
    <Container>
        <Frame>
        <Logo
        src={MailVer}
        />
        <StyledText>{`An email with verification code has been sent to ${userEmail}`}</StyledText>
        <Input placeholder='Enter Verification' type='text' name='otp'  onChange={(e) => onInputChange(e)} ></Input>
        <Button type='Submit' onClick={()=> otpVerify()}>Confirm</Button>
        </Frame>
    </Container>);
}

export default Verification;