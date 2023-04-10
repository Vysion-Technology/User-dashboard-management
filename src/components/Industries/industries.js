import React from "react";
import { useState } from "react";
import {Link} from '@mui/material';
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import SideBar from "./sidebar";
import MyTeamPage from "./myteam/myteam";

const Box = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`


const IndustryPage = () => {
  return(
    <Box>
    <Grid container lg={12} spacing={1}>
        <Grid item lg={2.5}>
            <SideBar/>
        </Grid>
        <Grid item lg={3}>
            <MyTeamPage/>
        </Grid>
    </Grid>
    </Box>
  );
}

export default IndustryPage;