import React, {useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Grow, Paper, SwipeableDrawer, Typography} from '@material-ui/core'
import { ProjectCard } from '../Cards/ProjectCard';
import { withRouter, Route, useRouteMatch, Switch, Link, Redirect, useLocation, useHistory, useParams } from 'react-router-dom';
import ProjectDetailsCard from '../Cards/ProjectDetailsCard'
import ProjectDetails from '../ProjectDetails'
import Project from '../Project'
import TextLang from '../TextLang'
import ProjectsList from '../Constant/ProjectsList'

export const useStyles = makeStyles( theme => ({
    rootGrid: {
        marginTop: "50px",
        [theme.breakpoints.down("sm")]:{
            width: "100vw"
        },
        width: "100vw"
        
    },

    containerCard:{
        width: 350,
        [theme.breakpoints.down("sm")]:{
            marginLeft: "20px",
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
    const displayProjectCards = ProjectsList.map(({key})=>(
        <Grid item className = {classes.containerCard}><ProjectCard projectId = {key} onClick = {() => openProjectDetailsDrawer(key)}/></Grid>
    ));
    return(
        <>
        <Grid
            container
            className = {classes.rootGrid}
            direction = "row"
            alignItems = "center"
            justify = "center"
            spacing = {5}
        >
            <Grid item xs = {12} style = {{marginBottom: "20px"}}>
                <Typography
                variant = "h4"
                component = "h1"
                align = "center"
                style = {{color: "#ffffff", fontFamily: "Baloo Thambi 2"}}
                >
                    <TextLang textId = "projectHeader"/>
                </Typography>
            </Grid>
            {displayProjectCards}
        </Grid>
        <SwipeableDrawer open = {projectDetailsDrawerState} onOpen = {toggleProjectDetailsDrawer(true)} onClose={toggleProjectDetailsDrawer(false)} anchor = "right" variant = "temporary" >
            <ProjectDetails projectId = {selectedProjectState}/>
        </SwipeableDrawer>
        </>

    );
}

export default withRouter(Projects)