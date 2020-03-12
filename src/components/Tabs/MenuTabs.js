import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, AppBar, Box, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import SocialMedia from './SocialMedia'
import withWidth from '@material-ui/core/withWidth'

const useStyles = makeStyles(theme => ({
    tabs: {
             
    },

    tabsIndicator: {
        backgroundColor: "#ffffff", 
        [theme.breakpoints.down('sm')]:{
            backgroundColor: "transparent"
        }
    },
    tab: {
        // disableTouchRipple: 'true',
        // display: 'none',
        // [theme.breakpoints.up('md')]:{
        //     display: 'block',
        // },
    },

    grow: {
        flexGrow: 1
    },

    menuButton:{
        display: 'none',
        // [theme.breakpoints.down('sm')]:{
        //     display:'block',
        //     marginLeft: theme.spacing(1)
        // }
    }

}));

function MenuTabs({width}){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null)

    const isMobile = /xs|sm/.test(width);
    const isSmall = /sm/.test(width);
    const tabsProps = {
        orientation: isMobile ? "vertical" : "horizontal",
    };

    const handleChange = (event, newValue) =>{
        setValue (newValue);
    };

    const handleMenuClick = event =>{
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (newValue) =>{
        handleChange(newValue);
        setAnchorEl(null);
    }

    return(
        <div className = {classes.grow}>
            <IconButton
                edge = "start"
                className = {classes.menuButton}
                color = "inherit"
                disableTouchRipple = "true"
                aria-control = "menu"
                onClick = {handleMenuClick} 
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id = 'menu'
                anchorEl = {anchorEl}
                keepMounted
                open = {Boolean(anchorEl)}
                onClose = {handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            </Menu>
            <Tabs value={value} onChange={handleChange} classes = {{indicator: classes.tabsIndicator} } textColor = "inherit" {...tabsProps}>
                <Tab label = "Home" id = "tab-0" disableTouchRipple = "true" className = {classes.tab}/>
                <Tab label = "About" id ="tab-1" disableTouchRipple = "true" className = {classes.tab}/>
                <Tab label = "Skills" id = "tab-2" disableTouchRipple = "true" className = {classes.tab}/>
                <Tab label = "Sample projects" id = "tab-3" disableTouchRipple = "true" className = {classes.tab}/>
                <Tab label = "Contact" id = "tab-4" disableTouchRipple = "true" className = {classes.tab}/>
                <Box className = {classes.grow}/>
            </Tabs>
        </div>
    )
}

export default withWidth()(MenuTabs)