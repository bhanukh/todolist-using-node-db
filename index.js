// require express for setting up the express server
const express =require('express');

// set up the port number
const port = 4000;

//require path for seeting path of views
const path= require('path');

// importing the DataBase
const db= require('./config/mongoose');

//importing  todo schema
const Todo= require('./models/todo');

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


// rendering the App Page
app.get('/', function(req, res){
    Todo.find({}, function(err, todo){
        if(err){
            console.log('Error in fetching tasks from db');
            return;
        }

        return res.render('home', {
            //sending title name
            tittle: "Todo-List",
            todo: todo
        });
    }
)});


// creating Tasks
app.post('/create-task', function(req, res){
  //  console.log("Creating Task");
    
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
        }, function(err, newtodo){
        if(err){console.log('error in creating task', err); return;}
        

        //console.log(newtask);
        return res.redirect('back');

    });
});


// deleting Tasks
app.get('/delete-task', function(req, res){
    // get the id from query
    var id = req.query;

    // checking the number of tasks selected to delete
    var count = Object.keys(id).length;
    for(let i=0; i < count ; i++){
        
        // finding and deleting tasks from the DB one by one using id
        Todo.findByIdAndDelete(Object.keys(id)[i], function(err){
        if(err){
            console.log('error in deleting task');
            }
        })
    }
    return res.redirect('back'); 
});

// make the app to listen on asigned port number
app.listen(port, function(err){
    //if error
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    //successfuly running
    console.log(`Server is running on port : ${port}`);
});