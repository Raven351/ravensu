import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuTabs from './Tabs/MenuTabs'
import { makeStyles } from '@material-ui/core'
import SocialMedia from './Tabs/SocialMedia'

const useStyles = makeStyles(theme =>({
    appBar : {
        [theme.breakpoints.down("sm")]:{
            alignItems: "center"
        }
    },

    toolbarInside : {

    },

    socialMedia : {
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        }
    }

}));


function RavensuAppBar(){
    const classes = useStyles();
    return(
        <AppBar position = "static" className = {classes.appBar} style={{ background: 'transparent', boxShadow: 'none'}}>
            <Toolbar>
                <MenuTabs/>
                <div className = {classes.socialMedia}><SocialMedia/></div>
            </Toolbar>            
        </AppBar>      
    )
}

export default RavensuAppBar