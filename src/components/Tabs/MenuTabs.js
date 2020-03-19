import React from 'react'
import {withRouter, useLocation, useHistory} from 'react-router-dom'
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
import Projects from './Projects'

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

function MenuTabs(props){
    const classes = useStyles();
    const isMobile = /xs|sm/.test(props.width);
    const isSmall = /sm/.test(props.width);
    const tabsProps = {
        orientation: isMobile ? "vertical" : "horizontal",
    };
    const handleChange = (event, newValue) =>{
        props.history.push(newValue);
    };

    const parentPath = () =>{
        var path = props.history.location.pathname;
        var count = (path.match(/\//g) || []).length;
        if (count <= 1) return path;
        else {
            var firstOccurence = path.indexOf("/");
            var secondOccurence = path.indexOf("/", firstOccurence + 1);
            var returnString = path.substring(0,secondOccurence);
            return path.substring(0,secondOccurence);
        }
    }

    return(
        <div className = {classes.grow}>
            <div className = {classes.appBar}>
                <Box display = "flex" className = {classes.appBar} component = 'nav'>
                    <Box flexGrow = {1} display = "flex">
                        <Tabs className = {classes.tabs} value={parentPath()} onChange={handleChange} classes = {{indicator: classes.tabsIndicator} } textColor = "inherit" {...tabsProps} >
                            <Tab label = "Home" id = "tab-0" disableTouchRipple = "true" className = {classes.tab} value = '/'/>
                            <Tab label = "About" disableTouchRipple = "true" className = {classes.tab} value = '/about'/>
                            <Tab label = "Sample projects" disableTouchRipple = "true" className = {classes.tab} value = '/projects'/>
                            <Tab label = "Hobbies" disableTouchRipple = "true" className = {classes.tab} value = '/hobbies'/>
                            <Tab label = "Contact" disableTouchRipple = "true" className = {classes.tab} value = '/contact'/>
                        </Tabs>           
                    </Box>                  
                    <Box>
                        <SocialMedia className =  {classes.flexGrow}/>
                    </Box>
                </Box>
            </div>
            <div style = {{height: "20px"}}></div>
            <TabPanel value = {props.history.location.pathname} index = '/'>
                <Grow in = {props.history.location.pathname === '/'} timeout = {500}>
                    <Grid 
                    container
                    style = {{marginTop: 150}}
                    >
                        <Home/>
                    </Grid>
                </Grow>      
            </TabPanel>
            <TabPanel value = {props.history.location.pathname} index = '/about'>
                <Grow in = {props.history.location.pathname === '/about'} timeout = {500} >
                    <Grid
                    container
                    style = {{marginTop: 50}}
                    >
                        <AboutMe/>
                    </Grid>
                </Grow>
            </TabPanel>
            <TabPanel value = {props.history.location.pathname} index = '/projects'>
                <Grow in = {props.history.location.pathname === '/projects'} timeout = {500} >
                    <Grid
                    container
                    style = {{marginTop: 50}}
                    >
                        <Projects/>
                    </Grid>
                </Grow>
            </TabPanel>
        </div>
    )
}

export default withRouter(withWidth()(MenuTabs))