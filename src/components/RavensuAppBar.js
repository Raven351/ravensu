import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuTabs from './Routes/MenuTabs'
import MenuNavBar from './NavBar/MenuNavBar'
import { makeStyles, Drawer, Box, SwipeableDrawer, List} from '@material-ui/core'
import SocialMedia from './NavBar/SocialMedia'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import withWidth, {isWidthUp} from '@material-ui/core/withWidth'
import MenuNavBarMobile from './NavBar/MenuNavBarMobile'

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
    <AppBar position = "sticky" className = {classes.appBar} style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
            <MenuNavBar/>
        </Toolbar>            
    </AppBar> 
    );
}

function RavensuAppBar(props){
    const [tabValue, setTabValue] = React.useState(0);
    if(isWidthUp('md', props.width)) return <AppBarNormal/>;
    else return <MenuNavBarMobile/>;
}

export default withWidth()(RavensuAppBar)