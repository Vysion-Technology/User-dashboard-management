import React from "react";
import { useState } from "react";
import {Link} from '@mui/material';
import styled from "styled-components";
import Logo from "../../logo1.jpg";


const Grid1 = styled.div`
    position: relative;
    display:flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 100vh;
    left: 0px;
    top: 0px;

    background: #FFFFFF;
`;

const Signup = styled.div`
    box-sizing: border-box;

    position: absolute;
    width: 400px;
    height: 500px;
    // left: 702.08px;
    // top: 284.52px;

    background: #FFFFFF;
  /* Grey/disabled

  Previous style:
  Grey/disabled
  */
  border: 1px solid #CBCBCB;
  /* Layer Shadow */

    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`;
const Login = styled.div`
    box-sizing: border-box;

    position: absolute;
    width: 400px;
    height: 400px;
    // left: 702.08px;
    // top: 284.52px;

    background: #FFFFFF;
  /* Grey/disabled

  Previous style:
  Grey/disabled
  */
  border: 1px solid #CBCBCB;
  /* Layer Shadow */

    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`;
const Logologin = styled.div`
    position: relative;
    width: 284.47px;
    height: 93.48px;
    // margin-left: 630px;
    // margin-top: 60px;
    display: flex;
    margin: auto;
    transform: translate(10px, 190px);
    background-image: url(${Logo});

    /* Inside auto layout */
    z-index: 1;
    flex: none;
    // order: 0;
    flex-grow: 0;
`;
const Logosignup = styled.div`
    position: relative;
    width: 284.47px;
    height: 93.48px;
    // margin-left: 630px;
    // margin-top: 60px;
    display: flex;
    margin: auto;
    transform: translate(10px, 150px);
    background-image: url(${Logo});

    /* Inside auto layout */
    z-index: 1;
    flex: none;
    // order: 0;
    flex-grow: 0;
`;

const Message = styled.div`
    width: 358px;
    height: 40px;
    margin-top: 60px;
    margin-left: 17px;

    /* 14 Regular */

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    text-align: center;

    /* Grey/Tertiary */

    color: #A1A0A3;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;
const Box = styled.div`
    //  border: 2px solid red;
    margin: 45px 10px 20px 10px;
`;
const UserName = styled.input`
    Property 1
    Default
    Width
    388px
    Height
    40px
    Radius
    8px
    Padding
    8px, 16px, 8px, 16px
    Justify
    space-between
    #000000
    10%
    #FFFFFF
    1px
    All sides
    Black/10%
    #000000
    10%
    Inner alignment
    /* Component 7 */


    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 16px;

    width: 320px;
    height: 30px;

    background: #FFFFFF;
    /* Black/10% */

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 20px 10px 20px 10px;
    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;

const Password = styled.input`
    /* Component 3 */


    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 16px;

    width: 352px;
    height: 40px;

    /* White/100% */

    background: #FFFFFF;
    /* Black/10% */

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 20px 10px 20px 10px;
    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;

const LoginButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 16px;

    width: 355px;
    height: 40px;
    border: none;
    color: #ffff;
    background: #338FEB;
    border-radius: 8px;
    margin: 20px 10px 20px 10px;
    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;

const Signupdiv = styled.div`
    width: 210px;
    height: 20px;

    /* 14 Regular */

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    text-align: center;
    margin-left: 80px;
    margin-top: 40px;
    /* Grey/Tertiary */

    color: #A1A0A3;


    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
`;

const StyledLink = styled(Link)`
  color: Blue;
  text-decoration: none;
  margin: 1rem;
  padding-left: 1px;
  position: relative;
`;

 const signupInitialValues = {
     userName: '',
     email: '',
     password: ''
 }
const LoginPage = ()=> {

   const [account, toggleAccount] = useState('login');
   const [signup, setSignup] = useState(signupInitialValues);

   const toggleSignup = () =>{
        account === 'login'? toggleAccount('signup') : toggleAccount('login');
   }
   const onInputChange = (e) =>{
        setSignup({ ...signup,[e.target.name]: e.target.value});
   }
    return(
        <>
     {
         account === 'login'?
                <>
                <Logologin></Logologin>
                <Grid1>

                  <Login>
                    <Message>Welcome to the STP monitoring dashboard
                            designed and developed by vysion technology pvt ltd.</Message>
                    <Box>
                    <UserName placeholder='Username or Email'></UserName>
                    <Password placeholder='Password' type='password'></Password>
                    <LoginButton>Login</LoginButton>
                    </Box>
                    <Signupdiv>Don’t have an account?<StyledLink variant="text" onClick={()=> toggleSignup()}>Sign up</StyledLink></Signupdiv>
                  </Login>
                </Grid1> 
                </>
            :
                   <>
                   <Logosignup></Logosignup>
                    <Grid1>

                      <Signup>
                      <Message>Welcome to the STP monitoring dashboard
                              designed and developed by vysion technology pvt ltd.</Message>
                      <Box>
                      <UserName placeholder='Username' onChange={(e) => onInputChange(e) } name='Username'></UserName>
                      <UserName placeholder='Email' onChange={(e) => onInputChange(e) } name='Email'></UserName>
                      <Password placeholder='Password' type='password' onChange={(e) => onInputChange(e) } name='Password'></Password>
                      <Password placeholder='Re-Password' type='password' onChange={(e) => onInputChange(e) } name='Re-Password'></Password>
                      <LoginButton>Signup</LoginButton>
                      </Box>
                     
                      <Signupdiv>Have an account?<StyledLink onClick={()=> toggleSignup()}>Log in</StyledLink></Signupdiv>
                    </Signup>
                  </Grid1>
                  </>
         }
    </>
    );
}

export default LoginPage;