import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import { ProjectCard } from '../Cards/ProjectCard';
import { withRouter, Route } from 'react-router-dom';

export const useStyles = makeStyles( theme => ({
    root: {
        
    }
}));

function Project(props){
    const handleProjectCardClick = (direction) =>{
        props.history.push(direction);
    }
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
            <Route path = "/projects">
                <Grid item><ProjectCard onClick = {() => handleProjectCardClick(props.history.location.pathname + '/downhillpay')} title = "Project Title" desc = "Short description of the project" image = "/img/ProjectsPictures/skiingphoto.jpg" technologies = {[0,1]}/></Grid>
                <Grid item><ProjectCard title = "Some android app" desc = "Nice app" image = "/img/ProjectsPictures/bustestphoto.jpg" technologies = {[1]}/></Grid>
            </Route>      
        </Grid>     

    );
}

export default withRouter(Project)