var express = require('express'),
router = express.Router(),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
path = require('path'),
port = 3000,
logger = require('morgan')
app = express();

//Retrieve static pages
app.use(express.static( __dirname + '/Angular-app/dist' ));
app.use('/uploads', express.static('uploads'))

// JSON
app.use(bodyParser.json({limit: '50mb'}));
// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
//Middlewares
app.use(logger('dev'));
// Set up database connection, Schema, model
mongoose.Promise = global.Promise;
//require your mongoose.js file connection
require('./server/config/mongoose.js')

// ROUTES:
//users routes
const users = require('./server/config/usersRoute');
app.use('/users', users);
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
