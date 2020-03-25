import React from 'react'
import {Box, Paper, makeStyles, Typography, CardHeader, Avatar, CardContent, Grid, Divider} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import ProfilePicture from "../../img/profilepicture.jpg"
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import SmsIcon from '@material-ui/icons/Sms';
import AboutCard from '../Cards/AboutCard'
import AboutDetails from '../Cards/AboutDetails'
import AboutTechs from '../Cards/AboutTechs';
import withWidth from '@material-ui/core/withWidth'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: 20,
        color: "#000000",
        backgroundColor: "#ebebeb",
        opacity: "86%",
        boxShadow: 10,
    },

    card: {
        maxWidth: 350,
        minWidth: 400
    },

    avatar:{
        backgroundColor: "#000000",
        width: theme.spacing(20),
        height: theme.spacing(20)
    },

    icon:{
        fontSize: 80,
    },

    dividerColor:{
        backgroundColor: "#000000",
        color: "#000000",
        height: 1
    }

}));

function About(){
    const classes = useStyles();
    return(
        <Grid //main container
        container
        direction = "row"
        justify = "flex-start"
        alignItems = "flex-start"
        spacing = {2}
        style = {{maxWidth: "99vw"}}            
        >
            <Grid container item md = {6} lg = {5} direction = "column" alignItems = "flex-end" justify = "flex-start">
                <AboutCard/>
            </Grid>
            <Grid container item md = {6} lg = {7} direction = "column" justify="flex-start" alignItems = "flex-start">
                <Paper style = {{padding: 25, maxWidth: 800}}>
                    <Grid item >
                        <AboutDetails/>
                    </Grid>
                    <Grid item >
                        <AboutTechs/>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default (About)