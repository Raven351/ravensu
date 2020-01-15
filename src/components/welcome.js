import React from 'react'
import './welcome.css'
import { Grid } from '@material-ui/core';

const Welcome = () =>{
    return(
        <Grid item>
            <h1 className = "welcome">Welcome to the nest...</h1>
        </Grid>
    );
}
export default Welcome