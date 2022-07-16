// require express for setting up the express server
const express =require('express');

// set up the port number
const port = 4000;

//require path for seeting path of views
const path= require('path');

// importing the DataBase
const db= require('./config/mongoose');

// using express
const app=express();

// to use encrypted data
const bodyParser = require('body-parser');

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// to use encrypted data
app.use(bodyParser.urlencoded({extended: true}));

// using static files
app.use(express.static('assets'));

//use express router
app.use('/', require('./routes/index'));

// make the app to listen on asigned port number
app.listen(port, function(err){
    //if error
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    //successfuly running
    console.log(`Server is running on port : ${port}`);
});