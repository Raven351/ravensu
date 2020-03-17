import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, AppBar, Box, Menu, MenuItem, Paper, Fade, Grow } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import SocialMedia from './SocialMedia'
import withWidth from '@material-ui/core/withWidth'
import TabPanel from './TabPanel'
import Grid from '@material-ui/core/Grid'
import Home from './Home'
import AboutMe from './About'

const useStyles = makeStyles(theme => ({
    tabs: {
        display: "inline-flex"
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

    appBar: {
        flexGrow: 1,
        display: "inline-flex",
        width: "100%"
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
            <div className = {classes.appBar}>
                <Box display = "flex" className = {classes.appBar}>
                    <Box flexGrow = {1} display = "flex">
                        <Tabs className = {classes.tabs} value={value} onChange={handleChange} classes = {{indicator: classes.tabsIndicator} } textColor = "inherit" {...tabsProps} >
                            <Tab label = "Home" id = "tab-0" disableTouchRipple = "true" className = {classes.tab}/>
                            <Tab label = "About" id ="tab-1" disableTouchRipple = "true" className = {classes.tab}/>
                            <Tab label = "Sample projects" id = "tab-2" disableTouchRipple = "true" className = {classes.tab}/>
                            <Tab label = "Hobbies" id = "tab-3" disableTouchRipple = "true" className = {classes.tab}/>
                            <Tab label = "Contact" id = "tab-4" disableTouchRipple = "true" className = {classes.tab}/>
                        </Tabs>           
                    </Box>                  
                    <Box>
                        <SocialMedia className =  {classes.flexGrow}/>
                    </Box>
                </Box>
            </div>
            <div style = {{height: "20px"}}></div>
            <TabPanel value = {value} index = {0}>
                <Grid 
                    container
                    direction = "column"
                    justify = "flex-start"
                    aligntItems = "flex-start"
                    style = {{marginTop: 150}}
                >
                    <Grow in = {value === 0} timeout = {500} >
                        <Grid item>
                                <Home/>
                        </Grid>
                    </Grow>
                </Grid>           
            </TabPanel>
            <TabPanel value = {value} index = {1}>
            <Grow in = {value === 1} timeout = {500} >
                <Grid
                    container
                    direction = "row"
                    justify = "space-evenly"
                    aligntItems = "center"
                    style = {{marginTop: 50}}
                     >
                        <AboutMe/>
                    </Grid>
                </Grow>
            </TabPanel>
        </div>
    )
}

export default withWidth()(MenuTabs)