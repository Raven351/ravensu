import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import { makeStyles, AppBar, Box } from '@material-ui/core';
import SocialMedia from './SocialMedia'

const useStyles = makeStyles(theme => ({
    tabs: {
        backgroundColor: "#ffffff"
    },
    tab: {
        flexGrow:1
    },

    grow: {
        flexGrow: 1
    }

}))

function MenuTabs(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) =>{
        setValue (newValue);
    }

    return(
        <div className = {classes.grow}>
            <Tabs value={value} onChange={handleChange} classes = {{indicator: classes.tabs}} textColor = "inherit">
                <Tab label = "Home" id = "tab-0" disableTouchRipple = "true"/>
                <Tab label = "About" id ="tab-1" disableTouchRipple = "true"/>
                <Tab label = "Skills" id = "tab-2" disableTouchRipple = "true"/>
                <Tab label = "Sample projects" id = "tab-3" disableTouchRipple = "true"/>
                <Tab label = "Contact" id = "tab-4" disableTouchRipple = "true"/>
                <Box className = {classes.grow}/>
                <SocialMedia/>
            </Tabs>
        </div>
    )
}

export default MenuTabs