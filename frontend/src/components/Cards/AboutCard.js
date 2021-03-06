import React from 'react'
import {Box, Paper, makeStyles, Typography, CardHeader, Avatar, CardContent, Grid, Divider} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import SmsIcon from '@material-ui/icons/Sms';
import WorkIcon from '@material-ui/icons/Work';
import TextLang from '../TextLang'

const useStyles = makeStyles(theme => ({
    paper: {
        color: "#000000",
        backgroundColor: "#ebebeb",
        opacity: "86%",
        boxShadow: 10,
    },

    card: {
        //backgroundColor: "transparent"
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

function AvatarContent(){
    const classes = useStyles()
    const [isAvatarLoaded, setIsAvatarLoaded] = React.useState(false);
    const handleImageLoaded = () => {
        setIsAvatarLoaded =true;
        alert("state set");
    }

    return(
        <Grid 
        container
        display = "flex"
        direction = "column"
        justify = "center"
        alignItems = "center"
        >
            <Grid item style = {{padding: 2}}>
                <Avatar className = {classes.avatar} src={"/img/profilepicture.jpg"} alt="Bartosz Baum" style = {{alignSelf: "center"}} onLoad = {() => handleImageLoaded.bind(this)}/>
            </Grid>
            
            <Divider variant = "fullWidth" classes = {{root: classes.dividerColor}} flexItem = "true" />

            <Grid item style = {{marginTop: 10}}>
                <Typography
                variant = "h5"
                component = "h1"
                >
                Bartosz Baum<br/>
                </Typography>
            </Grid>
        </Grid>
    );
}

function CardContentGrid(props){
    return(
        <Grid
        display = "flex"
        direction = "column"
        justify = "flex-start"
        alignItems = "flex-start"
        >
            {props.children}
        </Grid>
    );
}

function CardContentGridDescriptionElement(props){
    return(
        <Grid 
        container
        display = "flex"
        direction = "column"
        justify = "center"
        alignItems = "center"
        >
            {props.children}
        </Grid>
    );
}

export default function AboutCard(){
    const classes = useStyles();
    return ( 
        <Card className = {classes.card}>
            <CardContent style={{alignContent: "center"}}>
                <AvatarContent/>
                <CardContentGrid>            
                    <CardContentGridDescriptionElement>
                        <Grid item style = {{marginTop: 20}}>
                            <HomeIcon/> 
                        </Grid>
                        <Grid item >
                            <Typography
                            variant = "body1"
                            align = "center"
                            style ={{color: "#000000"}}                    
                            >
                                <TextLang textId = "aboutPlace"/>
                            </Typography>
                        </Grid>
                    </CardContentGridDescriptionElement>
                    <CardContentGridDescriptionElement >
                        <Grid item style = {{marginTop: 20}} >
                            <WorkIcon/> 
                        </Grid>
                        <Grid item >
                            <Typography
                            variant = "body1"
                            align = "center"
                            style = {{whiteSpace: "pre-line"}}                     
                            >
                                <TextLang textId = "aboutJob"/>
                            </Typography>
                        </Grid>
                    </CardContentGridDescriptionElement>
                    <CardContentGridDescriptionElement>
                        <Grid item style = {{marginTop: 20}}>
                            <SchoolIcon/> 
                        </Grid>
                        <Grid item>
                            <Typography
                            variant = "body1"
                            align = "center"   
                            style = {{whiteSpace: "pre-line"}}                  
                            >
                            <TextLang textId = "aboutEdu"/>
                            </Typography>
                        </Grid>
                    </CardContentGridDescriptionElement>
                    <CardContentGridDescriptionElement >
                        <Grid item style = {{marginTop: 20}} >
                            <SmsIcon/> 
                        </Grid>
                        <Grid item >
                            <Typography
                            variant = "body1"
                            align = "center"
                            style = {{whiteSpace: "pre-line"}}                     
                            >
                                <TextLang textId = "aboutLang"/>
                            </Typography>
                        </Grid>
                    </CardContentGridDescriptionElement>

                </CardContentGrid>

            </CardContent>
        </Card> 
    ); 
}