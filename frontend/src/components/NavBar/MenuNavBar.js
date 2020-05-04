import React from 'react'
import {BrowserRouter as Router, withRouter, Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import {Tabs, Tab} from '@material-ui/core'
import SocialMedia from './SocialMedia'


const useStyles = makeStyles(theme => ({
    appBar: {
        flexGrow: 1,
        display: "inline-flex",
        width: "100%"
    },
    tabsIndicator: {
        backgroundColor: "#ffffff", 
        [theme.breakpoints.down('sm')]:{
            backgroundColor: "transparent"
        }
    },
}));



function MenuNavBar(props){
    const classes = useStyles();

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
    const tabValueFromPath = () =>{
        const path = parentPath();
        if (path === '/') return 0;
        if (path === '/about') return 1;
        if (path === '/projects') return 2;
        if (path === '/contact') return 4;
        else return 0;
    }
    const [tabValue, setTabValue] = React.useState(() => tabValueFromPath());
    const handleTabChange = (event, value) =>{
        setTabValue(value);
    }
    return (
        <div className = {classes.appBar}>
            <Tabs style ={{flexGrow: 1}} value = {tabValue} onChange = {handleTabChange} classes = {{indicator: classes.tabsIndicator} }>
                <Tab component={Link} to="/" label = "Home" disableTouchRipple = "true" value={0}/>
                <Tab component = {Link} label = "About" to = {{pathname: "/about", state: {about: true}}} disableTouchRipple = "true" value = {1}/>
                <Tab component = {Link} label = "Sample projects" to = "/projects" disableTouchRipple = "true" value = {2}/>
                <Tab component = {Link} label = "Contact" to = "/contact" disableTouchRipple = "true" value = {4}/> 
            </Tabs>
            <SocialMedia style ={{flexGrow: 1}}/>
        </div>
    );
}

export default withRouter(MenuNavBar)