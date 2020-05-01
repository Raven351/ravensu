import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import './title.css'

const Title = () => {
    return(
        <Grid item>
            <Container>            
                <h1 className="ravensu">raven</h1>
                <h1 className="ravensu" id="su">su</h1>
            </Container>
        </Grid>
    );
}
export default Title