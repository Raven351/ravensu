import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import { ProjectCard } from '../Cards/ProjectCard';
import { withRouter, Route, useRouteMatch, Switch } from 'react-router-dom';
import ProjectCardDetails from '../Cards/ProjectDetailsCard'

export const useStyles = makeStyles( theme => ({
    root: {
        
    }
}));

function Project(props){
    const handleProjectCardClick = (direction) =>{
        props.history.push(direction);
    }
    const classes = useStyles();
    let match = useRouteMatch();
    return (
        <Route path = "/projects">
            <Grid container
            id = "root-grid"
            direction = "row"
            justify = "flex-start"
            alignItems = "flex-start"
            >
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
                    <Switch>
                    {/* <Grid item><ProjectCard onClick = {() => {handleProjectCardClick(props.history.location.pathname + '/downhillpay'); props.setProjectName('/downhillpay')}} title = "Project Title" desc = "Short description of the project" image = "/img/ProjectsPictures/skiingphoto.jpg" technologies = {[0,1]}/></Grid> */}
                    {/* <Grid item><ProjectCard onClick = {() => {handleProjectCardClick(`${match.url}/downhillpay`); props.setProjectName('/downhillpay')}} title = "Project Title" desc = "Short description of the project" image = "/img/ProjectsPictures/skiingphoto.jpg" technologies = {[0,1]}/></Grid> */}
                    {/* <Grid item><ProjectCard onClick = {() => props.setProjectName('/downhillpay')} title = "Project Title" desc = "Short description of the project" image = "/img/ProjectsPictures/skiingphoto.jpg" technologies = {[0,1]}/></Grid> */}
                    {/* <Grid item><ProjectCard title = "Some android app" desc = "Nice app" image = "/img/ProjectsPictures/bustestphoto.jpg" technologies = {[1]}/></Grid>     */}
                    {/* <Grid item><ProjectCard title = "Some android app" desc = "Nice app" image = "/img/ProjectsPictures/bustestphoto.jpg" technologies = {[1]}/></Grid>  */}
                    </Switch>
   
                </Grid>
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
                    <Route path={`${match.path}`}>
                        <Grid item><ProjectCardDetails ProjectIndex = {0}/></Grid>
                    </Route>
                    <Route path={`${match.path}/:projectName`}>
                        <Grid item><ProjectCardDetails ProjectIndex = {0}/></Grid>
                    </Route>

                </Grid>
            </Grid>

        </Route>     

    );
}

export default withRouter(Project)