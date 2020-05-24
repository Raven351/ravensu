import React from 'react'
import { Chip, Avatar, Paper, Tooltip, Typography, Grid, Box } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import TextLang from '../TextLang';
import Technologies from '../Constant/Technologies'

const Picture = props => (
    <Avatar source={props.source} />
    //<img src = {props.source} height = "50" width = "50" style={{display: "flex"}}/>
);

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
                        <TechChip key = {key} name = {name} pictureSrc = {pictureSrc} lvl = {lvl}/>               
                )}
            )}
        </>
    );
}

function TechChip(props){
    return(
        <>
            <Chip key={props.key} label={props.name} avatar={<Avatar alt="picture" src={props.pictureSrc}/>}  style = {{margin: "4px 4px 4px 0px"}}/>
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
            <TextLang textId = "aboutTechnologiesHeader"/>
            </Typography>
                <TechChips array={Technologies} />
      
        </>
    );
}