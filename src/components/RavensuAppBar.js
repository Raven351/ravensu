import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuTabs from './Tabs/MenuTabs'
import MenuNavBar from './NavBar/MenuNavBar'
import { makeStyles, Drawer, Box, SwipeableDrawer, List} from '@material-ui/core'
import SocialMedia from './NavBar/SocialMedia'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import withWidth, {isWidthUp} from '@material-ui/core/withWidth'

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

function AppBarNormal() {
    const classes = useStyles();
    return(
    <AppBar position = "static" className = {classes.appBar} style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
            <MenuNavBar/>
        </Toolbar>            
    </AppBar> 
    );
}

function AppBarMobile(){
    const classes = useStyles();
    const [newTabValue, setNewTabValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [drawerState, setDrawerState] = React.useState(false);
    const handleMenuClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = (newTabValue) =>{

        setAnchorEl(null);
    }
    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key==='Tab' || event.key === 'Shift')) return;
        setDrawerState(open)
    }

    const drawerContent = () => (
        <Box onClick = {toggleDrawer(false)} justifyContent = "center" display="flex">
            <List>
            <MenuTabs/>
            </List>
        </Box>
        );

    return(
        <div>
            <AppBar position = "static" className = {classes.appBar} style={{ background: 'transparent', boxShadow: 'none'}} >
                <Toolbar>
                    <IconButton
                        edge = "start"
                        aria-control = "menu"
                        onClick = {toggleDrawer(true)}
                    >
                        <MenuIcon style = {{color: "#ffffff"}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer open = {drawerState} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)} anchor = "top" variant = "temporary" >
                {drawerContent()}
            </SwipeableDrawer>
        </div>
    );
}

function RavensuAppBar(props){
    const [tabValue, setTabValue] = React.useState(0);
    if(isWidthUp('md', props.width)) return <AppBarNormal/>;
    else return <AppBarMobile/> 
}

export default withWidth()(RavensuAppBar)