import React from "react";
import { useState } from "react";
import {Link} from '@mui/material';
import styled from "styled-components";
import cctv from './img/cctv.png';
import cpcb from './img/cpcb.png';
import dashboard from "./img/dashboard.png";
import industries from './img/industries.png';
import inventory from './img/inventory.png';
import myteam from './img/myteam.png';
import notification from './img/notification.png';
import process from './img/process.png';
import reports from './img/reports.png';
const Container = styled.div`
      
position: relative;
width: 303px;
height: 1080px;
left: 0px;
top: 0px;

background: #273647;
`
const Box1 = styled.div`
/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 24px;

position: absolute;
width: 303px;
height: 688px;
left: 0px;
top: 126px;

`
const Menu = styled.div`
/* Auto layout */

display: flex;
flex-direction: row;
// align-items: center;
padding: 0px 35px;
gap: 28px;

width: 303px;
height: 32px;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;

`
const InnerMenu = styled.div`
/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 28px;

width: 137.78px;
height: 20px;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`
const MostInnerMenu = styled.div`
/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 16px;

width: 106.78px;
height: 20px;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`
const LogoDashboard = styled.div`
width: 40%;
height: 110%;
margin-left: 60px;
// background: #F7F9FB;
background-image: url(${dashboard});
background-repeat: no-repeat;
// z-index: -1;
/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`
const LogoIndustries = styled.div`
width: 40%;
height: 110%;
margin-left: 60px;
// background: #F7F9FB;
background-image: url(${industries});
background-repeat: no-repeat;
// z-index: -1;
/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`
const LogoNotification = styled.div`
width: 40%;
height: 110%;
margin-left: 60px;
// background: #F7F9FB;
background-image: url(${notification});
background-repeat: no-repeat;
// z-index: -1;
/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`
const LogoProcess = styled.div`
width: 40%;
height: 110%;
margin-left: 60px;

// background: #F7F9FB;
background-image: url(${process});
background-repeat: no-repeat;
// z-index: -1;
/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`
const LogoCpcb = styled.div`
width: 40%;
height: 110%;
margin-left: 60px;
// background: #F7F9FB;
background-image: url(${cpcb});
background-repeat: no-repeat;
// z-index: -1;
/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`
const LogoInventory = styled.div`
width: 40%;
height: 110%;
margin-left: 60px;
// background: #F7F9FB;
background-image: url(${inventory});
background-repeat: no-repeat;
// z-index: -1;
/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`
const LogoReports = styled.div`
width: 40%;
height: 110%;
margin-left: 60px;
// background: #F7F9FB;
background-image: url(${reports});
background-repeat: no-repeat;
// z-index: -1;
/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`
const LogoCctv = styled.div`
width: 40%;
height: 110%;
margin-left: 60px;
// background: #F7F9FB;
background-image: url(${cctv});
background-repeat: no-repeat;
// z-index: -1;
/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`
const LogoMyteam = styled.div`
width: 40%;
height: 110%;
margin-left: 60px;
// background: #F7F9FB;
background-image: url(${myteam});
background-repeat: no-repeat;
// z-index: -1;
/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`


const Text = styled.p`
width: 150px;
height: 20px;

/* 14 Regular */

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */
// white-space: nowrap;
// overflow: hidden;
// text-overflow: ellipsis;

color: #F7F9FB;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`
const CompanyName = styled.div`
position: absolute;
width: 150px;
height: 20px;
left: 58px;
top: 26px;

/* desktop / headings / h4 */

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 112%;
/* or 20px */


/* Base/White */

color: #FFFFFF;
`


const SideBar = () =>{
    return(
        <Container>
          <CompanyName>Company Name</CompanyName>
           <Box1>
               <Menu>
                 <InnerMenu>
                   <MostInnerMenu>
                      <LogoDashboard ></LogoDashboard>
                      <Text >Dashboard</Text>
                   </MostInnerMenu>
                 </InnerMenu>
               </Menu>
               <Menu>
                 <InnerMenu>
                   <MostInnerMenu>
                      <LogoIndustries ></LogoIndustries>
                      <Text>Industries</Text>
                   </MostInnerMenu>
                 </InnerMenu>
               </Menu>
               <Menu>
                 <InnerMenu>
                   <MostInnerMenu>
                      <LogoNotification></LogoNotification>
                      <Text>Notifications/Notice</Text>
                   </MostInnerMenu>
                 </InnerMenu>
               </Menu>
               <Menu>
                 <InnerMenu>
                   <MostInnerMenu>
                      <LogoProcess></LogoProcess>
                      <Text>Process Management</Text>
                   </MostInnerMenu>
                 </InnerMenu>
               </Menu>
               <Menu>
                 <InnerMenu>
                   <MostInnerMenu>
                      <LogoCpcb></LogoCpcb>
                      <Text>CPCB/PPCB</Text>
                   </MostInnerMenu>
                 </InnerMenu>
               </Menu>
               <Menu>
                 <InnerMenu>
                   <MostInnerMenu>
                      <LogoInventory></LogoInventory>
                      <Text>Inventory</Text>
                   </MostInnerMenu>
                 </InnerMenu>
               </Menu>
               <Menu>
                 <InnerMenu>
                   <MostInnerMenu>
                      <LogoReports></LogoReports>
                      <Text>Reports</Text>
                   </MostInnerMenu>
                 </InnerMenu>
               </Menu>
               <Menu>
                 <InnerMenu>
                   <MostInnerMenu>
                      <LogoCctv></LogoCctv>
                      <Text>CCTV Footage</Text>
                   </MostInnerMenu>
                 </InnerMenu>
               </Menu>
               <Menu>
                 <InnerMenu>
                   <MostInnerMenu>
                      <LogoMyteam></LogoMyteam>
                      <Text>My Team</Text>
                   </MostInnerMenu>
                 </InnerMenu>
               </Menu>
           </Box1>
        </Container>
    );
}

export default SideBar;