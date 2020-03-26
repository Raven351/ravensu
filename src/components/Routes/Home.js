import React from 'react'
import {Box, Paper, makeStyles, Typography, createMuiTheme, ThemeProvider} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: 20,
        color: "#ffffff",
        //backgroundColor: "#ebebeb",
        backgroundColor: "transparent",
        opacity: "86%",
        boxShadow: 10,
        
    },

    
}));

export default function Home(){
const classes = useStyles();
const theme = createMuiTheme({    
    typography:{
            fontFamily:[
                '"Fredoka One"'
            ]
        }
    }
)
    return(
        <Paper className = {classes.paper} style = {{width: "40%"}} elevation = "0">
            <ThemeProvider theme = {theme}>
                <Typography
                    variant = "h4"
                    component = "h1"
                    paragraph = "true"
                    style = {{fontFamily: '"Fredoka One'}}
                >
                    Welcome to the nest
                </Typography>
            </ThemeProvider>

            <Typography
                variant = "body1"
                style = {{fontFamily: '"Fredoka One'}}
            >
                <br/>Hello and welcome to my personal website. <br/><br/>My name is Bart and I am graduate of IT engineering studies focused on programming. <br/><br/>
                On this webiste you can find more information about me, projects I've done, technologies I work with, but also about my hobbies. 
            </Typography>
        </Paper> 

    )
}