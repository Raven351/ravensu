import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Paper, Typography, Link, Box, Chip} from '@material-ui/core'
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
        maxWidth: "100%",
        height: "auto"
    },
    textContainer:{
        marginTop: 10
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
        // <Grid 
        // container
        // className = {classes.rootContainer}
        // direction = "column"
        // alignItems = "flex-start"
        // justify = "space-between"
        // >
        //     <Grid item ><img className = {classes.img} src = {ProjectsList[projectId].pictureSrc} /></Grid>
        //     <Grid item ><Title projectId = {projectId}/></Grid>
        //     <Grid item ><GitHubIcon/></Grid>
        //     <Grid item >
        //         <Link gutterBottom target = "_blank" href = {ProjectsList[projectId].github}>{ProjectsList[projectId].github}</Link>
        //     </Grid>
        //     <Grid item ><Description projectId={projectId}/></Grid>
        //     <Grid
        //     item
        //     container
        //     direction = "row"
        //     justify = "space-evenly"
        //     alignItems = "flex-end"
        //     alignSelf = "flex-end"
        //     classname = {classes.techContainer}
        //     >
        //         <Technologies projectId = {projectId}/>
        //     </Grid>
        // </Grid>
        <Box className = {classes.rootContainer}>
            <img className = {classes.img} src = {ProjectsList[projectId].pictureSrc} />
            <Box className = {classes.textContainer}>
                <Title projectId = {projectId}/> 
            </Box>
            <Box className = {classes.textContainer}>
                <Link gutterBottom target = "_blank" href = {ProjectsList[projectId].github}>{ProjectsList[projectId].github}</Link>
            </Box>
            <Box className = {classes.textContainer}>
                <Description projectId={projectId}/>
            </Box>
            <Box style={{marginTop: 50}}>
                <Grid
                container
                direction = "row"
                justify = "space-evenly"
                alignItems = "flex-end"
                alignSelf = "flex-end"
                classname = {classes.techContainer}
                >
                    <Technologies projectId = {projectId}/>
                </Grid>
            </Box>
        </Box>

        
    );
}

export default ProjectDetails