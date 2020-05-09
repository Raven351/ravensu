import React from 'react'
import {BrowserRouter as Router, withRouter, Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, SwipeableDrawer, List, ListItemText, ListItem, Divider, ListItemIcon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import WeekendIcon from '@material-ui/icons/Weekend';
import MailIcon from '@material-ui/icons/Mail';
import SocialMedia from './SocialMedia'
import TextLang from '../TextLang'
import LangaugeSelector from './LanguageSelector';

const useStyles = makeStyles(theme => ({
    appBarDiv: {
        flexGrow: 1,
        display: "inline-flex",
        width: "100%"
    },
    appBar:{
        background: "#1178c2"
    },
    drawerContent: {
        width: "50vw",
    }
}));

function DrawerContent(props){
    const classes = useStyles();
    return(
        <div className = {classes.drawerContent}>
            <List>
                <ListItem>
                    <ListItemText primary = 'Menu'/>
                </ListItem>
                <Divider/>
                <ListItem button component = {Link} to = '/' onClick = {props.itemOnClickCallback}>
                    <ListItemIcon><HomeIcon/></ListItemIcon>
                    <ListItemText primary = {<TextLang textId = "navHome"/>}/>
                </ListItem>
                <ListItem button component = {Link} to = '/about' onClick = {props.itemOnClickCallback} >
                    <ListItemIcon><InfoIcon/></ListItemIcon>
                    <ListItemText primary = {<TextLang textId = "navAbout"/>}/>
                </ListItem>
                <ListItem button component = {Link} to = '/projects' onClick = {props.itemOnClickCallback} >
                    <ListItemIcon><AccountBalanceWalletIcon/></ListItemIcon>
                    <ListItemText primary = {<TextLang textId = "navProjects"/>}/>
                </ListItem>
                {/* <ListItem button component = {Link} to = '/hobbies' onClick = {props.itemOnClickCallback} >
                    <ListItemIcon><WeekendIcon/></ListItemIcon>
                    <ListItemText primary = 'Hobbies'/>
                </ListItem> */}
                <ListItem button component = {Link} to = '/contact' onClick = {props.itemOnClickCallback} >
                    <ListItemIcon><MailIcon/></ListItemIcon>
                    <ListItemText primary = {<TextLang textId = "navContact"/>}/>
                </ListItem>
            </List>
        </div>
    );
}

function MenuNavBarMobile(props){
    const classes = useStyles();
    const [menuDrawerState, setMenuDrawerState] = React.useState(false);
    const toggleMenuDrawer = (isOpen) => event => {
        if (event && event.type === 'keydown' && (event.key==='Tab' || event.key === 'Shift')) return;
        setMenuDrawerState(isOpen);
    }
    return(
        <div className =  {classes.appBarDiv}>
            <SwipeableDrawer open = {menuDrawerState} onOpen = {toggleMenuDrawer(true)} onClose = {toggleMenuDrawer(false)} anchor = "left">
                <DrawerContent itemOnClickCallback = {() => setMenuDrawerState(false)}/>
            </SwipeableDrawer>
            <AppBar position = "fixed" className = {classes.appBar}>
                <Toolbar>
                    <IconButton edge = "start" className = {classes.menuButton} color = "inherit" style = {{flexGrow: 1}} 
                    onClick = {() => setMenuDrawerState(true)}
                    >
                        <MenuIcon /> 
                    </IconButton>
                    <LangaugeSelector/> 
                    <span style = {{flexGrow: 5}}/>
                    <SocialMedia/>
                    
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MenuNavBarMobile