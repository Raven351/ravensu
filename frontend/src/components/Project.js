import React from 'react'
import {makeStyles, createMuiTheme, responsiveFontSizes, ThemeProvider} from '@material-ui/core/styles' 
import {Grid, Paper, Typography} from '@material-ui/core'
import ProjectsList from './Constant/ProjectsList'
import Technologies from './Constant/Technologies'

let muiTheme = createMuiTheme();
muiTheme = responsiveFontSizes(muiTheme);

export const useStyles = makeStyles( theme => ({
    rootGrid: {
        height: "auto",
        maxWidth: "100%",
        marginBottom: 40,       
    },

    techGrid: {
        maxHeight: 349
    },

    img:{
        maxWidth: "100%",
        height: "auto",
    },
    paper:{
        maxWidth: "100%",
        color: "transparent",
        //backgroundColor: "transparent"
    },
    typography:{
        [theme.breakpoints.up('md')]:{
            marginLeft: 20,
            marginRight: 20,
        },
        [theme.breakpoints.down('sm')]:{
            marginTop: 20,
            textAlign: "center"
        },
        color: "#ffffff"
    },
    techImg:{
        maxWidth: "100%",
        height: "auto"
    }
}));

function ProjectDescription({projectId, align}){
    const classes = useStyles();
    return(
        <>
            <ThemeProvider theme = {muiTheme}>
                <Typography
                variant = "h4"
                component = "h1"
                paragraph = "true"
                align = {align}
                className = {classes.typography}
                >
                    {ProjectsList[projectId].name}
                </Typography>
                <Typography
                variant = "body1"
                paragraph = "true"
                align = {align}
                className = {classes.typography}
                component = "p"
                display = "block"
                style ={{whiteSpace: 'pre-line'}}
                >
                    {ProjectsList[projectId].desc}
                </Typography>
            </ThemeProvider>

            
        </>
    );
}

function ProjectTechnologies({projectId}){
    const classes = useStyles();
    return(
        <>
            {ProjectsList[projectId].technologiesIndexes.map((currentValue)=> {
                    return(
                        <Grid item lg  = {4} xs = {2}>
                            <img src = {Technologies[currentValue].pictureSrc} className = {classes.techImg}/>
                        </Grid>
                    )
                }              
            )}
        </>
    )
}

function Project({isReverse, projectId}){
    const classes = useStyles();
    const rootGridProps ={
        direction: isReverse ? "row-reverse" : "row"
    }
    const projectDescriptionProps ={
        align: isReverse? "right" : "left"
    }
    return(
        //<Paper className = {classes.paper}>
            <Grid
            container
            className = {classes.rootGrid}
            {...rootGridProps}
            alignItems = "flex-start"
            justify = "center"
            
            >
                <Grid item lg = {5} xs = {12}><ProjectDescription projectId = {projectId} {...projectDescriptionProps}/></Grid>
                <Grid item lg = {3} xs = {12}><img src = {ProjectsList[projectId].pictureSrc} className = {classes.img}/></Grid>               
                <Grid item 
                container 
                direction = "column"
                alignItems = "center"
                justify = "center"
                lg = {2}
                xs = {4}
                spacing = {12}
                className = {classes.techGrid}
                >
                    <ProjectTechnologies projectId = {0}/>
                </Grid>
            </Grid>
        //</Paper>

    );
}

export default Project;