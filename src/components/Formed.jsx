import React from 'react';
import styled from "styled-components";
import VysionBlackLogo1Image from './../assets/images/Login_Vysion_black_logo_1.png';

const Container = styled.div`
  height : 100%;
  width : 100%;
  text-align: center;
`

const Logo = styled.img`
    height: 61.33px;
    width: 186.64px;
    
    margin-top: 15px;
`


const Header = styled.div`
display : flex,
justify-content: center;
height : 80.78px;
width : 100%px;
background: #FFFFFF;
border-bottom: 1px solid #CBCBCB;
`

const HeaderDetails = styled.div`
text-align: left;
white-Space: pre-wrap;
font-Synthesis: none;
color: rgba(0, 0, 0, 1);
font-Style: normal;
font-Family: Inter;
font-Weight: 600;
font-Size: 18px;
letter-Spacing: 0px;
text-Decoration: none;
line-Height: 60px;
text-Transform: none;
position: absolute;
left: 42%;
top: 15%;
`
const Line1 = styled.div`
border: 2px solid rgba(51, 143, 235, 1);
width: 645.58px;

margin:auto;
top: 135px;
`
const Frame = styled.div`
    display: flex;
    isolation: isolate;
    flex-Direction: column;
    justify-Content: flex-start;
    align-Items: flex-start;
    padding: 0px;
    boxSizing: border-box;
    margin-left: auto;
    margin-right: auto;
    margin-top: 7%;
    top: 252px;
    ${'' /* border: 3px solid rgba(51, 143, 235, 1); */}
    width: 40%;
  `

  const Row = styled.div`
    display: flex;
    position: relative;
    isolation: isolate;
    flex-Direction: row;
    justify-Content: space-between;
    align-Items: center;
    padding: 0px;
    box-Sizing: border-box;
    width: 744px;
    margin-top: 0px;
  `
  const RowB = styled.div`
  display: flex;
  position: relative;
  isolation: isolate;
  flex-Direction: row;
  justify-Content: space-between;
  align-Items: center;
  padding: 0rem 13rem;
  box-Sizing: border-box;
  width: 744px;
  margin-top: 0px;
`
    
  

  const Label = styled.div`
    text-Align: left;
    white-Space: pre-wrap;
    font-Synthesis: none;
    color: rgba(95, 95, 97, 1);
    font-Style: normal;
    font-Family: Inter;
    font-Weight: 600;
    font-Size: 14px;
    letter-Spacing: 0px;
    text-Decoration: none;
    line-Height: 20px;
    text-Transform: none;
  `

 


const Input = styled.input`
box-sizing: border-box;

display: flex;
flex-direction: row;
justify-content: space-between;
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

const InputLarge = styled(Input)(({ theme }) => ({
    height: `128px`,
    width: `320px`,
}));

const InputSmall = styled(Input)(({ theme }) => ({
    width: `150px`,
}));

const InputSmallL = styled(Input)(({ theme }) => ({
    width: `150px`,
    marginRight: `-400px`,
}));

    
const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;

width: 75px;
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

const ButtonG = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;

width: 75px;
height: 44px;

background: rgba(0, 0, 0, 0.05);
border-radius: 8px;
margin: 40px 10px 20px 10px;
/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
border: 1px solid transparent;
`
  


function Formed(props) {
  return (
    <Container>
    <Header>
        <Logo
        src={VysionBlackLogo1Image}
        loading="lazy"
        alt={'Logo'}
        />
    </Header>
    <HeaderDetails>
       {`Enter all details of your Company`}
    </HeaderDetails>
    <Line1></Line1>
    <Frame>
    <Row>
    <Label>{`Industry Category`}</Label>
    <Input placeholder='Industry Name'></Input>
    </Row>
    <Row>
    <Label>{`Company Name`}</Label>
    <Input placeholder='Company Name'></Input>
    </Row>
    <Row>
    <Label>{`Address`}</Label>
    <InputLarge placeholder='City Address'></InputLarge>
    </Row>
    <Row>
    <Label>{``}</Label>
  
    <InputSmallL placeholder='City'></InputSmallL>
    <InputSmall placeholder='Pin Code'></InputSmall>
   
    </Row>
    <Row>
    <Label>{`Name of Regional CTPB`}</Label>
    <Input placeholder='Name of Regional CTPB'></Input>
    </Row>
    <Row>
    <Label>{`Status of Industry`}</Label>
    <Input placeholder='Upload Documents'></Input>
    </Row>
    <RowB>
        <Button>Save</Button>
        <Button>Submit</Button>
        <ButtonG>Print</ButtonG>
    </RowB>
    </Frame>
    </Container>
  );
}

export default Formed;
