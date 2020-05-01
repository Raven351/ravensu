import React, {useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Grow, Paper, SwipeableDrawer} from '@material-ui/core'
import { ProjectCard } from '../Cards/ProjectCard';
import { withRouter, Route, useRouteMatch, Switch, Link, Redirect, useLocation, useHistory, useParams } from 'react-router-dom';
import ProjectDetailsCard from '../Cards/ProjectDetailsCard'
import ProjectDetails from '../ProjectDetails'
import Project from '../Project'

export const useStyles = makeStyles( theme => ({
    root: {
        marginTop: "100px",
        [theme.breakpoints.down("sm")]:{
            width: "100vw"
        },
        width: "99vw"
        
    },

    containerCard:{
        width: 350,
        [theme.breakpoints.down("sm")]:{
            marginLeft: "40px",
        },
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
            container
            className = {classes.root}
            direction = "row"
            alignItems = "center"
            justify = "center"
            spacing = {5}
        >
            <Grid item className = {classes.containerCard}><ProjectCard projectId = {0} onClick = {() => openProjectDetailsDrawer(0)}/></Grid>
            <Grid item className = {classes.containerCard}><ProjectCard projectId = {1} onClick = {() => openProjectDetailsDrawer(1)}/></Grid>
        </Grid>
        <SwipeableDrawer open = {projectDetailsDrawerState} onOpen = {toggleProjectDetailsDrawer(true)} onClose={toggleProjectDetailsDrawer(false)} anchor = "right" variant = "temporary" >
            <ProjectDetails projectId = {selectedProjectState}/>
        </SwipeableDrawer>
        </>
    );
}

export default withRouter(Projects)