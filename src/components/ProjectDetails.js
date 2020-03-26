import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Paper, Typography, Link} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import ProjectsList from './Constant/ProjectsList'
import TechnologiesList from './Constant/ProgrammingLanguages'

const useStyles = makeStyles(theme => ({
    rootContainer:{
        width: "35vw",
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]:{
            width: '80vw'
        },
    },
    techContainer:{
        flexGrow: 1
    },
    img: {
        maxWidth: "100%",
        height: "auto"
    }

}));

function Title({projectId}){
    const classes = useStyles();
    return(
        <Typography
        variant = "h4"
        component = "h1"
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
                        <Grid item lg  = {3} xs = {2}>
                            <img src = {TechnologiesList[currentValue].pictureSrc} className = {classes.img}/>
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
        <Grid 
        container
        className = {classes.rootContainer}
        direction = "row"
        alignItems = "flex-start"
        justify = "flex-start"
        >
            <Grid item xs = {12}><img className = {classes.img} src = {ProjectsList[projectId].pictureSrc} /></Grid>
            <Grid item xs = {12}><Title projectId = {projectId}/></Grid>
            <Grid item xs = {1}><GitHubIcon/></Grid>
            <Grid item xs = {11}>
                <Link gutterBottom target = "_blank" href = {ProjectsList[projectId].github}>{ProjectsList[projectId].github}</Link>
            </Grid>
            <Grid item xs = {12}><Description projectId={projectId}/></Grid>
            <Grid
            item
            container
            xs = {12}
            direction = "row"
            justify = "space-evenly"
            alignItems = "flex-end"
            alignSelf = "flex-end"
            classname = {classes.techContainer}
            >
                <Technologies projectId = {projectId}/>
            </Grid>
        </Grid>
        
    );
}

export default ProjectDetails