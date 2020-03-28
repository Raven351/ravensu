import React from 'react'
import {makeStyles, createMuiTheme} from '@material-ui/core/styles'
import {Grid, Paper, Typography, Link, Box, Chip, ThemeProvider} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import ProjectsList from './Constant/ProjectsList'
import TechnologiesList from './Constant/ProgrammingLanguages'

const useStyles = makeStyles(theme => ({
    rootContainer:{
        width: "35vw",
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]:{
            width: '80vw',
        },
        height: "100vh",
         
    },
    techContainer:{
        marginTop: 50,
        position: "absolute",
        bottom: 0,
    },
    img: {
        width: "auto",
        maxWidth: "100%",
        height: 400,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        marginBottom: 20,
        [theme.breakpoints.down('sm')]:{
            height: 200,
        }

    },
    techImg: {
        maxWidth: "100%",
        height: "auto",

    },
    textContainer:{
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        whiteSpace: "pre-line"
    }

}));

function Title({projectId}){
    const classes = useStyles();
    return(
        <Typography
        variant = "h4"
        component = "h1"
        align = "center"
        >
            {ProjectsList[projectId].name}
        </Typography>
    );
}

function Description({projectId}){
    const classes = useStyles();
    return(
        <Typography
        variant = "body1"
        component = "p"
        align = "center"
        style = {{fontFamily: "Baloo Thambi 2"}}
        gutterBottom>
            {ProjectsList[projectId].desc}
        </Typography>

    );
}

function Technologies({projectId}){
    const classes = useStyles();
    return(
        <>
            {ProjectsList[projectId].technologiesIndexes.map((currentValue)=> {
                    return(
                        <Grid item lg  = {2} xs = {2}>
                            <img src = {TechnologiesList[currentValue].pictureSrc} className = {classes.techImg}/>
                        </Grid>
                    )
                }              
            )}
        </>
    )
}

function ProjectDetails({projectId}){
    const classes = useStyles();
    return (
        <Box className = {classes.rootContainer}>
            <Box><img className = {classes.img} src = {ProjectsList[projectId].pictureSrc} /></Box>
            <Box className = {classes.textContainer}>
                <Title projectId = {projectId}/> 
            </Box>
            <Box className = {classes.textContainer} textAlign = "center">
                <Link align = "right" gutterBottom target = "_blank" href = {ProjectsList[projectId].github}>{ProjectsList[projectId].github}</Link>
            </Box>
            <Box className = {classes.textContainer}>
                <Description projectId={projectId}/>
            </Box>
            <Box style={{marginTop: 50, width: "99%"}}>
                <Grid
                container
                direction = "row"
                justify = "space-evenly"
                alignItems = "center"
                spacing = {3}
                classname = {classes.techContainer}
                >
                    <Technologies projectId = {projectId}/>
                </Grid>
            </Box>
        </Box>

        
    );
}

export default ProjectDetails