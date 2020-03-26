import React, {useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Grow, Paper, SwipeableDrawer} from '@material-ui/core'
import { ProjectCard } from '../Cards/ProjectCard';
import { withRouter, Route, useRouteMatch, Switch, Link, Redirect, useLocation, useHistory, useParams } from 'react-router-dom';
import ProjectDetailsCard from '../Cards/ProjectDetailsCard'
import Project from '../Project'

export const useStyles = makeStyles( theme => ({
    root: {

    },

    img:{
        maxWidth: "100%",
        height: "auto",
        
    }
}));

function Projects(){
    const classes = useStyles();
    const toggleProjectDetailsDrawer = (isOpen) => event =>{
        if (event && event.type === 'keydown' && (event.key==='Tab' || event.key === 'Shift')) return;
        setProjectDetailsDrawerState(isOpen);
    }
    const openProjectDetailsDrawer = (projectId) => {
        setSelectedProjectState(projectId);
        setProjectDetailsDrawerState(true);
    }
    const [projectDetailsDrawerState, setProjectDetailsDrawerState] = React.useState(false);
    const [selectedProjectState, setSelectedProjectState] = React.useState(0);
    return(
        <>
        <Grid
            style = {{margin: 10}}
            container
            direction = "row"
            alignItems = "center"
            justify = "center"
            spacing = {6}
        >
            <Grid item lg={2}><ProjectCard projectId = {0} onClick = {() => openProjectDetailsDrawer(0)}/></Grid>
        </Grid>
        <SwipeableDrawer open = {projectDetailsDrawerState} onOpen = {toggleProjectDetailsDrawer(true)} onClose={toggleProjectDetailsDrawer(false)} anchor = "right" variant = "temporary">
            <ProjectDetailsCard ProjectIndex={selectedProjectState}/>
        </SwipeableDrawer>
        </>
    );
}

export default withRouter(Projects)