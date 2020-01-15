import React from 'react';
import './App.css';
import Title from './components/title'
import Welcome from './components/welcome'
import { Grid } from '@material-ui/core';

function App() {
  return (
    <>
    <div className="App">
      <Grid container className = "title">
        <Grid item xs ={8} m={6} className = "title">
          <Title/>
        </Grid>
        <Grid item xs = {4} m={6}>
          <Welcome className = "welcome"/>
        </Grid>
      </Grid>
    </div>
    </>
  );
}

export default App;
