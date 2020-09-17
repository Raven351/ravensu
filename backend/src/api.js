var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const serverless = require('serverless-http');


let transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    secure: false,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASS
    }
});

console.log("Transporter host: " + transporter.options.host);
console.log("Username: " + process.env.USERNAME);
console.log ("Password: " + process.env.PASS);

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

