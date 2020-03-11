import React from 'react';
import './App.css';
import Title from './components/title'
import Welcome from './components/welcome'
import { Grid, AppBar, Box } from '@material-ui/core';
import RavensuAppBar from './components/RavensuAppBar'

function App() {
  return (
    <>
    <div className = "App">
      <Box p ={4} color = "transparent">
      <RavensuAppBar/>
      </Box>

    </div>
    </>
  );
}

export default App;
