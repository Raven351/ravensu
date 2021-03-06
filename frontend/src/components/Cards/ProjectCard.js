import React from 'react';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles'
import { Grid, Card, CardActionArea, CardMedia, Typography, CardContent, Avatar, Tooltip, Box, ThemeProvider } from '@material-ui/core';
import ProjectsList from '../Constant/ProjectsList'
import programmingLanguages from '../Constant/Technologies'

const useStyles = makeStyles( theme => ({
    root: {
        width: "100%",
        //minHeight: "400px"
    },
    media: {
        width: "auto",
        height: 250,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
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
                    <Grid item >
                        <Avatar variant = "square" src={currentLang.pictureSrc} style={{ height: 23, width: 23, backgroundPositionX: "50%", backgroundPositionY: "50%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} imgProps = {{style: {}}} />
                    </Grid>
                </Tooltip>
            );
        })}
        </>
    );
}

export function ProjectCard({projectId, onClick }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea onClick = {onClick}>
                <CardMedia className={classes.media} image={ProjectsList[projectId].pictureSrc} component = "img" />
                <CardContent>
                    <Grid id="langauge-icons-grid" container direction="row" justify="flex-end" alignItems="flex-start" spacing={1}>
                        {ShowLanguages(ProjectsList[projectId].technologiesIndexes)}
                    </Grid>
                    <Grid>
                        <Typography style={{marginTop: 10}} gutterBottom variant="h5" component="h2">{ProjectsList[projectId].name}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{ProjectsList[projectId].descShort}</Typography>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
