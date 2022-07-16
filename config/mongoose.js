// require mongoose for connenting db
const mongoose=require('mongoose');

//connecting to the db
mongoose.connect('mongodb://localhost/todo-app-db');

//creating db
const db= mongoose.connection;

//on error
db.on('err', console.error.bind(console,'error to connecting db'));

//successfuly
db.once('open', function(){
    console.log('succesfuly connected to db');
})