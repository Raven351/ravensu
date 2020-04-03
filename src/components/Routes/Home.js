import React from 'react'
import {Box, Paper, makeStyles, Typography, ThemeProvider, Container} from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: 20,
        color: "#ffffff",
        //backgroundColor: "#ebebeb",
        backgroundColor: "transparent",
        opacity: "86%",
        boxShadow: 10,
        
    },
    rootContainer: {
        width: "100vw",
        marginTop: "150px",
        [theme.breakpoints.down('sm')]:{
            marginTop: "90px"
        }
    }

    
}));

export default function Home(){
const classes = useStyles();
let responsiveFonts = createMuiTheme();
responsiveFonts = responsiveFontSizes(responsiveFonts);

// const theme = createMuiTheme();  
//     theme.typography = {
//             fontFamily:[
//                 '"Fredoka One"'
//             ]
//     }   
//     theme.typography.h3 = {
//         '@media (max-width:600px)':{
//             fontSize: "1.2rem"
//         },
//         '@media (min-width:600px)':{
//             fontSize: "2.5rem"
//         },
//         '@media (min-width:1280px)':{
//             fontSize: "3rem"
//         }
//     }
//     theme.typography.body1 = {
//         '@media (max-width:600px)':{
//             fontSize: "0.1rem"
//         },
//         '@media (max-width:600px)':{
//             fontSize: "0.1rem"
//         },
//         '@media (max-width:600px)':{
//             fontSize: "0.1rem"
//         }
//     }
    return(
        <Container className = {classes.rootContainer}>
            <Paper className = {classes.paper} elevation = "0">
                <ThemeProvider theme = {responsiveFonts}>
                    <Typography
                        variant = "h3"
                        component = "h1"
                        paragraph = "true"
                        style = {{fontFamily: '"Fredoka One'}}
                        align = "left"
                    >
                        Welcome to the nest
                    </Typography>
                    <Typography
                        variant = "h6"
                        component= "body"
                        style = {{fontFamily: '"Fredoka One'}}
                        align = "left"
                    >
                        <br/>Hello and welcome to my personal website. <br/><br/>My name is Bart and I am graduate of IT engineering studies focused on programming. <br/><br/>
                        On this webiste you can find more information about me, projects I've done, technologies I work with, but also about my hobbies. 
                    </Typography>
                </ThemeProvider>
            </Paper> 
        </Container>
    )
}