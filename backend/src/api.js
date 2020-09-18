var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const serverless = require('serverless-http');


let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
});

console.log("Transporter host: " + transporter.options.host);
console.log("Username: " + process.env.EMAIL_USERNAME);
console.log ("Password: " + process.env.EMAIL_PASSWORD);

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
//app.listen(8001);

router.get('/', (req,res) => {
    res.send('Ravensu API');
})

router.post('/send', (req, res, next)=>{
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

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app);

