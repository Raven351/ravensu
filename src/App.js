import React from 'react';
import {Route} from 'react-router-dom'
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
  app:{
    position: "absolute",
    top: 0,
    left: 0,
    width: "99%",
    [theme.breakpoints.down("sm")]:{
      alignItems: "center",
      alignContent: "center",
    }
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
    <div styles = {{zIndex: -1, position: "absolute", top: 0, left:0}} />
    <div className = {classes.app}>
      {/* <Particles params={{
        "particles":{
          "number":{
            "value": 80
          },
        }
        
      }}/> */}
      <div style = {{marginTop: 30}} color = "transparent" className = {classes.app}>
        <RavensuAppBar/>
      </div>
    </div>
    </>
  );
}

export default App;
