import React from 'react'
import {Box, Paper, makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: 20,
        color: "#000000",
        backgroundColor: "#ebebeb",
        opacity: "86%",
        boxShadow: 10,
    }
}));

export default function Home(){
const classes = useStyles();
    return(
        <Paper className = {classes.paper} style = {{width: "40%"}} elevation = "12">
            <Typography
                variant = "h4"
                paragraph = "true"

            >
                Welcome to the nest
            </Typography>
            <Typography
                variant = "body1"
            >
                Hello and welcome to my personal website. My name is Bart and I am graduate of IT engineering studies focused on programming. 
                On this webiste you can find more information about me, projects I've done, technologies I work with, but also about my hobbies. 
            </Typography>
        </Paper> 

    )
}