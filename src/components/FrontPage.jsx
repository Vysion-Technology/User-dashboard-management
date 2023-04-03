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
const Bgimg = styled.div`
  // marginLeft :
  background-image: url(${IndustryImg});
  width: 77%;
  height: 100%;
  margin-left: auto;
  top: 0px;
`
const Frame = styled.div`
    display: flex;
    flex-Direction: column;
    justify-Content: flex-start;
    align-Items: flex-start;
    padding: 0px;
    margin-top: 15%;
    margin-left: 10%;
    height: 100vh;
    width: 40%;
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
 
 /* Grey/Tertiary */
 
 color: #A1A0A3;
 
 
 /* Inside auto layout */
 
 flex: none;
 order: 1;
 flex-grow: 0;
 `
 const Box1 = styled.div`
//  display: flex;
 align-items: center;
 text-align: center;
 `
 const Box2 = styled.div`
  margin-top: 120px;
 `
 const Maintxt = styled.div`
 position: relative;
    left: 92.99px;
    top: 48.52px;
    right: 181px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 56px;
    line-height: 87px;
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
 const Cont = styled.div`
 position: absolute;
width: 403.99px;
height: 76px;
left: 719.99px;
top: 233.82px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;

color: #FFFFFF;
 `
const Rect1 = styled.div`
position: absolute;
width: 1125.01px;
height: 571.88px;
left: 719.99px;
top: 356px;

background: #FFFFFF;
border: 5px solid rgba(0, 0, 0, 0.29);
border-radius: 31px 0px 0px 0px;
`
const Component6 = styled(Component3)(({ theme }) => ({
    width: `404.92px`,
    height: `73px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  }));

  const Component7 = styled(Component3)(({ theme }) => ({
    width: `404.92px`,
    height: `73px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  }));

  const Component8 = styled(Component3)(({ theme }) => ({
    width: `404.92px`,
    height: `73px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  }));

  

function FrontPage(props) {

  const navigate = useNavigate();
  const [level, setLevel]=useState('');


  const navAdmin = (e) =>{
    console.log("test");
    console.log(e);
     setLevel(1);
    }
  
    const navTeam = async () =>{
      navigate('/formed');
    }
    const navEng = async () =>{
      navigate('/formed');
    }

    return (
    <Container>
      <Frame>
            <Box1>
            <Title>
                STP MONITORING SYSTEM
            </Title>
            <Msg>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, sit.</Msg>
            </Box1>
            <Box2>
            <Component6  level="1" title="I am Admin"/>
            <Component7  level="2" title="I am Engineer"/>
            <Component8  level="3" title="I am team member"/>
            </Box2>
      </Frame>
      <Bgimg>
         <Maintxt> Monitor STP plant like never before </Maintxt>
         <Cont>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quae consequatur quos praesentium distinctio  </Cont>
         <Rect1></Rect1>
      </Bgimg>
      
    </Container>);
}

export default FrontPage;