import React from 'react'
import {Box, Typography, Paper} from '@material-ui/core'


const AboutMeContent = 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ligula quam, porta a tellus quis, hendrerit aliquet dui. Donec vel eros eget metus cursus lacinia. Nunc ut velit sit amet ante gravida condimentum. Donec dictum odio id finibus malesuada. Donec cursus leo elit, non lobortis mi pharetra sed. Donec ornare a eros sit amet auctor. Curabitur lacinia risus erat, sit amet maximus nulla vulputate posuere. Proin nec augue in quam fermentum consequat. Praesent sit amet quam ac lorem interdum rutrum. Donec nisl elit, blandit in scelerisque in, dictum ut augue. Quisque efficitur dictum turpis sit amet consectetur. Nullam porttitor pulvinar purus, nec commodo purus egestas ac.Duis urna magna, fermentum eu tincidunt id, fermentum id tortor. Proin accumsan eu risus in commodo. Aliquam gravida ante iaculis viverra efficitur. "

export default function AboutDetails(){
    return(
        <>
            <Typography
                variant = "h4"
                component = "h1"
                paragraph = "true"
            >
                About me
            </Typography>
            <Typography
                variant = "body1"
                paragraph = "true"
            >
                    {AboutMeContent} 
            </Typography>
        </>
    );
}