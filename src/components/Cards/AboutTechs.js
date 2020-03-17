import React from 'react'
import { Chip, Avatar, Paper } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ChashLogo from "../../img/ChipsLogos/chashlogo.png"

const Picture = props => (
    <Avatar source={props.source} />
    //<img src = {props.source} height = "50" width = "50" style={{display: "flex"}}/>
);
const programmingLanguages = [
    { key: 0, name: "C#", pictureSrc:  "/img/ChipsLogos/chashlogo.png", lvl: 3 },
    { key: 1, name: "Java", pictureSrc: '/img/ChipsLogos/javalogo3.png', lvl: 2},
]


function TechChip(props) {
    console.log(props);
    return (
        <>
            {props.array.map(({key, name, pictureSrc, lvl}) => {
                return (<Chip key={key} label={name} avatar={<Avatar alt="picture" src={pictureSrc} />} />)
            })}
        </>
    );
}

export default function AboutTechs() {
    return (
        <Paper>
            <TechChip array={programmingLanguages} />
        </Paper>
    );
}