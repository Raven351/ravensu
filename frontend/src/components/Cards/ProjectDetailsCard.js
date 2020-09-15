import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Card, Grid, CardMedia} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import ProjectsList from '../Constant/ProjectsList'

const useStyles = makeStyles(theme =>({
    root:{
        width: 600,
        height: 700
    },
    media: {
        width: 600,
        height: 300
    },
}));

function ProjectDetailsCard({ProjectIndex}){
    const classes = useStyles();
    return (
        <Card className = {classes.root}>
            <CardMedia className = {classes.media} image = {ProjectsList[ProjectIndex].pictureSrc}/>
        </Card>
    );
}

export default withRouter(ProjectDetailsCard);