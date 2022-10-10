/* var dotenv = require("dotenv"); */
require('dotenv').config({
    path: './.env'
})

var express = require("express");
var http = require("http");
var path = require("path");
var nodemailer = require("nodemailer");
const {
    response
} = require("express");

var app = express(); // creates a basic express app for us  which will let us connect to http server
var server = http.Server(app); // creates a http server
var port = 500;

app.set("port", port); //set port to port variable
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, "static")))
app.use('/public', express.static(path.join(__dirname, 'public')));

//ROUTING


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static/index.html"))
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "static/contact.html"))
})

app.get("/aboutme", (req, res) => {
    res.sendFile(path.join(__dirname, "static/aboutme.html"))
})

app.get("/education", (req, res) => {
    res.sendFile(path.join(__dirname, "static/education.html"))
})

app.post("/send_email", (req, res) => {
    const output = `
    <p>You have a new message :)</p>
    <h3> Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>  
    </ul>
    <h3> Subject</h3>
    <p>${req.body.subject}</p>
    <h3> Message</h3>
    <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAILADDRESS,
            pass: process.env.PASSWORD,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: '"Portfolio Contact" <rebeccarosiestest123@outlook.com>', // sender address
        to: "rebeccarosies@outlook.be", // list of receivers
        subject: "Portfolio Message", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        console.log("test1");
        if (error) {
            return console.log(error);
        } else {
            console.log("sent an email");
        };

        res.redirect("/");
        console.log("redirected")
        /*  console.log("Message sent: %s", mailOptions.messageId);
         console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info)); */
    });

})

server.listen(port, function () {
    console.log("starting server on port " + port);
})

console.clear();