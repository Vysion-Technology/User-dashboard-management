import React from "react";
import { useState, useEffect } from "react";
import {Link} from '@mui/material';
import styled from "styled-components";
import people from './assets/images/people.png';
import { Grid } from "@material-ui/core";
import AdminSection from "./admin";
import ManagerSection from "./manager";
import union from './assets/images/Union.png';
import Add from "./Add";
import { useNavigate } from "react-router-dom";
import { getMember } from "../../../service/api";
import axios from 'axios';
import AddMember from "./from";
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
top: 43%;

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
    padding: 10px 19px;
    gap: 6px;
    margin-right: 42px;
    position: absolute;
    width: 11vw;
    height: 6vh;
    left: 87%;
    top: 45%;
    background: #338FEB;
    border-radius: 8px;
    border: none;
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
  margin-top: 1%;
`
const Box4 = styled.p`
width: 4%;
height: 16px;

font-family: 'SF Pro Text';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
/* identical to box height, or 114% */


color: #404040;
transform: rotate(0deg);
flex-grow: 2;
max-width: 21%;
flex-basis: 46%;
`
const Box5 = styled.p`
margin: 0px;
padding: 0px;
border: none;
border-bottom: 1px solid #888888;
// box-shadow: 5px 10px #888888;
`
const Box6 = styled.p`

width: 30%;
height: 1px;
font-family: 'SF Pro Text';
font-style: normal;
font-weight: 550;
font-size: 16px;
line-height: 8px;
color: #404040;

flex-grow: 0;
max-width: 22%;
flex-basis: 24%;
`

const MyTeamPage = () =>{
  const [isAdd,setIsAdd] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const navigate = useNavigate();
  const handleAdd = () =>{
    navigate('/addMember');
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const dataFromMongoDB = await axios.get(`http://localhost:8000/getAddMember`);
      console.log(dataFromMongoDB);
      setData(dataFromMongoDB.data);
    }
    fetchData();
  }, []);
   console.log(data);
   return(
   
   
    <>
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
      <Grid container spacing={6}>
        <Grid item lg={4} >
          <AdminSection/>
        </Grid>
        <Grid item lg={4}>
          <ManagerSection/>
        </Grid>
      </Grid>
      <TeamMember>Team Member</TeamMember>
      <Button onClick = {()=> handleAdd()}>
        <Plus></Plus>
        <ButtonText>Add Member</ButtonText>
      </Button>
      <Box3>
      <Grid container  >
         <Grid item lg={2} >
             <Box4>Name</Box4>
         </Grid>
         <Grid item lg={2}>
             <Box4>Post</Box4>
         </Grid>
         <Grid item lg={2}>
             <Box4>Phone</Box4>
         </Grid>
         <Grid item lg={2}>
             <Box4>Email</Box4>
         </Grid>
      </Grid>
      <Box5></Box5>
      {/* <br/> */}
      {/* <Grid container  >
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
      </Grid> */}
      {
        data.map((info) =>
       <Grid container spacing={0} >
         <Grid item lg={2}>
             <Box6>{info.name}</Box6>
         </Grid>
         <Grid item lg={2}>
             <Box6>{info.post}</Box6>
         </Grid>
         <Grid item lg={2}>
             <Box6>{info.phone}</Box6>
         </Grid>
         <Grid item lg={2}>
             <Box6>{info.email}</Box6>
         </Grid>
      </Grid>   
        
        ) 
      }
      </Box3>
     </Box1>
    
   </> 
   );
}

export default MyTeamPage;