import React from 'react';
import './App.css';
import Title from './components/title'
import Welcome from './components/welcome'
import AboutMe from './components/about-me'
import { Grid, Box } from '@material-ui/core';

function App() {
  return (
    <>
    <div className="App">
      <Grid container className = "header">
        <Grid item xs ={8} m={6} className = "title">
          <Title/>
        </Grid>
        <Grid item xs = {4} m={6}>
          <Welcome className = "welcome"/>
        </Grid>
        <Grid container spacing ={0} item xs={12}>
          <Grid item xs={6}>
            <Box display="flex" flexDirection="">
              <AboutMe/>
            </Box>        
          </Grid>
          <Grid item xs={6}>
            <AboutMe/>
          </Grid>
        </Grid>
      </Grid>
    </div>
    </>
  );
}

export default App;
