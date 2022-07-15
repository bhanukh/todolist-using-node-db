const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/todo-app-db');

const db= mongoose.connection;
db.on('err', console.error.bind(console,'error to connecting db'));
db.once('open', function(){
    console.log('succesfuly connected to db');
})