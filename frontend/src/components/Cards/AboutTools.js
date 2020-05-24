import React from 'react'
import { Chip, Avatar, Paper, Tooltip, Typography, Grid, Box } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import TextLang from '../TextLang';
import Tools from '../Constant/Tools'

function ToolChips(props) {
    console.log(props);
    return (
        <>
            {props.array.map(({name, key, pictureSrc, lvl}) => {
                return (
                        <ToolChip key = {key} name = {name} pictureSrc = {pictureSrc} lvl = {lvl}/>     
                )}
            )}
        </>
    );
}

function ToolChip(props){
    return(
        <>
            <Chip key={props.key} label={props.name} avatar={<Avatar alt="picture" src={props.pictureSrc}/>} style = {{margin: "4px 4px 4px 0px"}} />
        </>
    );
}

export default function AboutTools() {
    return (
        <>
            <Typography
            variant = "h5"
            component = "h2"
            paragraph = "true"
            >
            <TextLang textId = "aboutDevToolsHeader"/>
            </Typography>
            <ToolChips array={Tools} />      
        </>
    );
}