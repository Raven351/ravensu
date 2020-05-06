import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {makeStyles, Link} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    socialMediaDiv : {
        //marginTop: theme.spacing(1),
        display: 'flex'
    },

    socialMediaIcon : {
        marginRight: theme.spacing(1.8),
        marginLeft: theme.spacing(1.8)
    }

}));


function SocialMedia(props){
    const classes = useStyles();
    return(
        <div className = {classes.socialMediaDiv}> 
            <Link target = "_blank" href = "https://www.instagram.com/raven.brt" style = {{textDecoration: "none", color: "#ffffff"}} color = "textSecondary">
                <InstagramIcon className = {classes.socialMediaIcon}/>
            </Link>       
            <Link target = "_blank" href = "https://www.linkedin.com/in/bartosz-baum-1aa12419a/" style = {{textDecoration: "none", color: "#ffffff"}} color = "textSecondary">
                <LinkedInIcon className = {classes.socialMediaIcon}/>
            </Link>       
            <Link target = "_blank" href = "https://github.com/Raven351" style = {{textDecoration: "none", color: "#ffffff"}} color = "textSecondary">
                <GitHubIcon className = {classes.socialMediaIcon}/>
            </Link>       
        </div>

    )
}

export default SocialMedia