import React from 'react';
import styled from "styled-components";
import MailVer from './../assets/images/mailver.png';


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


function Verification(props) {
    return (<Container>
        <Frame>
        <Logo
        src={MailVer}
        />
        <StyledText>An email with verification code has been sent to yourEmail</StyledText>
        <Input placeholder='Enter Verification'></Input>
        <Button>Confirm</Button>
        </Frame>
    </Container>);
}

export default Verification;