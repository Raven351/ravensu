import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    socialMediaDiv : {
        //marginTop: theme.spacing(1),
        display: 'flex'
    },

    socialMediaIcon : {
        marginRight: theme.spacing(2)
    }

}));


function SocialMedia(){
    const classes = useStyles();
    return(
        <div className = {classes.socialMediaDiv}>        
            <InstagramIcon className = {classes.socialMediaIcon}/>
            <LinkedInIcon className = {classes.socialMediaIcon}/>
            <GitHubIcon className = {classes.socialMediaIcon}/>
        </div>

    )
}

export default SocialMedia