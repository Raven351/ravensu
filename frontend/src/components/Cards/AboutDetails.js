import React from 'react'
import {Box, Typography, Paper} from '@material-ui/core'
import TextLang from '../../components/TextLang'


export default function AboutDetails(){
    return(
        <>
            <Typography
                variant = "h4"
                component = "h1"
                paragraph = "true"
            >
                <TextLang textId = "aboutMeHeader"/>
            </Typography>
            <Typography
                variant = "body1"
                paragraph = "true"
                style = {{whiteSpace: "pre-line"}}
            >
                    <TextLang textId = "aboutDetails"/>
            </Typography>
        </>
    );
}