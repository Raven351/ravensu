import React from 'react'
import axios from 'axios'
import {makeStyles} from '@material-ui/core/styles'
import {Container, TextField, createMuiTheme, ThemeProvider, Button, Dialog, DialogTitle, CircularProgress, withStyles, Avatar, DialogContent, DialogContentText, DialogActions, Grid, Typography} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import {blue} from '@material-ui/core/colors'
import TextLang from '../TextLang'

const useStyles = makeStyles (theme => ({
    root: {
        [theme.breakpoints.down('sm')]:{
            marginTop: 60,
        },
        [theme.breakpoints.up('md')]:{
            marginTop: 50,
        },
        height: 500,

    },
    textfieldRoot: {
        width: "100%",
        padding: 10,
        marginBottom: 10,
        
    },
    textField: {
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 4,
        width: "100%",
        
    },
    textFieldMessage:{
        width: "100%"
    },
    emailSendingDialogRoot:{
        margin: 20
    },
    button:{
        width: 300,
        height: 70,
        backgroundColor: "#2fa33f",
        color: "#ffffff",
        '&:hover':{
            backgroundColor: "#44e35a"
        }
    }
}));

const textFieldTheme = createMuiTheme({
    palette: {
        primary: blue
    }
})

const ColoredCircularProgress = withStyles({
    root: {
        color: '#ffffff'
    }
})(CircularProgress);


function EmailSendingDialog(props){
    const classes = useStyles();
    const {isOpen, onClose, showSendingEmailProgress, showEmailSendSuccedIcon, showEmailSendFailIcon} = props;
    return(
        <div className = {classes.emailSendingDialogRoot}>
            <Dialog open = {isOpen} onClose = {onClose} PaperProps = {{style: {backgroundColor: "transparent", boxShadow: "none", padding: 50}}}>
                {showSendingEmailProgress && <ColoredCircularProgress size = {100} />}
                {showEmailSendSuccedIcon && <Avatar style = {{height: 100, width: 100, backgroundColor: "#59e387"}}><CheckIcon style = {{fontSize: "48px"}} /></Avatar>}
                {showEmailSendFailIcon && <Avatar style = {{height: 100, width: 100, backgroundColor: "#eb6c6c"}}><ClearIcon style = {{fontSize: "48px"}} /></Avatar>}
            </Dialog>
        </div>

    );
}

function EmailSentErrorDialog(props){
    const classes = useStyles();
    const {isOpen, onClose, errorCode, errorMessage, errorStack} = props;
    //let errorDialogContent = `Error Code: ${errorCode}\n${errorMessage}\n\n${errorStack}\nPlease let me know about this error at email@email.com\nAttach screenshot of this error message if possible.`
    let errorDialogContent = `Please let me know about this error at bartosz.baum@ravensu.com\n${errorCode}\n${errorMessage}`
    return(
        <div>
            <Dialog open = {isOpen} onClose = {onClose}>
                <DialogTitle>{"Error occured while trying to send a message"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {errorDialogContent}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick = {onClose} style = {{backgroundColor: "#366abf", color: "#ffffff"}}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

function Contact(props){
    const classes = useStyles();
    const fetchEmailTimoutTimer = React.useRef();
    const emailSendingNotificationTimer = React.useRef();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isEmailSendingDialogOpen, setEmailSendingDialogOpen] = React.useState(false);
    const [showSendingEmailProgress, setShowSendingEmailProgress] = React.useState(false);
    const [showEmailSendSuccedIcon, setShowEmailSendSuccedIcon] = React.useState(false);
    const [showEmailSendFailIcon, setShowEmailSendFailIcon] = React.useState(false);
    const [isEmailSentErrorDialogOpen, setIsEmailSentErrorDialogOpen] = React.useState(false);
    React.useEffect(() => {
        return () => {
          clearTimeout(emailSendingNotificationTimer.current);
        };
      }, []);
    let mailData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }
    let errorCode = "";
    let errorMessage = "";
    let errorStack = "";
    const resetForm = () =>{
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }
    const onNameChange = (e) =>{
        setName(e.target.value);
    }
    const onEmailChange = (e) =>{
        setEmail(e.target.value);
    }
    const onSubjectChange = (e) =>{
        setSubject(e.target.value);
    }
    const onMessageChange = (e) =>{
        setMessage(e.target.value);
    }
    const handleEmailSendingDialogClose = () =>{
        if (showEmailSendSuccedIcon || showEmailSendFailIcon){
            setEmailSendingDialogOpen(false);
            clearTimeout(emailSendingNotificationTimer.current);
            setShowEmailSendSuccedIcon(false);
            setShowEmailSendFailIcon(false);
        }
        if (showEmailSendFailIcon){
            setIsEmailSentErrorDialogOpen(true);
        }
    }
    const handleEmailSentErrorDialogClose = () =>{
        setIsEmailSentErrorDialogOpen(false);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setEmailSendingDialogOpen(true);
        setShowSendingEmailProgress(true);
        axios.post(process.env.REACT_APP_CONTACT_SEND_ENDPOINT, mailData, {timeout: 10000, headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
        .then((response) =>{
            if (response.data.status === 'success'){
                setShowSendingEmailProgress(false);
                setShowEmailSendSuccedIcon(true);
                emailSendingNotificationTimer.current = setTimeout(()=>{
                    setShowEmailSendSuccedIcon(false);
                    setEmailSendingDialogOpen(false);
                }, 2000);
                //resetForm();
            }
            else if(response.data.status === 'fail'){
                setShowSendingEmailProgress(false);
                setShowEmailSendFailIcon(true);
                errorMessage = response.data;
                emailSendingNotificationTimer.current = setTimeout(()=>{
                    setShowEmailSendFailIcon(false);
                    setEmailSendingDialogOpen(false);
                    setIsEmailSentErrorDialogOpen(true);
                }, 2000);
            }
        })
        .catch(err => {
                setShowSendingEmailProgress(false);
                setShowEmailSendFailIcon(true);
                errorCode = err.code;
                errorMessage = err.message;
                errorStack = err.stack;
                emailSendingNotificationTimer.current = setTimeout(()=>{
                    setShowEmailSendFailIcon(false);
                    setEmailSendingDialogOpen(false);
                    setIsEmailSentErrorDialogOpen(true);
                }, 2000);
        });
    }

    return(
        <>
        <Container maxWidth = "xl" className = {classes.root}>
            <Typography
            variant = "h4"
            component = "h1"
            align = "center"
            style = {{color: "#ffffff", fontFamily: "Baloo Thambi 2"}}
            >
                <TextLang textId = "contactHeader"/>
            </Typography>
            <form onSubmit = {handleSubmit.bind(this)}>
            <ThemeProvider theme = {textFieldTheme}>
                <Grid 
                container
                direction = "row"
                justify = "center"
                alignItems = "flex-start"
                style = {{height: "100%", marginTop: 50}}
                >
                    <Grid item md = {2}/>
                    <Grid
                    container
                    item
                    direction = "column"
                    justify = "flex-start"
                    alignItems = "flex-start"
                    style = {{height: "200"}}
                    md = {4}
                    >           
                        <Grid item className = {classes.textfieldRoot}><TextField required label = {<TextLang textId = "contactInputSubject"/>} variant = "filled" classes = {{root: classes.textField}} value = {subject} onChange = {onSubjectChange.bind(this)}/></Grid>
                        <Grid item className = {classes.textfieldRoot}><TextField required label = {<TextLang textId = "contactInputName"/>} variant = "filled" classes = {{root: classes.textField}} value = {name} onChange = {onNameChange.bind(this)}/></Grid>
                        <Grid item className = {classes.textfieldRoot}><TextField required label = {<TextLang textId = "contactInputEmail"/>} variant = "filled" classes = {{root: classes.textField}} value = {email} onChange = {onEmailChange.bind(this)}/></Grid>
                    </Grid>
                    <Grid
                    container
                    item
                    size
                    direction = "column"
                    justify = "flex-start"
                    alignItems = "center"
                    md = {4}
                    >
                        <Grid item className = {classes.textfieldRoot}><TextField required label = {<TextLang textId = "contactInputMessage"/>} variant = "filled" classes = {{root: classes.textField}} multiline rows = {20} value = {message} onChange = {onMessageChange.bind(this)}/></Grid>
                    </Grid>
                    <Grid item md = {2}/>
                </Grid>
            </ThemeProvider>
                <Grid container justify = "center" style = {{marginTop: 30}}>
                    <Grid item style = {{marginBottom: 30}}>
                        <Button
                            type = "submit"
                            variant="contained"
                            color="default"
                            size = "large"
                            className={classes.button}
                            endIcon={<SendIcon/>}
                            >
                                {<TextLang textId = "contactSendButton"/>}
                        </Button>
                    </Grid>
                </Grid>

            </form>
        </Container>
        <EmailSendingDialog 
        isOpen = {isEmailSendingDialogOpen} 
        onClose = {handleEmailSendingDialogClose}
        showSendingEmailProgress = {showSendingEmailProgress}
        showEmailSendSuccedIcon = {showEmailSendSuccedIcon}
        showEmailSendFailIcon = {showEmailSendFailIcon}
        />
        <EmailSentErrorDialog
        isOpen = {isEmailSentErrorDialogOpen}
        onClose = {handleEmailSentErrorDialogClose}
        errorCode = {errorCode}
        errorMessage = {errorMessage}
        errorStack = {errorStack}
        />
        </>
    );
}

export default Contact