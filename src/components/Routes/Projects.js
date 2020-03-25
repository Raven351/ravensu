import React, {useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Grow, Paper} from '@material-ui/core'
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

function Projects({isReverse, projectId}){
    const classes = useStyles();
    return(
        <Grid
            style = {{margin: 10}}
            container
            direction = "row"
            alignItems = "center"
            justify = "center"
            spacing = {6}
        >
            <Grid item lg = {11}><Project projectId = {0}/></Grid>
            <Grid item lg = {11}><Project projectId = {1} isReverse = {true}/></Grid>
        </Grid>
    );
}

export default withRouter(Projects)