import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route, useRouteMatch, useLocation, useHistory} from 'react-router-dom'
import {Grow, Grid} from '@material-ui/core'
import Home from './Tabs/Home'
import About from './Tabs/About'

function RenderRoute({children}){
    const [mount, setMount] = React.useState(false);
    const RenderContent = () =>{
        return (
            <Grow in = {mount === true}>
                <Grid container style = {{marginTop: 100}}>
                    {children}
                </Grid>
            </Grow>
        );
    }
    useEffect(()=>{
        setMount(true);
        return function cleanup(){setMount(false)};
    }, [children])
    return(
        <RenderContent/>
    );
}

function RenderHome(){
    const [mount, setMount] = React.useState(false);
    useEffect(() => {
        setMount(true);
    })
    return(
        <Grow in = {mount === true}>
            <Grid container style = {{marginTop: 100}}>
                <Home/>
            </Grid>
        </Grow>   
    )
}

function RenderAbout(){
    const [mount, setMount] = React.useState(false);
    useEffect(() => {
        setMount(true);
    })
    return(
        <Grow in = {mount === true}>
            <Grid container style = {{marginTop: 100}}>
                <About/>
            </Grid>
        </Grow>   
    )
}

function MainContentRouter(){
    let routeMatch = useRouteMatch();
    let routerLocation = useLocation();
    const [routeName, setRouteName] = React.useState("/");
    return (
        <Switch>
            <Route path exact ="/">
                <RenderHome/>
            </Route>
            <Route path ="/about">
                <RenderAbout/>
            </Route>
        </Switch>
    );
}

export default MainContentRouter;