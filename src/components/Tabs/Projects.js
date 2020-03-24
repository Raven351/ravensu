import React, {useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Grow} from '@material-ui/core'
import { ProjectCard } from '../Cards/ProjectCard';
import { withRouter, Route, useRouteMatch, Switch, Link, Redirect, useLocation, useHistory, useParams } from 'react-router-dom';
import ProjectDetailsCard from '../Cards/ProjectDetailsCard'

export const useStyles = makeStyles( theme => ({
    root: {
        
    }
}));

function ProjectsView(props){
    const routerHistory = useHistory();
    const currentLocation = useLocation().pathname;
    const [projectPath, setProjectPath] = React.useState('/');
    const [isRedirect, setIsRedirect] = React.useState(false);

    const handleProjectCardClick = (projectId) =>{
        props.setProjectIdCallback(projectId);
    }

    return (       
        <Grid
            container
            item
            id = "projects-grid"
            direction = "row"
            justify = "center"
            alignItems = "flex-start"
            spacing = {4}
            lg = {8}
            md = {6}
            >
               <Grid item><ProjectCard onClick = {() => handleProjectCardClick(0)} title = "Downhillpay" desc = {"Some description"} technologies = {[0]} image = {"/img/ProjectsPictures/skiingphoto.jpg"}/></Grid>
               <Grid item><ProjectCard onClick = {() => handleProjectCardClick(1)} title = "Downhillpay" desc = {"Some description"} technologies = {[1]} image = {"/img/ProjectsPictures/bustestphoto.jpg"}/></Grid>
        </Grid>
    )
}

function ProjectDetails(props){
    let match = useRouteMatch();
    const [didMount, setDidMount] = React.useState(false);
    const currentLocation = useLocation();
    let {projectName} = useParams();
    useEffect(() =>
        {
            setDidMount(true);
        }
    )
    return(
        <Grid 
        item
        container 
        lg= {4}
        md = {6}
        spacing = {1}
        direction = "row"
        justify = "center"
        alignItems = "flex-start"
        >
            <Grow in = {didMount === true}>
                <Grid item><ProjectDetailsCard ProjectIndex = {props.projectId}/></Grid>
            </Grow>
        </Grid>
    )
}

function Project(props){
    const classes = useStyles();
    const [projectId, setProjectId] = React.useState(0);
    return (
        <Grid container
        id = "root-grid"
        direction = "row"
        justify = "flex-start"
        alignItems = "flex-start"
        >
            <ProjectsView setProjectIdCallback = {setProjectId}/>
            <Grow>
                <ProjectDetails projectId = {projectId}/>
            </Grow>          
        </Grid> 
    );
}

export default withRouter(Project)