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

const useStyles = makeStyles(theme=>({
  navbarBox:{
    [theme.breakpoints.down("sm")]:{
      alignItems: "center",
      alignContent: "center"
    }
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
    <div className = "App">
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
    </div>
    </>
  );
}

export default App;
