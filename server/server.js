var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');

var config = require('./config'); // get our config file
var UserController = require('./authentication/user.controller');

app.use(cors({origin: 'http://localhost:4200'}));

// Configuration
var port = process.env.PORT || 8080;
mongoose.Promise = global.Promise;
mongoose.connect(config.database);
app.set('superSecret', config.secret);

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.send('Hello! kitty API is at http://localhost:' + port + '/api');
});

app.get('/setup', function (req, res) {
    UserController.createAdminUser('admin', 'password');
    res.json({success: true});
});

var userRouter = require("./authentication/user.router");
app.use("/users", userRouter);

var authenticationRouter = require("./authentication/authenticate.router");
app.use("/authenticate", authenticationRouter);

app.listen(port);
console.log('Magic happens at http://localhost:' + port);

