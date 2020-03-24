import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route, useRouteMatch, useLocation, useHistory} from 'react-router-dom'
import {Grow, Grid} from '@material-ui/core'
import Home from './Tabs/Home'
import About from './Tabs/About'
import Projects from './Tabs/Projects'

function RenderRoute({children, showAnimation}){
    const [mount, setMount] = React.useState(false);
    const RenderContent = () =>{
        if (showAnimation === false){
            return (
                <Grid container style = {{marginTop: 100}}>
                    {children}
                </Grid>
            )
        }
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
function RenderProjects(){
    const [mount, setMount] = React.useState(false);
    useEffect(() => {
        setMount(true);
    })
    return(
        <Grow in = {mount === true}>
            <Grid container style = {{marginTop: 100}}>
                <Projects/>
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
                <RenderRoute children = {<Home/>}/>
            </Route>
            <Route path ="/about">
                <RenderRoute children = {<About/>}/>             
            </Route>
            {/* <Route path = "/projects/:projectid">
                <RenderRoute showAnimation = {false} children = {<Projects/>}/>
            </Route> */}
            <Route path ="/projects">
                <RenderRoute children = {<Projects/>}/>
            </Route>
        </Switch>
    );
}

export default MainContentRouter;