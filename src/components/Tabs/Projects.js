import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import { ProjectCard } from '../Cards/ProjectCard';

export const useStyles = makeStyles( theme => ({
    root: {
        
    }
}));

function Project(){
    const classes = useStyles();
    return (
        <Grid 
        container
        id = "root-grid"
        direction = "row"
        justify = "center"
        alignItems = "flex-start"
        spacing = {6}
        >
            <Grid item><ProjectCard title = "Project Title" desc = "Short description of the project" image = "/img/ProjectsPictures/skiingphoto.jpg" technologies = {[0,1]}/></Grid>
            <Grid item><ProjectCard title = "Some android app" desc = "Nice app" image = "/img/ProjectsPictures/bustestphoto.jpg" technologies = {[1]}/></Grid>        
        </Grid>     

    );
}

export default Project