//importing  todo schema
const Todo= require('../models/todo');

//exporting the module  and redering create-task
module.exports.home = function(req,res){
    
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
        }, function(err, newtodo){
        if(err){console.log('error in creating task', err); return;}
        

        //console.log(newtask);
        return res.redirect('back');

    });
}