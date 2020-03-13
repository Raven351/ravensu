import React from 'react';
import './App.css';
import Title from './components/title'
import Welcome from './components/welcome'
import { Grid, AppBar, Box } from '@material-ui/core';
import RavensuAppBar from './components/RavensuAppBar'
import {makeStyles } from '@material-ui/core'
import Particles from 'react-particles-js'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import TabPanel from './components/Tabs/TabPanel'

const useStyles = makeStyles(theme=>({
  navbarBox:{
    [theme.breakpoints.down("sm")]:{
      alignItems: "center",
      alignContent: "center",
    }
  },
  App:{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  siteContent:{
    position: "absolute",
    top: 128,
    left: 0,
    width: "100%",
    height: "100%"
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
    <div className = {classes.App}>
        <Box p ={4} color = "transparent" className = {classes.navbarBox}>
          <RavensuAppBar/>
        </Box>
      <Particles params={{
        "particles":{
          "number":{
            "value": 80
          },
        }
      }}/>
        <Box className = {classes.siteContent}>
          <TabPanel value = {RavensuAppBar.state.tabValue} index = {0}>

          </TabPanel>
        </Box>
    </div>
    </>
  );
}

export default App;
