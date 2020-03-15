import React from 'react'
import {Box, Paper, makeStyles, Typography, CardHeader, Avatar, CardContent, Grid, Divider} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import ProfilePicture from "../../img/profilepicture.jpg"
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import SmsIcon from '@material-ui/icons/Sms';

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

export default function About(){
    const classes = useStyles();
        return(
            <Card className = {classes.card}>
                <CardContent style={{alignContent: "center"}}>
                    <Grid 
                    container
                    display = "flex"
                    direction = "column"
                    justify = "center"
                    alignItems = "center"
                    >
                        <Grid item style = {{padding: 2}} >
                            <Avatar className = {classes.avatar} src={ProfilePicture} alt="Bartosz Baum" style = {{alignSelf: "center"}}/>
                        </Grid>
                        
                        <Divider variant = "fullWidth" classes = {{root: classes.dividerColor}} flexItem = "true" />

                        <Grid item style = {{marginTop: 20}}>
                            <Typography
                            variant = "h5"
                            component = "h1"
                            >
                            Bartosz Baum<br/>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid                    
                    container
                    display = "flex"
                    direction = "column"
                    justify = "flex-start"
                    alignItems = "flex-start"
                    >            
                        <Grid 
                        container
                        display = "flex"
                        direction = "column"
                        justify = "center"
                        alignItems = "center"
                        >
                            <Grid item >
                                <HomeIcon/> 
                            </Grid>
                            <Grid item >
                                <Typography
                                variant = "body1"
                                align = "center"                      
                                >
                                Gdańsk, Poland
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid 
                        container
                        display = "flex"
                        direction = "column"
                        justify = "center"
                        alignItems = "center"
                        >
                            <Grid item >
                                <SchoolIcon/> 
                            </Grid>
                            <Grid item >
                                <Typography
                                variant = "body1"
                                align = "center"                     
                                >
                                IT Engineer Degree<br/>
                                WSB University in Gdańsk <br/>
                                Information Technology <br/>
                                Programming Specialization<br/>

                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid 
                        container
                        display = "flex"
                        direction = "column"
                        justify = "center"
                        alignItems = "center"
                        >
                            <Grid item style = {{marginTop: 20}} >
                                <SmsIcon/> 
                            </Grid>
                            <Grid item >
                                <Typography
                                variant = "body1"
                                align = "center"                     
                                >
                                    Polish - Native<br/>
                                    English - Advanced (C1)<br/>
                                    Japanese - Basic (N4)<br/>

                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>  
        )
    }