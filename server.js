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

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({extended: true}));
// JSON
app.use(bodyParser.json());
//Middlewares
app.use(logger('dev'));
// Set up database connection, Schema, model
mongoose.Promise = global.Promise;
//require your mongoose.js file connection
require('./server/config/mongoose.js')

// ROUTES:
    //angular routes
// require('./server/config/routes')(app);     
    //users routes
const users = require('./server/config/usersRoute');
app.use('/users', users);
    //visit routes
const visits = require('./server/config/visitsRoute')(app);
// app.use('/visits', visits);

// END OF ROUTING...

app.listen(port, function() {
    console.log("listening on port: ", port);
    });
