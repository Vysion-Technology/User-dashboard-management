import React, { useState } from 'react';
import Component3 from './Component3';
import IndustryImg from './../assets/images/metallurgical-industry.png';
import  styled  from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    position: fixed;
    display:flex;
    justify-content:center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
`
const RightSubContainer = styled.div`
  // marginLeft :
  alignItems: flex-end;
  background-image: url(${IndustryImg});
  width: 65%;
  height: 100%;
  margin-left: auto;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0px;
`
const LeftSubContainer = styled.div`
    display: flex;
    flex-Direction: column;
    justify-Content: flex-start;
    align-Items: flex-start;
    padding: 0px;
    margin-top: 15%;
    margin-left: 10%;
    height: 100vh;
    width: 35%;
  `

  const Title = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #404040;
`
 const Msg = styled.div`
 width: 403.99px;
 height: 3px;
 margin-top: 44px;
 font-family: 'Inter';
 font-style: normal;
 font-weight: 500;
 font-size: 16px;
 line-height: 19px;
 display: flex;
 align-items: center;
 text-align: center;
 color: #A1A0A3;
 flex: none;
 order: 1;
 flex-grow: 0;
 `
 const DivTop = styled.div`
//  display: flex;
 align-items: center;
 text-align: center;
 `
 const DivBottom = styled.div`
  margin-top: 120px;
 `
 const Heading = styled.div`
 position: relative;
    left: 92.99px;
    top: 48.52px;
    right: 181px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 3.5vw;
    line-height: 8vh;
    margin-right: 13%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-transform: uppercase;
    color: #FFFFFF;
 `
 const Content = styled.div`
 position: relative;
width: 403.99px;
height: 76px;
left: 12%;
top: 7%;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;

color: #FFFFFF; `

const MainButton = styled.div`
  white-space: pre-wrap;
  word-wrap: break-word;
  width : 404.92px;
  height: 73px;

`

const WhiteRectangle = styled.div`
position: fixed;
width: 51%;
height: 53%; 
right : 0;
bottom: 0;

background: #FFFFFF;
border: 5px solid rgba(0, 0, 0, 0.29);
border-radius: 31px 0px 0px 0px;
`



  //Used component3 as a base for Button
  const Button = styled(Component3)(({ theme }) => ({
    width: `404.92px`,
    height: `73px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  }));

  

function FrontPage(props) {
  
  //using react route 
  const navigate = useNavigate();
  

  //nav function is used to navigate to Login Page by acquiring a property of level which will decide
  // whether user is admin or engineer or team member
  // 1 : Admin , 2: Engineer , 3: Team Member

  const nav = async (myLevel) =>{
    console.log(myLevel);
    navigate('/login',{state : {  level: myLevel, color: 'green'  },});
  }  

    return (
    <Container>
      <LeftSubContainer>
            <DivTop>
            <Title>
                STP MONITORING SYSTEM
            </Title>
            <Msg>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, sit.</Msg>
            </DivTop>
            <DivBottom>
            <MainButton onClick={ () => nav("1")}><Button title="I am Admin"/></MainButton>
            <MainButton onClick={ () => nav("2")}><Button title="I am Engineer"/></MainButton>
            <MainButton onClick={ () => nav("3")}><Button title="I am team member"/></MainButton>
            </DivBottom>
      </LeftSubContainer>
      <RightSubContainer>
         <Heading> Monitor STP plant like never before </Heading>
         <Content>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quae consequatur quos praesentium distinctio  </Content>
         <WhiteRectangle></WhiteRectangle>
      </RightSubContainer>
    </Container>);
}

export default FrontPage;