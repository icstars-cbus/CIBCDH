var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var bcrypt = require("bcrypt");

app.use(bodyParser.urlencoded({
    extended: true
}));
var path = require('path');

const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

const flash = require('express-flash');
app.use(flash());

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.listen(8000, function () {
    console.log("listening on 8000");
});

require('./server/config/mongoose');
require('./server/config/routes')(app);