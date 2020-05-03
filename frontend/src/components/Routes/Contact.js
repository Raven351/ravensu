import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Container, TextField, createMuiTheme, ThemeProvider, Button, Dialog, DialogTitle, CircularProgress, withStyles, Avatar} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import {blue} from '@material-ui/core/colors'

const useStyles = makeStyles (theme => ({
    textField: {
        backgroundColor: "rgba(255,255,255,0.9)",
        borderRadius: 4,
        
    },
    emailSendingDialogRoot:{
        margin: 20
    },
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
            <Dialog open = {isOpen} PaperProps = {{style: {backgroundColor: "transparent", boxShadow: "none", padding: 50}}}>
                {showSendingEmailProgress && <ColoredCircularProgress size = {100} />}
                {showEmailSendSuccedIcon && <Avatar style = {{height: 100, width: 100, backgroundColor: "#59e387"}}><CheckIcon style = {{fontSize: "48px"}} /></Avatar>}
                {showEmailSendFailIcon && <Avatar style = {{height: 100, width: 100, backgroundColor: "#59e387"}}><CancelIcon style = {{fontSize: "48px"}} /></Avatar>}
            </Dialog>
        </div>

    );
}

function EmailSentStatusDialog(props){
    const classes = useStyles();
    const {isOpen, onClose, dialogMessage} = props;
    return(
        <div>
            <Dialog>
                <DialogTitle>{"Error"}</DialogTitle>
            </Dialog>
        </div>
    )
}

function Contact(props){
    const classes = useStyles();
    const fetchEmailTimoutTimer = React.useRef();
    const emailSendingNotificationTimer = React.useRef();
    const [name, setName] = React.useState('Temp Name');
    const [email, setEmail] = React.useState('Temp email@email.com');
    const [subject, setSubject] = React.useState('Temp Subject');
    const [message, setMessage] = React.useState('Temp message some message');
    const [isEmailSendingDialogOpen, setEmailSendingDialogOpen] = React.useState(false);
    const [showSendingEmailProgress, setShowSendingEmailProgress] = React.useState(false);
    const [showEmailSendSuccedIcon, setShowEmailSendSuccedIcon] = React.useState(false);
    const [showEmailSendFailIcon, setShowEmailSendFailIcon] = React.useState(false);
    const [emailSentStatusDialog, setEmailSentStatusDialog] = React.useState(false);
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
        setEmailSendingDialogOpen(false);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setEmailSendingDialogOpen(true);
        setShowSendingEmailProgress(true);
        fetchEmailTimoutTimer.current = setTimeout(() => {
            
        }, 10000);
        fetch('http://localhost:8001/send',{
            method: "POST",
            body: JSON.stringify(mailData),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            response => (response.json())
        ).then((response) =>{
            if (response.status === 'success'){
                setShowSendingEmailProgress(false);
                setShowEmailSendSuccedIcon(true);
                emailSendingNotificationTimer.current = setTimeout(()=>{
                    setShowEmailSendSuccedIcon(false);
                    setEmailSendingDialogOpen(false);
                }, 2000);
                //resetForm();
            }
            else if(response.status === 'fail'){
                setShowSendingEmailProgress(false);
                setShowEmailSendFailIcon(true);
                emailSendingNotificationTimer.current = setTimeout(()=>{
                    setShowEmailSendFailIcon(false);
                    setEmailSendingDialogOpen(false);
                }, 1000);
                //details dialog
            }
        })
    }

    return(
        <>
        <form onSubmit = {handleSubmit.bind(this)}>
            <Container>
                <ThemeProvider theme = {textFieldTheme}>
                    <TextField required label = "Name" variant = "filled" classes = {{root: classes.textField}} value = {name} onChange = {onNameChange.bind(this)}/>
                    <TextField required label = "Email" variant = "filled" helperText = "Email address to respond to" classes = {{root: classes.textField}} value = {email} onChange = {onEmailChange.bind(this)}/>
                    <TextField required label = "Subject" variant = "filled" classes = {{root: classes.textField}} value = {subject} onChange = {onSubjectChange.bind(this)}/>
                    <TextField required label = "Message" variant = "filled" classes = {{root: classes.textField}} multiline rows = {10} value = {message} onChange = {onMessageChange.bind(this)}/>
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
        <EmailSendingDialog 
        isOpen = {isEmailSendingDialogOpen} 
        onClose = {handleEmailSendingDialogClose}
        showSendingEmailProgress = {showSendingEmailProgress}
        showEmailSendSuccedIcon = {showEmailSendSuccedIcon}
        showEmailSendFailIcon = {showEmailSendFailIcon}
        />
        </>
    );
}

export default Contact