import React from 'react'
import { Chip, Avatar, Paper, Tooltip, Typography, Grid, Box } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Picture = props => (
    <Avatar source={props.source} />
    //<img src = {props.source} height = "50" width = "50" style={{display: "flex"}}/>
);
const programmingLanguages = [
    { key: 0, name: "C#", pictureSrc:  "/img/ChipsLogos/chashlogo.png", lvl: 3 },
    { key: 1, name: "Java", pictureSrc: '/img/ChipsLogos/javalogo3.png', lvl: 2},
]

function starLevel(level){
    var stars = [];
    for (var i=0; i<level; i++) stars.push(<StarIcon/>);
    for (i=0; i<6-level; i++) stars.push(<StarBorderIcon/>);
    return stars;
}

function TechChips(props) {
    console.log(props);
    return (
        <>
            {props.array.map(({name, key, pictureSrc, lvl}) => {
                return (
                    <Box m={1}>
                        <TechChip key = {key} name = {name} pictureSrc = {pictureSrc} lvl = {lvl}/>
                    </Box>                  
                )}
            )}
        </>
    );
}

function TechChip(props){
    return(
        <>
            <Tooltip placement = "top" title = {starLevel(props.lvl)}>
                <Chip key={props.key} label={props.name} avatar={<Avatar alt="picture" src={props.pictureSrc}/>} />
            </Tooltip>
        </>
    );
}

export default function AboutTechs() {
    return (
        <>
            <Typography
            variant = "h5"
            component = "h2"
            paragraph = "true"
            >
            Technologies I work with
            </Typography>
            <Grid container spacing = {4}>
                <Grid item>
                    <TechChips array={programmingLanguages} />
                </Grid>
            </Grid>
            
        </>
    );
}