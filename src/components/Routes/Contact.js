import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Container, TextField, createMuiTheme, ThemeProvider, Button} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import {blue} from '@material-ui/core/colors'

const useStyles = makeStyles (theme => ({
    textField: {
        backgroundColor: "rgba(255,255,255,0.9)",
        borderRadius: 4,
        
    },
}));

const textFieldTheme = createMuiTheme({
    palette: {
        primary: blue
    }
})

function Contact(props){
    const classes = useStyles();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');
    const resetForm = () =>{
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }
    const onNameChange = (e) =>{
        setName(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return(
        <form onSubmit = {handleSubmit.bind(this)}>
            <Container>
                <ThemeProvider theme = {textFieldTheme}>
                    <TextField required label = "Name" variant = "filled" classes = {{root: classes.textField}} onChange = {onNameChange.bind(this)}/>
                    <TextField required label = "Email" variant = "filled" helperText = "Email address to respond to" classes = {{root: classes.textField}}/>
                    <TextField required label = "Subject" variant = "filled" classes = {{root: classes.textField}}/>
                    <TextField required label = "Message" variant = "filled" classes = {{root: classes.textField}} multiline rows = {10}/>
                </ThemeProvider>
                <Button
                type = "submit"
                variant="contained"
                color="default"
                size = "large"
                className={classes.button}
                endIcon={<SendIcon/>}
                >
                    Send
                </Button>
            </Container>
        </form>
    );
}

export default Contact