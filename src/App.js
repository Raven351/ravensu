import React from 'react';
import './App.css';
import Title from './components/title'
import Welcome from './components/welcome'
import { Grid, AppBar, Box } from '@material-ui/core';
import RavensuAppBar from './components/RavensuAppBar'
import Particles from 'react-particles-js'

function App() {
  return (
    <>

    <div className = "App">
      <Box p ={4} color = "transparent">
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
