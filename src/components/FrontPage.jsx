import React from 'react';
import Component3 from './Component3';
import IndustryImg from './../assets/images/metallurgical-industry.png';
import  styled  from "styled-components";

const Container = styled.div`
  position: absolute;
    display:flex;
    justify-content:center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
`
const BgImg = styled.img`
  marginLeft :
  width: 50%;
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
    margin-top:0%;
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
    return (<Container>
    <Frame>
            <Title>
                STP Monitoring System
            </Title>
            <Component6 title="I am Admin"/>
            <Component7 title="I am Engineer"/>
            <Component8 title="I am team member"/>
    </Frame>
    <BgImg
        src={IndustryImg}
        />
    </Container>);
}

export default FrontPage;