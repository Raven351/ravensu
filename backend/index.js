var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const config = require('./config');


let transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    secure: false,
    auth: {
      user: config.USER,
      pass: config.PASS
    }
});

console.log("Transporter host: " + transporter.options.host);
console.log("Username: " + config.USER);
console.log ("Password: " + config.PASS);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Server ready for taking messages");
    }
})

const app = express();
app.use(cors());
app.use(express.json());
app.listen(8001);
app.get('/', (req,res) => {
    res.send('Ravensu API');
})

app.post('/send', (req, res, next)=>{
    console.log('/send POST request');
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;
    var content = `Message from ravensu contact form:\nName: ${name} \nEmail: ${email} \nSubject: ${subject} \nMessage: ${message}`;

    var mail = {
        from: `"${name} " ${email}`,
        to: 'adam.panzert34@gmail.com',
        subject: subject,
        text: content
    }

    transporter.sendMail(mail, (error, data)=>{
        if (error) {
            res.json({status: 'fail'});
        }
        else {res.json({status: 'success'})};
    })
})




