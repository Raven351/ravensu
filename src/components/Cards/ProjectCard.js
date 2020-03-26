import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { Grid, Card, CardActionArea, CardMedia, Typography, CardContent, Avatar, Tooltip } from '@material-ui/core';
import ProjectsList from '../Constant/ProjectsList'
import programmingLanguages from '../Constant/ProgrammingLanguages'

const useStyles = makeStyles( theme => ({
    root: {
        minWidth: 300,
    },
    media: {
        height: 150,
        width: 300,
    },
}));

function ShowLanguages(indexes){
    var langs = [];
    indexes.map((currentValue) => {
        langs.push(programmingLanguages[currentValue]);
    })
    return(
        <>
        {langs.map((currentLang) => {
            return (
                <Tooltip placement="top" title={currentLang.name}>
                    <Grid item>
                        <Avatar src={currentLang.pictureSrc} style={{ height: 23, width: 23 }} />
                    </Grid>
                </Tooltip>
            );
        })}
        </>
    );
}

export function ProjectCard({projectId, onClick }) {
    const classes = useStyles();
    return (<Card className={classes.root}>
        <CardActionArea onClick = {onClick}>
            <CardMedia className={classes.media} image={ProjectsList[projectId].pictureSrc} />
            <CardContent>
                <Grid id="langauge-icons-grid" container direction="row" justify="flex-end" alignItems="flex-start" spacing={0}>
                    {ShowLanguages(ProjectsList[projectId].technologiesIndexes)}
                </Grid>
                <Grid>
                    <Typography gutterBottom variant="h5" component="h2">{ProjectsList[projectId].name}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{ProjectsList[projectId].descShort}</Typography>
                </Grid>
            </CardContent>
        </CardActionArea>
    </Card>);
}
