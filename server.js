var express = require('express'),
router = express.Router(),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
path = require('path'),
port = 3000,
logger = require('morgan'),
session = require('express-session'),
passport = require('passport'),
app = express();

//Retrieve static pages
app.use(express.static( __dirname + '/Angular-app/dist' ));
app.use('/uploads', express.static('uploads'))


//Middlewares
// Body Paraser
app.use(bodyParser.json({limit: '50mb'}));
// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
//Session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat', //change to random string that can't be hacked
    resave: false,
    saveUninitialized: false,    //create a cookie even if user didn't login
    cookie: { maxAge: 60000 }
    }))
//Passport
app.use(passport.initialize());
app.use(passport.session());
//morgan logger
app.use(logger('dev'));

// Set up database connection, Schema, model
mongoose.Promise = global.Promise;
//require your mongoose.js file connection
require('./server/config/mongoose.js')

// ROUTES:
//session routes
const sessions = require('./server/config/sessionsRoute')(app);
//users routes
const users = require('./server/config/usersRoute')(app);
// const users = require('./server/config/usersRoute');
// app.use('/users', users);
//camera routes
const cameras = require('./server/config/camerasRoute');
app.use('/cameras', cameras);
//shop routes
const shops = require('./server/config/shopsRoute');
app.use('/shops', shops);
//visit routes
const visits = require('./server/config/visitsRoute')(app);
//angular routes
const angular = require('./server/config/angularRoutes')(app);     

// END OF ROUTING...

app.listen(port, ()=> {
    console.log("listening on port: ", port);
    });
