import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Title from './components/title'
import Welcome from './components/welcome'
import { Grid, AppBar, Box, MuiThemeProvider } from '@material-ui/core';
import RavensuAppBar from './components/RavensuAppBar'
import {makeStyles, createMuiTheme} from '@material-ui/core'
import Particles from 'react-particles-js'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import TabPanel from './components/Routes/TabPanel'
import MainContentRouter from './components/MainContentRouter'
import {LanguageProvider} from './lang/LangaugeContext'

const useStyles = makeStyles(theme=>({
  app:{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
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
  const theme = createMuiTheme({    
    typography:{
            fontFamily:[
                '"Baloo Thambi 2"', '"Fredoka One"', '"Balsamiq Sans"', 'Bangers'
            ]
        }
    }
)
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
      <div color = "transparent" className = {classes.app}>
        <LanguageProvider>
          <MuiThemeProvider theme = {theme}>
            <RavensuAppBar/>
            <MainContentRouter/>
          </MuiThemeProvider>
        </LanguageProvider>
      </div>
    </div>
    </>
  );
}

export default App;
