const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// store config variables in dotenv
require('dotenv').config();
const cors = require('cors');

// ****** allow cross-origin requests code START ****** //
app.use(cors()); // uncomment this to enable all CORS and delete cors(corsOptions) in below code
const allowedOrigins = process.env.allowedOrigins.split(',');
/**
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
 */
// ****** allow cross-origin requests code END ****** //

// ****** validation rules START ****** //
const valFunctions = require('./validators/validate');
// ****** validation rules END ****** //

// app Routes
// create application/json parser
const jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// POST /login gets urlencoded bodies
app.post('/signup', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    //if(valFunctions.checkJWTToken(req,res)) return false;
    //if(valFunctions.checkUserAuthRole(req,res)) return false;

    var dbFunctions = require('./models/connector');
    dbFunctions.createUser(req,res);
});
app.post('/login', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    //if(valFunctions.checkJWTToken(req,res)) return false;
    //if(valFunctions.checkUserAuthRole(req,res)) return false;

    var dbFunctions = require('./models/connector');
    dbFunctions.loginUser(req,res);
});
app.get('/user', jsonParser, function (req, res) {
    //if(valFunctions.checkInputDataNULL(req,res)) return false;
    //if(valFunctions.checkInputDataQuality(req,res)) return false;
    //if(valFunctions.checkUserAuthRole(req,res)) return false;
    var dbFunctions = require('./models/connector');
    var userEmail = valFunctions.checkJWTToken(req,res);
    if(!userEmail) return false;
    dbFunctions.getUser(userEmail,res);
});
app.post('/updateuser', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
    if(valFunctions.checkInputDataQuality(req,res)) return false;
    //if(valFunctions.checkUserAuthRole(req,res)) return false;
    var dbFunctions = require('./models/connector');
    var userEmail = valFunctions.checkJWTToken(req,res);
    if(!userEmail) return false;
    dbFunctions.updateUser(userEmail,req,res);
});
app.post('/setlocation', jsonParser, function (req, res) {
    if(valFunctions.checkInputDataNULL(req,res)) return false;
   // if(valFunctions.checkInputDataQuality(req,res)) return false;
    //if(valFunctions.checkUserAuthRole(req,res)) return false;
    var dbFunctions = require('./models/connector');
    var userEmail = valFunctions.checkJWTToken(req,res);
    if(!userEmail) return false;
    dbFunctions.setLocation(userEmail,req,res);
});
app.get('/getlocation', jsonParser, function (req, res) {
    //if(valFunctions.checkInputDataNULL(req,res)) return false;
    //if(valFunctions.checkInputDataQuality(req,res)) return false;
    //if(valFunctions.checkUserAuthRole(req,res)) return false;
    var dbFunctions = require('./models/connector');
    var userEmail = valFunctions.checkJWTToken(req,res);
    if(!userEmail) return false;
    dbFunctions.getLocation(userEmail,res);
});
app.use('/', (req, res) => res.send("Welcome GPS Mobile Tracker App User !"));
app.listen(process.env.PORT, () => console.log('Elish Enterprise Server is ready on localhost:' + process.env.PORT));