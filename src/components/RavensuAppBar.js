import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import MenuTabs from './Tabs/MenuTabs'
import { makeStyles } from '@material-ui/core'
import SocialMedia from './Tabs/SocialMedia'

const useStyles = makeStyles(theme =>({

}));


function RavensuAppBar(){
    const classes = useStyles();
    return(
        <AppBar position = "static" className = "AppBar" style={{ background: 'transparent', boxShadow: 'none'}}>
            <MenuTabs/>
        </AppBar>      
    )
}

export default RavensuAppBar