import React from 'react'
import {Paper, makeStyles, Typography, ThemeProvider, Container} from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import TextLang from '../TextLang';

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
    },
    typographyHeader:{
        fontFamily: '"Balsamiq Sans"', 
        fontWeight: 700,
    },
    typographyH6:{
        fontFamily: '"Balsamiq Sans"', 
        whiteSpace: "pre-line", 
        marginTop: 50, 
        marginLeft: 40, 
        fontWeight: 700
    }

    
}));
export default function Home(){
const classes = useStyles();
let responsiveFonts = createMuiTheme();
responsiveFonts = responsiveFontSizes(responsiveFonts);
    return(
        <Container className = {classes.rootContainer}>
            <Paper className = {classes.paper} elevation = "0">
                <ThemeProvider theme = {responsiveFonts}>
                    <Typography
                        variant = "h3"
                        component = "h1"
                        paragraph = "true"
                        className = {classes.typographyHeader}
                        align = "left"
                    >
                        <TextLang textId = "homeHeader"/>
                        <span className = {classes.typographyHeader} style= {{color: "#14e0ff"}}>dev.ravensu.com</span>
                    </Typography>
                    <Typography
                        variant = "h6"
                        component= "p"
                        className = {classes.typographyH6}
                        align = "left"
                    >
                        <TextLang textId = "homeDescLine1"/>
                    </Typography>
                    <Typography
                        variant = "h6"
                        component= "p"
                        className = {classes.typographyH6}
                        style = {{marginLeft: "80px"}}
                        align = "left"
                    >
                        <TextLang textId = "homeDescLine2"/>
                    </Typography>
                    <Typography
                        variant = "h6"
                        component= "p"
                        className = {classes.typographyH6}
                        style = {{marginLeft: "120px"}}
                        align = "left"
                    >
                        <TextLang textId = "homeDescLine3"/>
                    </Typography>
                </ThemeProvider>
            </Paper> 
        </Container>
    )
}