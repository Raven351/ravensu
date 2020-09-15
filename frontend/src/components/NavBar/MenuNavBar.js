import React from 'react'
import {BrowserRouter as Router, withRouter, Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import {Tabs, Tab} from '@material-ui/core'
import SocialMedia from './SocialMedia'
import TextLang from '../TextLang'
import LangaugeSelector from './LanguageSelector'


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
    tab:{
        [theme.breakpoints.up('lg')]:{
            minWidth: 200,
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
                <Tab component={Link} to="/" label = {<TextLang textId = "navHome"/>} disableTouchRipple = "true" value={0} className = {classes.tab}/>
                <Tab component = {Link} label = {<TextLang textId = "navAbout"/>} to = {{pathname: "/about", state: {about: true}}} disableTouchRipple = "true" value = {1} className = {classes.tab}/>
                <Tab component = {Link} label = {<TextLang textId = "navProjects"/>} to = "/projects" disableTouchRipple = "true" value = {2} className = {classes.tab}/>
                <Tab component = {Link} label = {<TextLang textId = "navContact"/>} to = "/contact" disableTouchRipple = "true" value = {4} className = {classes.tab}/> 
            </Tabs>
            <span style = {{marginTop: 10}}>
                <SocialMedia style ={{flexGrow: 1}}/>
            </span>
            <span style = {{marginTop:4, marginLeft: 10}}>
                <LangaugeSelector/>
            </span>
            

        </div>
    );
}

export default withRouter(MenuNavBar)