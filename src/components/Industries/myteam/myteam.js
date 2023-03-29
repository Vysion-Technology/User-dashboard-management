import React from "react";
import { useState } from "react";
import {Link} from '@mui/material';
import styled from "styled-components";
import people from './assets/images/people.png';
import { Grid } from "@material-ui/core";
import AdminSection from "./admin";
import ManagerSection from "./manager";
import union from './assets/images/Union.png';

const Box1 = styled.div`
  postition: absolute;
  left: 100px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
box-sizing: border-box;

// position: absolute;
width: 79%;
height: 73.68px;
left: 0px;
top: 0px;

border-bottom: 1px solid #CBCBCB;
`
const HeaderIn1 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 16px;

position: absolute;
width: 104px;
height: 24px;
// left: 323px;
top: 26px;
`
const LogoTeam = styled.div`
width: 24px;
height: 24px;

background-image: url(${people});
/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`
const Text = styled.p`
width: 64px;
height: 20px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */


color: #404040;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`
const Box2 = styled.div`
width: 100%;
margin-top: -15px;
`
const MyTeam = styled.p`
width: 94px;
height: 4px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 28px;
/* identical to box height, or 140% */


color: #404040;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`
const Text2 = styled.p`
width: 389px;
height: 28px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 28px;
/* identical to box height, or 200% */


color: #666666;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`
const TeamMember = styled.div`
position: absolute;
width: 133px;
height: 28px;
// left: 323.82px;
top: 384px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 28px;
/* identical to box height, or 156% */

display: flex;
align-items: center;

color: #404040;
`
const Button = styled.button`
position: absolute;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 8px;
margin-right: 10px;

position: absolute;
width: 159px;
height: 44px;
left: 85%;
top: 330px;

background: #338FEB;
border-radius: 8px;
`
const Plus = styled.div`
position: absolute;
    left: 7.75%;
    right: 18.75%;
    top: 29.75%;
    bottom: 18.75%;
background-image: url(${union});
background-repeat: no-repeat;
/* white */

// background: #FFFFFF;
`
const ButtonText = styled.p`
width: 100px;
height: 28px;
left: 20px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 28px;
/* identical to box height, or 175% */

display: flex;
align-items: center;
text-align: center;

/* white */

color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`
const Box3 = styled.div`
  margin-top: 100px;
`

const MyTeamPage = () =>{
   return(
    <Box1>
     <Header>
        <HeaderIn1>
           <LogoTeam></LogoTeam>
           <Text>My Team</Text>
        </HeaderIn1>
     </Header>
     <Box2>
        <MyTeam>My Team</MyTeam>
        <Text2>View your all team in one place and manage them also</Text2>
      </Box2>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item lg={4} >
          <AdminSection/>
        </Grid>
        <Grid item lg={4}>
          <ManagerSection/>
        </Grid>
      </Grid>
      <TeamMember>Team Member</TeamMember>
      <Button>
        <Plus></Plus>
        <ButtonText>Add Member</ButtonText>
      </Button>
      <Box3>
      <Grid container  >
         <Grid item lg={2}>
             Name
         </Grid>
         <Grid item lg={2}>
             Post
         </Grid>
         <Grid item lg={2}>
             Phone
         </Grid>
         <Grid item lg={2}>
             E-Mail
         </Grid>
      </Grid>
      <Grid container  >
         <Grid item lg={2}>
             Harshit Sharma
         </Grid>
         <Grid item lg={2}>
             Inventory
         </Grid>
         <Grid item lg={2}>
             7890568743
         </Grid>
         <Grid item lg={2}>
             harshitpro010@gmail.com
         </Grid>
      </Grid>
      </Box3>
     </Box1>
   );
}

export default MyTeamPage;